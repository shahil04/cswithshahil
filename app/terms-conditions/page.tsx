import Link from 'next/link';

export default function TermsConditionsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Terms & Conditions</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Terms & Conditions</h1>

        <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
          <p>
            By accessing and using ITCourse, you agree to comply with these terms and policies while using our
            website, course content, and services.
          </p>
          <p>
            Course access, content usage, and payment terms may vary by program and are subject to the details shared
            at the time of enrollment.
          </p>
          <p>
            We reserve the right to update course content, pricing, and service terms as needed to maintain the quality
            and effectiveness of our learning platform.
          </p>
          <p>
            Users are expected to use the platform responsibly and not misuse, copy, redistribute, or share access
            credentials without authorization.
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
