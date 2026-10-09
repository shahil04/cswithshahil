import Link from 'next/link';
import { ArrowRight, BookOpen, BriefcaseBusiness, CheckCircle2, CirclePlay, Sparkles, Star, TrendingUp, Users } from 'lucide-react';
import { CourseCard } from '@/components/course-card';
import { Curriculum } from '@/components/curriculum';
import { FAQ } from '@/components/faq';
import { FeatureCard } from '@/components/feature-card';
import { Projects } from '@/components/projects';
import { Testimonials } from '@/components/testimonials';
import { courses } from '@/data/courses';

const learningFeatures = [
  { icon: BookOpen, title: 'Python Programming', description: 'Build a strong foundation in Python and modern coding practices.' },
  { icon: TrendingUp, title: 'Data Analytics', description: 'Turn raw data into dashboards, insights, and decisions.' },
  { icon: Sparkles, title: 'Generative AI', description: 'Learn LLMs, prompts, and AI workflows used in real businesses.' },
  { icon: Users, title: 'Career Guidance', description: 'Move from learning to confident execution and job readiness.' },
  { icon: BriefcaseBusiness, title: 'Project Driven', description: 'Solve real-world problems with hands-on implementation.' },
  { icon: CheckCircle2, title: 'Live Support', description: 'Get mentoring, clarity, and structured support from start to finish.' },
];

const stats = [
  { label: 'Students trained', value: '500+' },
  { label: 'Course satisfaction', value: '4.8/5' },
  { label: 'Career-focused modules', value: '20+' },
  { label: 'Project-based learning', value: '100%' },
];

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <main>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.14),transparent_28%)]">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700">
                <Star className="h-4 w-4 fill-blue-600 text-blue-600" />
                Trusted by learners ready for career growth
              </div>

              <h1 className="mt-6 max-w-2xl text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Learn the skills that open real career opportunities.
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                Master Python, data, AI, and practical tech workflows through structured learning designed to build confidence, projects, and momentum.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
                >
                  Explore Courses
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  <CirclePlay className="h-4 w-4" />
                  Get Started
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
                    <div className="text-2xl font-black text-slate-900">{item.value}</div>
                    <div className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-blue-200/70 blur-3xl" />
              <div className="absolute -right-8 bottom-6 h-48 w-48 rounded-full bg-violet-200/70 blur-3xl" />

              <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white/90 p-5 shadow-[0_35px_80px_rgba(15,23,42,0.12)] backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                  alt="Students learning technology"
                  className="h-[420px] w-full rounded-[24px] object-cover"
                />
                <div className="absolute inset-x-8 bottom-8 rounded-[24px] border border-white/20 bg-slate-950/80 p-5 text-white shadow-2xl backdrop-blur-md">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Featured course</p>
                      <h2 className="mt-2 text-2xl font-black">Data & AI Career Program</h2>
                    </div>
                    <div className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                      4.9 ★
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-sm text-slate-200">
                    <span>₹4,999</span>
                    <span>12 weeks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Why learners choose us</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              A practical learning path built for action and career confidence
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {learningFeatures.map((feature) => (
              <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} />
            ))}
          </div>
        </section>

        <section id="course" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Featured Courses</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Learn by building, practicing, and shipping meaningful work
              </h2>
            </div>

            <CourseCard courses={courses.slice(0, 3)} />

            <div className="mt-10 flex justify-center">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-6 py-3 font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-slate-100"
              >
                View All Courses
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section id="curriculum" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Course roadmap</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              A clear roadmap from beginner to job-ready
            </h2>
          </div>
          <Curriculum />
        </section>

        <section id="reviews" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Student Reviews</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Real learners, real momentum, real growth
            </h2>
          </div>
          <Testimonials />
        </section>

        <section id="faq" className="mx-auto max-w-4xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">FAQ</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Common questions before you enroll
            </h2>
          </div>
          <FAQ />
        </section>

        <section id="enquiry" className="bg-gradient-to-r from-blue-600 to-violet-600 py-16 text-white">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">Quick Enquiry</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Need help choosing the right course?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Share your goals with us and we will guide you toward the best fit.
            </p>
            <a
              href="https://forms.gle/S69A2axjUTcLyWhx5"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Submit Enquiry
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
