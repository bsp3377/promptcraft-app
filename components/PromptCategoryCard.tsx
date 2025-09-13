import Link from 'next/link';

interface PromptCategoryCardProps {
  id: string;
  icon: string;
  title: string;
  description: string;
  bgColor: string;
}

export default function PromptCategoryCard({ id, icon, title, description, bgColor }: PromptCategoryCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex flex-col gap-4">
        <div className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center text-2xl`}>
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        <Link
          href={`/categories/${id}`}
          className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm hover:bg-purple-700 transition-colors mt-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          Use this prompt
        </Link>
      </div>
    </div>
  );
}
