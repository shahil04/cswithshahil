import Link from 'next/link';
import { BadgeCheck, BookOpenText, BriefcaseBusiness, GraduationCap, PlayCircle } from 'lucide-react';
import { PaymentButton } from './payment-button';

const enquiryFormUrl = 'https://forms.gle/S69A2axjUTcLyWhx5';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.12),_transparent_30%)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700">
            <BadgeCheck className="h-4 w-4" />
            500+ Students | 4.8/5 Rating | Practical Projects
          </div>

          <h1 className="max-w-xl text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Master IT Skills That Companies Actually Need
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Learn Data Science, AI, Python, Cloud, DevOps and other in-demand technologies through practical, project-based courses.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <PaymentButton buttonText="Buy Course Now" />
            <Link
              href="#curriculum"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50"
            >
              <PlayCircle className="h-4 w-4" />
              View Curriculum
            </Link>
            <Link
              href={enquiryFormUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-6 py-3 font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
            >
              Enquire Now
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <BookOpenText className="h-4 w-4 text-blue-600" />
              Live & Recorded Classes
            </div>
            <div className="flex items-center gap-2">
              <BriefcaseBusiness className="h-4 w-4 text-violet-600" />
              Career Guidance
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-emerald-600" />
              Certificate Included
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-10 top-12 h-40 w-40 rounded-full bg-blue-200/60 blur-3xl" />
          <div className="absolute -right-8 bottom-10 h-48 w-48 rounded-full bg-violet-200/60 blur-3xl" />

          <div className="relative rounded-[32px] border border-slate-200 bg-white/90 p-5 shadow-[0_35px_80px_rgba(15,23,42,0.12)] backdrop-blur-sm">
            <div className="rounded-[24px] bg-slate-950 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-300">Complete IT Career Course</p>
                  <h2 className="mt-2 text-2xl font-bold">Data & AI Career Program</h2>
                </div>
                <div className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300">
                  4.8 ★
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  'Live/Recorded Classes',
                  'Hands-on Projects',
                  'Assignments',
                  'Interview Preparation',
                  'Certificate',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/5 px-3 py-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/20 text-blue-300">
                      <BadgeCheck className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-slate-100">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 p-4 text-left">
                <p className="text-sm text-blue-100">Course Includes</p>
                <p className="mt-2 text-2xl font-extrabold">₹4,999</p>
                <p className="mt-1 text-sm text-blue-100 line-through">₹14,999</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
