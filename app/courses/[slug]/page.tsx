import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock3, Medal, Star, Users } from 'lucide-react';
import { PaymentButton } from '@/components/payment-button';
import { courses } from '@/data/courses';

export async function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/courses"
        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to courses
      </Link>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
          <img src={course.image} alt={course.title} className="h-80 w-full object-cover" />

          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700">
                {course.badge}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
                {course.category}
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900">{course.title}</h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">{course.description}</p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2">
                <Users className="h-4 w-4 text-blue-600" />
                {course.students.toLocaleString()} learners
              </div>
              <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                {course.rating} rating
              </div>
              <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2">
                <Clock3 className="h-4 w-4 text-violet-600" />
                {course.duration}
              </div>
              <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2">
                <Medal className="h-4 w-4 text-emerald-600" />
                {course.level}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-black text-slate-900">What you will learn</h2>
              <ul className="mt-4 space-y-3 text-slate-600">
                {course.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3">
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-blue-600" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-black text-slate-900">Course modules</h2>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {course.modules.map((module, index) => (
                  <div key={module} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Module {index + 1}</div>
                    <p className="text-sm font-medium text-slate-700">{module}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <aside className="rounded-[32px] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_25px_70px_rgba(15,23,42,0.2)]">
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-200">Course price</p>
            <div className="mt-4 flex items-end gap-3">
              <span className="text-5xl font-black">₹{course.price}</span>
              {course.originalPrice ? (
                <span className="mb-2 text-base text-slate-400 line-through">₹{course.originalPrice}</span>
              ) : null}
            </div>

            <div className="mt-6 space-y-3 text-sm text-slate-200">
              <div className="flex items-center justify-between">
                <span>Instructor</span>
                <span className="font-semibold text-white">{course.instructor}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Level</span>
                <span className="font-semibold text-white">{course.level}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Duration</span>
                <span className="font-semibold text-white">{course.duration}</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <PaymentButton
                buttonText={`Enroll now – ₹${course.price}`}
                courseId={course.courseId}
                courseName={course.courseName}
                amount={course.price * 100}
              />
              <Link
                href="/courses"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Explore more courses
              </Link>
            </div>
          </div>

          <div className="mt-6 rounded-[24px] border border-blue-500/30 bg-blue-500/10 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Includes</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              {course.tags.map((tag) => (
                <li key={tag} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}

