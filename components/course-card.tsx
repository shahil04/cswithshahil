import { CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { PaymentButton } from './payment-button';

export function CourseCard() {
  return (
    <div className="space-y-6">
      <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">
              <Sparkles className="mr-2 h-4 w-4" />
              🔥 Limited Time Offer
            </div>
            <h3 className="text-3xl font-black tracking-tight text-slate-900">
              Full Stack Data & AI Career Program
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Learn Python, SQL, Data Analytics, Machine Learning, Generative AI and deployment from beginner to job-ready level.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                67% OFF
              </div>
              <div className="text-sm text-slate-500">Secure payment powered by Razorpay</div>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 lg:min-w-[240px]">
            <div className="flex items-center gap-2 text-slate-500 line-through">₹14,999</div>
            <div className="flex items-center gap-3">
              <span className="text-4xl font-black text-slate-900">₹4,999</span>
              <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">Save 67%</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <ShieldCheck className="h-4 w-4 text-blue-600" />
              Secure checkout
            </div>
            <PaymentButton
              buttonText="Buy Now – ₹4,999"
              courseId="data-ai-career-program"
              courseName="Full Stack Data & AI Career Program"
              amount={4999 * 100}
            />
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-3 inline-flex rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">Python</div>
          <h4 className="text-2xl font-black text-slate-900">Python Course</h4>
          <div className="mt-4 flex items-end gap-2">
            <span className="text-3xl font-black text-slate-900">₹999</span>
            <span className="text-sm text-slate-500 line-through">₹1,999</span>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600">Learn Python fundamentals, logic building, and practical coding patterns.</p>
          <div className="mt-5">
            <PaymentButton
              buttonText="Buy Python – ₹999"
              courseId="python-course"
              courseName="Python Course"
              amount={999 * 100}
            />
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-3 inline-flex rounded-full bg-violet-100 px-2.5 py-1 text-xs font-semibold text-violet-700">50% OFF</div>
          <h4 className="text-2xl font-black text-slate-900">Generative AI</h4>
          <div className="mt-4 flex items-end gap-2">
            <span className="text-3xl font-black text-slate-900">₹3,999</span>
            <span className="text-sm text-slate-500 line-through">₹7,998</span>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600">Master LLMs, prompt engineering, embeddings, and AI-powered workflow design.</p>
          <div className="mt-5">
            <PaymentButton
              buttonText="Buy Generative AI – ₹3,999"
              courseId="generative-ai-course"
              courseName="Generative AI Course"
              amount={3999 * 100}
            />
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-3 inline-flex rounded-full bg-orange-100 px-2.5 py-1 text-xs font-semibold text-orange-700">New</div>
          <h4 className="text-2xl font-black text-slate-900">Agentic AI</h4>
          <div className="mt-4 flex items-end gap-2">
            <span className="text-3xl font-black text-slate-900">₹999</span>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600">Build AI agents, chain tools, and automate practical business workflows with modern AI patterns.</p>
          <div className="mt-5">
            <PaymentButton
              buttonText="Buy Agentic AI – ₹999"
              courseId="agentic-ai-course"
              courseName="Agentic AI Course"
              amount={999 * 100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
