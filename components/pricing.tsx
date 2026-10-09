import { CheckCircle2 } from 'lucide-react';
import { PaymentButton } from './payment-button';

const pricingCards = [
  {
    title: 'Python Course',
    price: 999,
    originalPrice: 1999,
    badge: 'Popular',
    courseId: 'python-course',
    courseName: 'Python Course',
  },
  {
    title: 'Generative AI',
    price: 3999,
    originalPrice: 7998,
    badge: '50% OFF',
    courseId: 'generative-ai-course',
    courseName: 'Generative AI Course',
  },
  {
    title: 'Agentic AI',
    price: 999,
    originalPrice: null,
    badge: 'New',
    courseId: 'agentic-ai-course',
    courseName: 'Agentic AI Course',
  },
];

export function Pricing() {
  return (
    <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.25)] sm:p-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Limited Time Offer</p>
          <h3 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Start Your IT Career Journey Today
          </h3>
          <div className="mt-6 flex items-end gap-3">
            <span className="text-xl text-slate-400 line-through">₹14,999</span>
            <span className="text-5xl font-black text-white">₹4,999</span>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4">
          <PaymentButton
            buttonText="Get Instant Access – ₹4,999"
            courseId="data-ai-career-program"
            courseName="Full Stack Data & AI Career Program"
            amount={4999 * 100}
            originalPrice={14999}
          />
          <div className="flex flex-wrap gap-4 text-sm text-slate-200">
            {['Secure Razorpay Payment', 'Instant Confirmation', 'Lifetime Access', 'Certificate'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {pricingCards.map((item) => (
          <div key={item.title} className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <div className="inline-flex rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-100">
              {item.badge}
            </div>
            <h4 className="mt-4 text-2xl font-black text-white">{item.title}</h4>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-4xl font-black text-white">₹{item.price}</span>
              {item.originalPrice ? <span className="text-sm text-slate-400 line-through">₹{item.originalPrice}</span> : null}
            </div>
            <div className="mt-5">
              <PaymentButton
                variant="secondary"
                buttonText={`Buy ${item.title} – ₹${item.price}`}
                courseId={item.courseId}
                courseName={item.courseName}
                amount={item.price * 100}
                originalPrice={item.originalPrice ?? item.price}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
