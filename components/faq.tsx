'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { question: 'Is this course beginner friendly?', answer: 'Yes. The course starts from fundamentals and gradually moves into advanced topics with practical assignments and project work.' },
  { question: 'How will I access the course?', answer: 'After successful payment, you will receive instant access to the course content, learning resources, and project materials.' },
  { question: 'Is the payment secure?', answer: 'Absolutely. Payments are processed through Razorpay Checkout, and verification is done securely on the server.' },
  { question: 'Will I receive a certificate?', answer: 'Yes. Students who complete the program and assignments receive a certificate of completion.' },
  { question: 'Do I get lifetime access?', answer: 'Yes. Once you enroll, you get lifetime access to the course content and updates for future additions.' },
  { question: 'Can I learn at my own pace?', answer: 'Yes. The course is designed for flexible learning so you can progress through the lessons at your own speed.' },
  { question: 'What happens after payment?', answer: 'After successful payment, you are redirected to the success page and can immediately access your course dashboard or learning portal.' },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={faq.question} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="font-semibold text-slate-900">{faq.question}</span>
              <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && <div className="border-t border-slate-200 px-5 py-4 text-sm leading-7 text-slate-600 sm:px-6">{faq.answer}</div>}
          </div>
        );
      })}
    </div>
  );
}
