import Link from 'next/link';
import { ArrowRight, Star, Users } from 'lucide-react';
import { type Course, courses as defaultCourses } from '@/data/courses';

export function CourseCard({ courses = defaultCourses }: { courses?: Course[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {courses.map((course) => (
        <article
          key={course.slug}
          className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(59,130,246,0.12)]"
        >
          <div className="relative">
            <img src={course.image} alt={course.title} className="h-52 w-full object-cover transition duration-300 group-hover:scale-[1.02]" />
            <div className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700 shadow-sm">
              {course.badge}
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              <span>{course.category}</span>
              <span>{course.level}</span>
            </div>

            <h3 className="mt-4 text-2xl font-black tracking-tight text-slate-900">{course.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{course.shortDescription}</p>

            <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
              <span className="font-medium text-slate-800">{course.instructor}</span>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-slate-800">{course.rating}</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-slate-500" />
                {course.students.toLocaleString()}
              </div>
              <span>{course.duration}</span>
            </div>

            <div className="mt-5 flex items-end justify-between gap-2">
              <div>
                <span className="text-3xl font-black text-slate-900">₹{course.price}</span>
                {course.originalPrice ? <span className="ml-2 text-sm text-slate-400 line-through">₹{course.originalPrice}</span> : null}
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <Link
                href={`/courses/${course.slug}`}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                View Course
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
