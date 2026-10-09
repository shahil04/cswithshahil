export type Course = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  instructor: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  rating: number;
  students: number;
  price: number;
  originalPrice?: number;
  badge: string;
  image: string;
  tags: string[];
  outcomes: string[];
  modules: string[];
  courseId: string;
  courseName: string;
};

export const courses: Course[] = [
  {
    slug: 'full-stack-data-ai-career-program',
    title: 'Full Stack Data & AI Career Program',
    shortDescription: 'A career-focused program covering Python, data analytics, AI, and deployment skills.',
    description:
      'This intensive program helps learners build strong foundations in Python, data analytics, machine learning, generative AI, and deployment workflows. It is designed to turn beginners into job-ready professionals using project-based learning and guided mentorship.',
    instructor: 'Shahil Sir',
    category: 'Data & AI',
    level: 'Beginner',
    duration: '12 Weeks',
    rating: 4.9,
    students: 1280,
    price: 4999,
    originalPrice: 14999,
    badge: 'Most Popular',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Python', 'SQL', 'Analytics', 'AI', 'Projects'],
    outcomes: [
      'Build a strong foundation in Python and programming logic.',
      'Work confidently with SQL, dashboards, and analytics workflows.',
      'Understand ML, AI, and generative AI fundamentals.',
      'Ship real-world projects with confidence and clarity.',
    ],
    modules: [
      'Python foundations and coding patterns',
      'Data analysis and SQL workflows',
      'Machine learning basics and modeling',
      'Generative AI and prompt-based systems',
      'Deployment, portfolio projects, and career preparation',
    ],
    courseId: 'data-ai-career-program',
    courseName: 'Full Stack Data & AI Career Program',
  },
  {
    slug: 'python-course',
    title: 'Python Course',
    shortDescription: 'Learn Python from fundamentals to real-world problem solving and automation.',
    description:
      'This Python course focuses on core programming fundamentals, structured logic, practical coding exercises, and beginner-friendly project work. It is ideal for learners starting from scratch and those who want a strong technical base for future growth.',
    instructor: 'Shahil Sir',
    category: 'Programming',
    level: 'Beginner',
    duration: '6 Weeks',
    rating: 4.8,
    students: 980,
    price: 999,
    originalPrice: 1999,
    badge: 'Popular',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
    tags: ['Python', 'Automation', 'Logic Building', 'Scripting'],
    outcomes: [
      'Write clean Python programs from scratch.',
      'Understand variables, loops, functions, and OOP basics.',
      'Solve practical coding challenges and small projects.',
      'Prepare for advanced courses in AI and data analytics.',
    ],
    modules: [
      'Python basics and syntax',
      'Lists, loops, conditions, and functions',
      'Working with files and real-world scripts',
      'Object-oriented programming basics',
      'Mini projects and coding practice',
    ],
    courseId: 'python-course',
    courseName: 'Python Course',
  },
  {
    slug: 'generative-ai-course',
    title: 'Generative AI Course',
    shortDescription: 'Master prompt engineering, AI workflows, and practical generative AI use cases.',
    description:
      'The Generative AI course introduces learners to large language models, prompt strategies, common AI workflows, and practical business applications. This course is designed for students and professionals who want to build AI literacy and apply it meaningfully in real work.',
    instructor: 'Shahil Sir',
    category: 'AI & Automation',
    level: 'Intermediate',
    duration: '8 Weeks',
    rating: 4.9,
    students: 860,
    price: 3999,
    originalPrice: 7998,
    badge: 'Top Rated',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    tags: ['LLMs', 'Prompting', 'Automation', 'AI'],
    outcomes: [
      'Understand modern generative AI concepts clearly.',
      'Use prompting techniques for better AI outputs.',
      'Explore practical AI workflows for productivity and business use.',
      'Build workflows that combine AI with everyday tools.',
    ],
    modules: [
      'What is generative AI?',
      'Prompt engineering and model interaction',
      'AI workflows for text, content, and productivity',
      'Business use cases and automation ideas',
      'Hands-on projects and AI workflow practice',
    ],
    courseId: 'generative-ai-course',
    courseName: 'Generative AI Course',
  },
  {
    slug: 'agentic-ai-course',
    title: 'Agentic AI Course',
    shortDescription: 'Explore AI agents, planning loops, tools, and automation patterns for modern workflows.',
    description:
      'This course focuses on empowering learners to build AI agents and understand the decision loops, tool use, and orchestration patterns behind modern AI systems. It is well-suited for learners who want to go beyond basic prompt usage and explore automation at a deeper level.',
    instructor: 'Shahil Sir',
    category: 'AI Systems',
    level: 'Advanced',
    duration: '6 Weeks',
    rating: 4.8,
    students: 630,
    price: 999,
    badge: 'New',
    image:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    tags: ['AI Agents', 'Automation', 'Workflows', 'Strategy'],
    outcomes: [
      'Understand the core concepts behind AI agents.',
      'Explore reasoning, tool use, and workflow orchestration.',
      'Design practical automation patterns for real tasks.',
      'Build a stronger base for advanced AI applications.',
    ],
    modules: [
      'AI agent fundamentals',
      'Tool use and workflow design',
      'Task planning and execution loops',
      'Real-world use cases and automation patterns',
      'Prototype and apply agent-based thinking',
    ],
    courseId: 'agentic-ai-course',
    courseName: 'Agentic AI Course',
  },
  {
    slug: 'generative-ai-project-source-code',
    title: 'Generative AI Project Source Code',
    shortDescription: 'Get practical project source code and implementation guidance for real Generative AI workflows.',
    description:
      'This course gives learners ready-to-use project source code, step-by-step guidance, and implementation patterns for practical Generative AI applications. It is ideal for learners who want a hands-on project experience and want to build working AI solutions quickly.',
    instructor: 'Shahil Sir',
    category: 'AI Projects',
    level: 'Intermediate',
    duration: '4 Weeks',
    rating: 4.7,
    students: 420,
    price: 9,
    originalPrice: 99,
    badge: 'Launch Offer',
    image:
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80',
    tags: ['AI Projects', 'Source Code', 'Python', 'Automation'],
    outcomes: [
      'Use real source code to understand practical AI project build flow.',
      'Learn how to structure AI-powered project ideas and workflows.',
      'Apply generative AI patterns in a working implementation.',
      'Accelerate learning with ready-made, clear examples.',
    ],
    modules: [
      'Project setup and planning',
      'AI-powered workflow architecture',
      'Source code walkthrough and implementation',
      'Practical project adjustments and optimizations',
      'Deploying and reusing the project approach',
    ],
    courseId: 'generative-ai-project-source-code',
    courseName: 'Generative AI Project Source Code',
  },
];

export const featuredCourses = courses.slice(0, 3);
