import Link from 'next/link';
import Header from '@/components/Header';
import TechniqueCard from '@/components/TechniqueCard';
import { Category } from '@/types/prompt';

interface CategoryPageLayoutProps {
  category: Category;
}

export default function CategoryPageLayout({ category }: CategoryPageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Back to Categories */}
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Categories
          </Link>

          {/* Category Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-3xl">{category.icon}</span>
              <h1 className="text-3xl font-bold text-gray-900">{category.name}</h1>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {category.name === 'Chatbot Assistant' && 'Choose a Prompt Technique for Chatbot Assistant'}
              {category.name === 'Copywriting' && 'Choose a Prompt Technique for Copywriting'}
              {category.name === 'Image Generation' && 'Choose a Prompt Technique for Image Generation'}
              {category.name === 'Learning & Tutors' && 'Choose a Prompt Technique for Learning & Tutors'}
              {category.name === 'Coding Assistant' && 'Choose a Prompt Technique for Coding Assistant'}
              {category.name === 'Podcast & Scripts' && 'Choose a Prompt Technique for Podcast & Scripts'}
              {category.name === 'Research' && 'Choose a Prompt Technique for Research'}
              {category.name === 'Business & Strategy' && 'Select a Prompt Technique for Business & Strategy'}
              {category.name === 'Creative Writing' && 'Select a Prompt Technique for Creative Writing'}
            </h2>
            <p className="text-xl text-gray-600">{category.description}</p>
          </div>

          {/* Techniques Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.techniques.map((technique) => (
              <TechniqueCard key={technique.id} technique={technique} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8 px-4 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="/about" className="hover:text-gray-900">About</a>
              <a href="/contact" className="hover:text-gray-900">Contact</a>
              <a href="/terms" className="hover:text-gray-900">Terms</a>
              <a href="/privacy" className="hover:text-gray-900">Privacy</a>
            </div>
            <div className="text-sm text-gray-600">
              Made with ❤️ by PromptCraft
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
