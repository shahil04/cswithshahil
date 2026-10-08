'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

function ErrorContent() {
  const searchParams = useSearchParams();
  const message = searchParams.get('message') ?? 'Payment was unsuccessful or still processing.';

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-rose-50 via-white to-orange-50 px-4 py-12">
      <div className="w-full max-w-xl rounded-[32px] border border-rose-200 bg-white p-8 shadow-[0_30px_80px_rgba(244,63,94,0.12)] sm:p-10">
        <div className="flex items-center justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-rose-100 text-rose-600">
            <AlertCircle className="h-12 w-12" />
          </div>
        </div>

        <h1 className="mt-6 text-center text-4xl font-black tracking-tight text-slate-900">Payment Unsuccessful</h1>
        <p className="mt-4 text-center text-base leading-7 text-slate-600">{message}</p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/#pricing"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </Link>
          <a
            href="mailto:support@itcourse.example"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}

export default function PaymentErrorPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center text-slate-600">Loading...</div>}>
      <ErrorContent />
    </Suspense>
  );
}
