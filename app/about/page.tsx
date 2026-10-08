import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">About</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">About CSwithShahil</h1>
        <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
          <p>
            CSwithShahil is a practical IT training platform designed to help learners build real-world career skills in
            Python, data analytics, AI, cloud, and modern software workflows.
          </p>
          <p>
            We focus on career-ready learning through structured guidance, hands-on projects, interview preparation,
            and a simple path from beginner to job-ready professional.
          </p>
          <p>
            Our goal is to make tech education accessible, practical, and outcome-focused for students and working
            professionals who want to grow in today’s digital economy.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/" className="rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800">
            Back to Home
          </Link>
          <Link href="https://forms.gle/S69A2axjUTcLyWhx5" target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
            Submit Enquiry
          </Link>
        </div>
      </div>
    </main>
  );
}
