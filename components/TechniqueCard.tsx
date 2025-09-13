import Link from 'next/link';
import { PromptTechnique } from '@/types/prompt';

interface TechniqueCardProps {
  technique: PromptTechnique;
}

export default function TechniqueCard({ technique }: TechniqueCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex flex-col items-center text-center">
        <div className="text-5xl mb-6">{technique.icon}</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{technique.title}</h3>
        <p className="text-gray-600 mb-6">{technique.description}</p>
        <Link
          href={`/techniques/${technique.category}/${technique.id}`}
          className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          Use this technique
        </Link>
      </div>
    </div>
  );
}
