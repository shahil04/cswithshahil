'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { ArrowRight, CheckCircle2, Download } from 'lucide-react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get('paymentId') ?? 'N/A';
  const orderId = searchParams.get('orderId') ?? 'N/A';
  const courseName = searchParams.get('courseName') ?? 'Full Stack Data & AI Career Program';
  const customerName = searchParams.get('customerName') ?? 'N/A';
  const customerPhone = searchParams.get('customerPhone') ?? 'N/A';
  const customerEmail = searchParams.get('customerEmail') ?? 'N/A';
  const customerNotes = searchParams.get('customerNotes') ?? 'N/A';

  const learningHref =
    courseName === 'Generative AI Project Source Code' ? '/courses/generative-ai-project-source-code' : '/courses';

  const handleDownloadReceipt = () => {
    const receiptDate = new Date().toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    const printWindow = window.open('', '_blank', 'width=900,height=700');

    if (!printWindow) {
      return;
    }

    const printContent = [
      `<html><head><title>CSwithShahil Receipt</title>`,
      `<style>body{font-family:Arial,sans-serif;margin:40px;color:#0f172a;background:#fff} .header{background:#10b981;color:#fff;padding:18px 24px;border-radius:12px}.title{font-size:28px;font-weight:700;margin:0}.meta{margin-top:20px;display:grid;grid-template-columns:1fr 1fr;gap:18px}.card{border:1px solid #e2e8f0;border-radius:12px;padding:16px}.label{font-size:12px;color:#64748b;margin-bottom:8px}.value{font-size:16px;font-weight:700;word-break:break-word}.footer{margin-top:28px;font-size:12px;color:#475569;line-height:1.6}.section{margin-top:18px}.muted{color:#64748b}</style>`,
      `</head><body>`,
      `<div class="header"><div class="title">CSwithShahil</div><div style="margin-top:6px;font-size:14px;">Payment Receipt</div></div>`,
      `<div class="meta">`,
      `<div class="card"><div class="label">Course</div><div class="value">${courseName}</div></div>`,
      `<div class="card"><div class="label">Date</div><div class="value">${receiptDate}</div></div>`,
      `<div class="card"><div class="label">Payment ID</div><div class="value">${paymentId}</div></div>`,
      `<div class="card"><div class="label">Order ID</div><div class="value">${orderId}</div></div>`,
      `<div class="card"><div class="label">Student Name</div><div class="value">${customerName}</div></div>`,
      `<div class="card"><div class="label">Phone</div><div class="value">${customerPhone}</div></div>`,
      `<div class="card"><div class="label">Email</div><div class="value">${customerEmail}</div></div>`,
      `<div class="card" style="grid-column:1 / -1"><div class="label">Notes</div><div class="value">${customerNotes}</div></div>`,
      `</div>`,
      `<div class="footer"><div class="section">Thank you for choosing CSwithShahil by Shahil Sir.</div><div class="section">This is a computer-generated receipt for your successful course purchase.</div></div>`,
      `<script>window.onload=function(){setTimeout(function(){window.print();setTimeout(function(){window.close();},500);},300)};</script>`,
      `</body></html>`,
    ].join('');

    printWindow.document.open();
    printWindow.document.write(printContent);
    printWindow.document.close();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-12">
      <div className="w-full max-w-2xl rounded-[32px] border border-emerald-200 bg-white p-8 shadow-[0_30px_80px_rgba(16,185,129,0.12)] sm:p-10">
        <div className="flex items-center justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <CheckCircle2 className="h-12 w-12" />
          </div>
        </div>

        <h1 className="mt-6 text-center text-4xl font-black tracking-tight text-slate-900">Payment Successful!</h1>
        <p className="mt-4 text-center text-lg text-slate-600">
          Welcome to the <span className="font-semibold text-slate-900">{courseName}</span>
        </p>

        <div className="mt-8 grid gap-4 rounded-3xl bg-slate-50 p-5 text-sm text-slate-700 sm:grid-cols-2">
          <div>
            <p className="text-slate-500">Payment ID</p>
            <p className="mt-1 font-semibold text-slate-900">{paymentId}</p>
          </div>
          <div>
            <p className="text-slate-500">Order ID</p>
            <p className="mt-1 font-semibold text-slate-900">{orderId}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href={learningHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            Start Learning
            <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={handleDownloadReceipt}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            <Download className="h-4 w-4" />
            Download Receipt
          </button>
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center text-slate-600">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
