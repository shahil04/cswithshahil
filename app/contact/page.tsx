import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Contact</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Get in touch</h1>

        <div className="mt-8 space-y-6 text-base leading-8 text-slate-600">
          <p>We’re here to help you choose the right course and answer any questions before enrollment.</p>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="font-semibold text-slate-900">Email</p>
            <a href="mailto:hello@itcourse.in" className="mt-2 inline-block text-blue-600 hover:text-blue-700">
              hello@itcourse.in
            </a>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="font-semibold text-slate-900">Quick Enquiry</p>
            <a href="https://forms.gle/S69A2axjUTcLyWhx5" target="_blank" rel="noreferrer" className="mt-2 inline-block text-blue-600 hover:text-blue-700">
              Submit your enquiry form
            </a>
          </div>
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
