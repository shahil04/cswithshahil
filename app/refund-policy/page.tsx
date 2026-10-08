import Link from 'next/link';

export default function RefundPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Refund Policy</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Refund Policy</h1>

        <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
          <p>
            Refund requests are reviewed according to the service terms and the date of purchase. We aim to be fair,
            transparent, and responsive to student concerns.
          </p>
          <p>
            If a course has not been accessed or delivered in full, a refund may be considered subject to review and
            confirmation by the team.
          </p>
          <p>
            Once a course has been substantially accessed or used, the refund eligibility may reduce based on platform
            usage and service delivery terms.
          </p>
          <p>
            For any refund-related concern, please contact us with your order details and reason for the request.
          </p>
        </div>

        <div className="mt-10">
          <Link href="/" className="rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
