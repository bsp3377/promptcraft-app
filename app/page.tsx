import Header from '@/components/Header';
import PromptCategoryCard from '@/components/PromptCategoryCard';

const promptCategories = [
  {
    icon: '💬',
    title: 'Chatbot Assistant',
    description: 'Conversational agents for support/onboarding',
    bgColor: 'bg-blue-100'
  },
  {
    icon: '✍️',
    title: 'Copywriting',
    description: 'Ads, landing pages, emails',
    bgColor: 'bg-orange-100'
  },
  {
    icon: '🖼️',
    title: 'Image Generation',
    description: 'Midjourney, DALL·E, Stable Diffusion',
    bgColor: 'bg-green-100'
  },
  {
    icon: '📚',
    title: 'Learning & Tutors',
    description: 'Study guides and lesson creation',
    bgColor: 'bg-purple-100'
  },
  {
    icon: '💻',
    title: 'Coding Assistant',
    description: 'Functions, debugging, refactoring',
    bgColor: 'bg-gray-100'
  },
  {
    icon: '🎙️',
    title: 'Podcast & Scripts',
    description: 'Outlines, questions, scripts',
    bgColor: 'bg-indigo-100'
  },
  {
    icon: '🔬',
    title: 'Research',
    description: 'Summarize, compare, extract insights',
    bgColor: 'bg-yellow-100'
  },
  {
    icon: '📈',
    title: 'Business & Strategy',
    description: 'SWOT, competitors, GTM plans',
    bgColor: 'bg-red-100'
  },
  {
    icon: '✏️',
    title: 'Creative Writing',
    description: 'Plots, characters, vivid scenes',
    bgColor: 'bg-pink-100'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Turn your idea into the perfect AI prompt
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Choose from 20+ proven prompt styles. Beginner-friendly, powerful, and accurate.
          </p>
          <button className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full text-lg hover:bg-purple-700 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            Browse Prompt Types
          </button>
        </div>
      </section>

      {/* Prompt Categories Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Prompt Categories</h2>
            <p className="text-gray-600">Explore popular techniques</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promptCategories.map((category, index) => (
              <PromptCategoryCard
                key={index}
                icon={category.icon}
                title={category.title}
                description={category.description}
                bgColor={category.bgColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Select prompt type</h3>
              <p className="text-gray-600">Pick from 20+ curated templates</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Enter details</h3>
              <p className="text-gray-600">Add goals, tone, constraints</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Get optimized prompt</h3>
              <p className="text-gray-600">Copy and use instantly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8 px-4">
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