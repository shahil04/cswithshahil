'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const curriculum = [
  {
    title: 'Module 1: Python Programming',
    topics: [
      'Python Fundamentals',
      'Functions',
      'OOP',
      'File Handling',
      'Exception Handling',
      'Real-world Projects',
    ],
  },
  {
    title: 'Module 2: SQL & Databases',
    topics: [
      'SQL Fundamentals',
      'CRUD',
      'Joins',
      'Subqueries',
      'Aggregations',
      'Real-world SQL Projects',
    ],
  },
  {
    title: 'Module 3: Data Analytics',
    topics: ['Excel', 'Power BI', 'Data Cleaning', 'Visualization', 'Business Dashboards'],
  },
  {
    title: 'Module 4: Machine Learning',
    topics: ['ML Fundamentals', 'Regression', 'Classification', 'Clustering', 'Model Evaluation', 'End-to-End ML Project'],
  },
  {
    title: 'Module 5: Generative AI',
    topics: ['LLM Fundamentals', 'Prompt Engineering', 'Embeddings', 'Vector Databases', 'RAG', 'AI Applications'],
  },
  {
    title: 'Module 6: Deployment',
    topics: ['Git & GitHub', 'FastAPI', 'Docker', 'AWS Basics', 'CI/CD', 'Deployment'],
  },
];

export function Curriculum() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {curriculum.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
            >
              <span className="text-lg font-bold text-slate-900">{item.title}</span>
              <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
              <div className="border-t border-slate-200 bg-slate-50 px-5 py-5 sm:px-6">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {item.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="h-2 w-2 rounded-full bg-blue-600" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
