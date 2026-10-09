'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowRight, Filter, Search, Star } from 'lucide-react';
import { PaymentButton } from '@/components/payment-button';
import { courses } from '@/data/courses';

const categoryOptions = ['All', ...new Set(courses.map((course) => course.category))];
const levelOptions = ['All', 'Beginner', 'Intermediate', 'Advanced'];
const priceOptions = [
  { value: 'all', label: 'All prices' },
  { value: 'under-2000', label: 'Under ₹2,000' },
  { value: 'under-5000', label: 'Under ₹5,000' },
  { value: 'above-5000', label: 'Above ₹5,000' },
];

export default function CoursesPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const filteredCourses = useMemo(() => {
    const result = courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
        course.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));

      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
      const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;

      const matchesPrice =
        selectedPrice === 'all' ||
        (selectedPrice === 'under-2000' && course.price < 2000) ||
        (selectedPrice === 'under-5000' && course.price < 5000) ||
        (selectedPrice === 'above-5000' && course.price >= 5000);

      return matchesSearch && matchesCategory && matchesLevel && matchesPrice;
    });

    return result.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return b.students - a.students;
        default:
          return b.students - a.students;
      }
    });
  }, [search, selectedCategory, selectedLevel, selectedPrice, sortBy]);

  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),transparent_32%),linear-gradient(135deg,#eff6ff_0%,#f8fafc_45%,#eef2ff_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700">
              <Filter className="h-4 w-4" />
              Discover the right course for your goals
            </div>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Explore courses built for real-world growth
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Browse career-focused learning paths designed for practical outcomes, strong projects, and confident skill-building.
            </p>

            <div className="mt-8 flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <Search className="h-5 w-5 text-slate-400" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search courses, topics or skills"
                className="w-full border-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-3">
            <select
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 outline-none"
            >
              {categoryOptions.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <select
              value={selectedLevel}
              onChange={(event) => setSelectedLevel(event.target.value)}
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 outline-none"
            >
              {levelOptions.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>

            <select
              value={selectedPrice}
              onChange={(event) => setSelectedPrice(event.target.value)}
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 outline-none"
            >
              {priceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-slate-600">Sort by</label>
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 outline-none"
            >
              <option value="popular">Popularity</option>
              <option value="newest">Newest</option>
              <option value="rating">Rating</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {filteredCourses.length === 0 ? (
          <div className="rounded-[28px] border border-dashed border-slate-300 bg-white p-12 text-center">
            <p className="text-xl font-bold text-slate-900">No courses match your current filter.</p>
            <p className="mt-2 text-slate-600">Try another keyword or reset the search filters.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredCourses.map((course) => (
              <article key={course.slug} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_15px_50px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(59,130,246,0.12)]">
                <div className="relative">
                  <img src={course.image} alt={course.title} className="h-52 w-full object-cover" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700 shadow-sm">
                    {course.badge}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    <span>{course.category}</span>
                    <span>{course.level}</span>
                  </div>

                  <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-900">{course.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{course.shortDescription}</p>

                  <div className="mt-4 flex items-center gap-4 text-sm text-slate-600">
                    <span className="font-medium text-slate-800">{course.instructor}</span>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-slate-800">{course.rating}</span>
                    </div>
                    <span>{course.students.toLocaleString()} learners</span>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-black text-slate-900">₹{course.price}</span>
                      {course.originalPrice ? (
                        <span className="mb-1 text-sm text-slate-400 line-through">₹{course.originalPrice}</span>
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <Link
                      href={`/courses/${course.slug}`}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                    >
                      View Course
                    </Link>
                    <PaymentButton
                      variant="primary"
                      buttonText={`₹${course.price}`}
                      courseId={course.courseId}
                      courseName={course.courseName}
                      amount={course.price * 100}
                      originalPrice={course.originalPrice ?? course.price}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
