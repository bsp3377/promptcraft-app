'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">PromptCraft</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
              How it works
            </Link>
            <Link href="/library" className="text-gray-600 hover:text-gray-900 transition-colors">
              Library
            </Link>
            <Link href="/sign-in" className="text-gray-600 hover:text-gray-900 transition-colors">
              Sign in
            </Link>
            <Link
              href="/start"
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
            >
              Start Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
