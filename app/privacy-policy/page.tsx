import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Privacy Policy</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Privacy Policy</h1>

        <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
          <p>
            We value your privacy and are committed to protecting the personal information you share with us.
          </p>
          <p>
            We may collect contact details, payment information, course preferences, and communication history to
            process enrollments, support your learning journey, and improve our services.
          </p>
          <p>
            Information is used only for legitimate business purposes, including enrollment support, payment
            verification, and customer communication. We do not sell personal data to third parties.
          </p>
          <p>
            We use secure systems and reasonable administrative and technical safeguards to protect your information.
            You may contact us at any time to request updates or clarification regarding your personal data.
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
