'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Loader2, ShieldCheck } from 'lucide-react';

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => {
      open: () => void;
    };
  }
}

const COURSE_ID = 'data-ai-career-program';
const COURSE_NAME = 'Full Stack Data & AI Career Program';

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
}: {
  variant?: 'primary' | 'secondary';
  buttonText?: string;
  courseId?: string;
  courseName?: string;
  amount?: number;
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
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
        body: JSON.stringify({ courseId, amount }),
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
          });

          router.push(`/success?${params.toString()}`);
        },
        prefill: {
          name: 'Student',
          email: 'student@example.com',
        },
        notes: {
          courseId,
          courseName,
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

  return (
    <button
      type="button"
      onClick={handlePayment}
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
  );
}
