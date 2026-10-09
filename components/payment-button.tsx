'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Loader2, ShieldCheck, X } from 'lucide-react';

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => {
      open: () => void;
    };
  }
}

type CustomerDetails = {
  name: string;
  phone: string;
  email: string;
  notes: string;
};

const EMPTY_CUSTOMER: CustomerDetails = {
  name: '',
  phone: '',
  email: '',
  notes: '',
};

async function loadRazorpay() {
  if (typeof window === 'undefined') return false;

  if (window.Razorpay) return true;

  return new Promise<boolean>((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export function PaymentButton({
  variant = 'primary',
  buttonText = 'Buy Now – ₹4,999',
  courseId = 'data-ai-career-program',
  courseName = 'Full Stack Data & AI Career Program',
  amount = 4999 * 100,
  originalPrice,
}: {
  variant?: 'primary' | 'secondary';
  buttonText?: string;
  courseId?: string;
  courseName?: string;
  amount?: number;
  originalPrice?: number;
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [customer, setCustomer] = useState<CustomerDetails>(EMPTY_CUSTOMER);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    document.body.style.overflow = showCheckoutForm ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [showCheckoutForm]);

  const finalPriceInRupees = Math.max(0, amount / 100);
  const fullPrice = Math.max(finalPriceInRupees, originalPrice ?? finalPriceInRupees);
  const discount = Math.max(0, fullPrice - finalPriceInRupees);

  const updateCustomer = (field: keyof CustomerDetails, value: string) => {
    setCustomer((prev) => ({ ...prev, [field]: value }));
    if (formError) {
      setFormError('');
    }
  };

  const validateCustomer = () => {
    if (!customer.name.trim()) return 'Name is required.';
    if (!customer.phone.trim()) return 'Phone number is required.';
    if (!customer.email.trim()) return 'Email is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.email.trim())) return 'Enter a valid email address.';
    if (customer.phone.replace(/\D/g, '').length < 10) return 'Enter a valid phone number.';
    return '';
  };

  const handlePayment = async () => {
    const validationMessage = validateCustomer();
    if (validationMessage) {
      setFormError(validationMessage);
      return;
    }

    setIsLoading(true);

    try {
      const loaded = await loadRazorpay();
      if (!loaded) {
        router.push('/payment-error?message=' + encodeURIComponent('Razorpay failed to load. Please refresh and try again.'));
        return;
      }

      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          courseId,
          amount,
          customer: {
            name: customer.name.trim(),
            phone: customer.phone.trim(),
            email: customer.email.trim(),
            notes: customer.notes.trim(),
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        router.push('/payment-error?message=' + encodeURIComponent(data.message || 'Unable to start checkout.'));
        return;
      }

      const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || data.keyId;
      if (!keyId) {
        router.push('/payment-error?message=' + encodeURIComponent('Razorpay key is missing. Please configure NEXT_PUBLIC_RAZORPAY_KEY_ID.'));
        return;
      }

      const options = {
        key: keyId,
        amount: data.amount,
        currency: data.currency,
        name: 'CSwithShahil',
        description: courseName,
        order_id: data.order_id || data.orderId,
        handler: async function (paymentResponse: {
          razorpay_payment_id: string;
          razorpay_order_id: string;
          razorpay_signature: string;
        }) {
          const verifyResponse = await fetch('/api/verify-payment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...paymentResponse,
              courseId,
              customer: {
                name: customer.name.trim(),
                phone: customer.phone.trim(),
                email: customer.email.trim(),
                notes: customer.notes.trim(),
              },
            }),
          });

          const verifyData = await verifyResponse.json();

          if (!verifyResponse.ok) {
            router.push('/payment-error?message=' + encodeURIComponent(verifyData.message || 'Payment verification failed.'));
            return;
          }

          const params = new URLSearchParams({
            paymentId: paymentResponse.razorpay_payment_id,
            orderId: paymentResponse.razorpay_order_id,
            courseName,
            customerName: customer.name.trim(),
            customerPhone: customer.phone.trim(),
            customerEmail: customer.email.trim(),
            customerNotes: customer.notes.trim(),
          });

          router.push(`/success?${params.toString()}`);
        },
        prefill: {
          name: customer.name.trim(),
          email: customer.email.trim(),
          contact: customer.phone.trim(),
        },
        notes: {
          courseId,
          courseName,
          customerName: customer.name.trim(),
          customerPhone: customer.phone.trim(),
          customerEmail: customer.email.trim(),
          customerNotes: customer.notes.trim(),
        },
        theme: {
          color: '#2563eb',
        },
        modal: {
          ondismiss: () => {
            router.push('/payment-error?message=' + encodeURIComponent('Payment cancelled. No amount was charged.'));
          },
        },
      };

      const Razorpay = window.Razorpay;
      if (!Razorpay) {
        router.push('/payment-error?message=' + encodeURIComponent('Razorpay is unavailable right now. Please try again.'));
        return;
      }

      const razorpay = new Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Payment error:', error);
      router.push('/payment-error?message=' + encodeURIComponent('Something went wrong while processing payment.'));
    } finally {
      setIsLoading(false);
    }
  };

  const isPrimary = variant === 'primary';

  const modalContent = showCheckoutForm
    ? createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-[8px]"
            onClick={() => {
              setShowCheckoutForm(false);
              setFormError('');
            }}
          />

          <div
            className="relative z-10 w-full max-w-lg origin-center overflow-hidden rounded-[30px] border border-slate-200 bg-white p-5 shadow-[0_40px_100px_rgba(15,23,42,0.35)] sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="checkout-title"
          >
            <button
              type="button"
              onClick={() => {
                setShowCheckoutForm(false);
                setFormError('');
              }}
              className="absolute right-4 top-4 rounded-full border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-100"
              aria-label="Close checkout form"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="pr-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">Checkout</p>
              <h3 id="checkout-title" className="mt-3 text-2xl font-black text-slate-900">
                Complete your purchase
              </h3>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center justify-between gap-3 text-sm text-slate-600">
                <span>Course</span>
                <span className="max-w-[60%] text-right font-semibold text-slate-900">{courseName}</span>
              </div>
              <div className="mt-3 flex items-center justify-between text-sm text-slate-600">
                <span>Full price</span>
                <span>₹{fullPrice}</span>
              </div>
              {discount > 0 ? (
                <div className="mt-2 flex items-center justify-between text-sm text-emerald-600">
                  <span>Discount</span>
                  <span>-₹{discount}</span>
                </div>
              ) : null}
              <div className="mt-3 flex items-center justify-between border-t border-slate-200 pt-3 text-base font-bold text-slate-900">
                <span>Final price</span>
                <span>₹{finalPriceInRupees}</span>
              </div>
            </div>

            <div className="mt-5 max-h-[62vh] space-y-4 overflow-y-auto pr-1">
              <div>
                <label htmlFor="student-name" className="mb-1 block text-sm font-semibold text-slate-700">
                  Full name <span className="text-red-500">*</span>
                </label>
                <input
                  id="student-name"
                  type="text"
                  value={customer.name}
                  onChange={(event) => updateCustomer('name', event.target.value)}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="student-phone" className="mb-1 block text-sm font-semibold text-slate-700">
                  Phone number <span className="text-red-500">*</span>
                </label>
                <input
                  id="student-phone"
                  type="tel"
                  value={customer.phone}
                  onChange={(event) => updateCustomer('phone', event.target.value)}
                  placeholder="Enter your phone number"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="student-email" className="mb-1 block text-sm font-semibold text-slate-700">
                  Email address <span className="text-red-500">*</span>
                </label>
                <input
                  id="student-email"
                  type="email"
                  value={customer.email}
                  onChange={(event) => updateCustomer('email', event.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="student-notes" className="mb-1 block text-sm font-semibold text-slate-700">
                  Notes (optional)
                </label>
                <textarea
                  id="student-notes"
                  rows={3}
                  value={customer.notes}
                  onChange={(event) => updateCustomer('notes', event.target.value)}
                  placeholder="Any specific requirement or note for the course"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 outline-none transition focus:border-blue-500"
                />
              </div>
            </div>

            {formError ? <p className="mt-4 rounded-xl bg-red-50 px-3 py-2 text-sm font-medium text-red-600">{formError}</p> : null}

            <button
              type="button"
              onClick={handlePayment}
              disabled={isLoading}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 text-base font-bold text-white shadow-lg shadow-blue-500/20 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-80"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <ShieldCheck className="h-4 w-4" />
                  Pay ₹{finalPriceInRupees}
                </>
              )}
            </button>
          </div>
        </div>,
        document.body,
      )
    : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setShowCheckoutForm(true)}
        disabled={isLoading}
        className={[
          'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-all duration-200 shadow-lg shadow-blue-500/20',
          isPrimary
            ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-600/25'
            : 'border border-slate-200 bg-white text-slate-900 hover:border-blue-200 hover:bg-blue-50',
          isLoading ? 'cursor-not-allowed opacity-80' : '',
        ].join(' ')}
      >
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <ShieldCheck className="h-4 w-4" />
            {buttonText}
          </>
        )}
      </button>

      {modalContent}
    </>
  );
}
