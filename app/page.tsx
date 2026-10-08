import {
  BarChart3,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import { CourseCard } from '@/components/course-card';
import { Curriculum } from '@/components/curriculum';
import { FAQ } from '@/components/faq';
import { FeatureCard } from '@/components/feature-card';
import { Hero } from '@/components/hero';
import { Pricing } from '@/components/pricing';
import { Projects } from '@/components/projects';
import { Testimonials } from '@/components/testimonials';

const learningFeatures = [
  { icon: Code2, title: 'Python Programming', description: 'Build a strong foundation in Python and modern coding practices.' },
  { icon: Database, title: 'SQL & Databases', description: 'Learn queries, joins, and real-world database workflows.' },
  { icon: BarChart3, title: 'Data Analytics', description: 'Turn raw data into dashboards, insights and business decisions.' },
  { icon: BrainCircuit, title: 'Machine Learning', description: 'Explore predictive models and practical ML workflows.' },
  { icon: Sparkles, title: 'Generative AI', description: 'Understand LLMs, prompts, embeddings, and real AI use cases.' },
  { icon: Rocket, title: 'Deployment & Cloud', description: 'Ship projects with deployment best practices and cloud basics.' },
];

const steps = [
  { title: 'Choose Your Course', description: 'Begin with a structured learning roadmap built for career growth.' },
  { title: 'Make Secure Payment', description: 'Pay safely using Razorpay checkout with instant confirmation.' },
  { title: 'Get Course Access', description: 'Receive access to lessons, notes, and project work immediately.' },
  { title: 'Start Learning', description: 'Follow the roadmap and build real-world projects from day one.' },
];

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <main>
        <Hero />

        <section id="course" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Course Offer</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Learn the skills employers actually care about
            </h2>
          </div>
          <CourseCard />
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">What You Will Learn</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Build future-ready IT skills from scratch
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {learningFeatures.map((feature) => (
              <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} />
            ))}
          </div>
        </section>

        <section id="curriculum" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Course Curriculum</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              A clear roadmap from beginner to job-ready
            </h2>
          </div>
          <Curriculum />
        </section>

        <section id="why-us" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Why Choose Us</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Structured learning for measurable career growth
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {[
                { icon: BookOpen, text: 'Practical Learning' },
                { icon: Layers3, text: 'Industry Projects' },
                { icon: Users, text: 'Beginner Friendly' },
                { icon: BriefcaseBusiness, text: 'Interview Preparation' },
                { icon: GraduationCap, text: 'Lifetime Course Access' },
                { icon: ShieldCheck, text: 'Certificate' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-lg font-bold text-slate-900">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">Projects</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Build projects that make your resume stand out
            </h2>
          </div>
          <Projects />
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">How It Works</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                A simple path to your next IT opportunity
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {steps.map((step, index) => (
                <div key={step.title} className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-lg font-black text-white">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Student Reviews</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Real learners, real confidence, real progress
            </h2>
          </div>
          <Testimonials />
        </section>

        <section id="pricing" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <Pricing />
        </section>

        <section id="enquiry" className="bg-gradient-to-r from-blue-600 to-violet-600 py-16 text-white">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">Quick Enquiry</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Need help choosing the right course?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Share your learning goals, timeline, and preferred track. Our team will guide you to the best-fit program.
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

        <section id="faq" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">FAQ</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Common questions before you enroll
            </h2>
          </div>
          <FAQ />
        </section>
      </main>

    </div>
  );
}
