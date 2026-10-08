import { ArrowUpRight, BrainCircuit, Database, Gauge, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'House Price Prediction',
    category: 'Machine Learning',
    description: 'Build an end-to-end regression model to predict property values using real-world housing datasets.',
    gradient: 'from-blue-500 via-blue-600 to-indigo-600',
    badges: ['Python', 'Scikit-learn'],
    icon: Gauge,
  },
  {
    title: 'Customer Churn Prediction',
    category: 'Analytics',
    description: 'Analyze retention signals and design a churn model that helps businesses make smarter decisions.',
    gradient: 'from-violet-500 via-purple-600 to-fuchsia-600',
    badges: ['SQL', 'ML'],
    icon: Database,
  },
  {
    title: 'Sales Analytics Dashboard',
    category: 'Dashboarding',
    description: 'Create interactive reports that convert raw sales data into executive-ready business insights.',
    gradient: 'from-cyan-500 via-sky-600 to-blue-700',
    badges: ['Power BI', 'Excel'],
    icon: ArrowUpRight,
  },
  {
    title: 'AI Resume Analyzer',
    category: 'Generative AI',
    description: 'Use LLM concepts to analyze CVs, detect missing skills, and recommend hiring improvements.',
    gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
    badges: ['LLM', 'Prompting'],
    icon: BrainCircuit,
  },
  {
    title: 'RAG Document Chatbot',
    category: 'AI Application',
    description: 'Build a document Q&A bot that retrieves answers from knowledge sources with semantic search.',
    gradient: 'from-amber-500 via-orange-600 to-red-500',
    badges: ['RAG', 'Vector DB'],
    icon: Sparkles,
  },
  {
    title: 'AI Career Assistant',
    category: 'Workflow Automation',
    description: 'Create an AI assistant that helps students prepare for interviews and career planning tasks.',
    gradient: 'from-pink-500 via-rose-600 to-violet-600',
    badges: ['AI', 'FastAPI'],
    icon: BrainCircuit,
  },
];

export function Projects() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => {
        const Icon = project.icon;

        return (
          <div key={project.title} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
            <div className={`flex h-40 items-center justify-between bg-gradient-to-br ${project.gradient} p-5`}>
              <div>
                <p className="text-sm font-medium text-white/80">{project.category}</p>
                <h3 className="mt-2 text-2xl font-bold text-white">{project.title}</h3>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
                <Icon className="h-6 w-6" />
              </div>
            </div>

            <div className="p-5">
              <div className="mb-4 flex flex-wrap gap-2">
                {project.badges.map((badge) => (
                  <span key={badge} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                    {badge}
                  </span>
                ))}
              </div>
              <p className="text-sm leading-6 text-slate-600">{project.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
