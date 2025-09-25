import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-sky-50 to-rose-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-[-40px] left-[-60px] w-64 h-64 bg-gradient-to-br from-indigo-200 via-sky-200 to-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-25"></div>
        <div className="absolute bottom-[-60px] right-[-40px] w-80 h-80 bg-gradient-to-br from-sky-100 via-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25"></div>
        <div className="absolute top-1/2 left-1/3 w-56 h-56 bg-gradient-to-br from-rose-200 via-amber-100 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

        <svg className="absolute top-14 right-24 w-44 h-44 text-sky-300 opacity-30" viewBox="0 0 220 220" fill="none">
          <rect x="50" y="30" width="120" height="160" rx="16" stroke="currentColor" strokeWidth="6" />
          <line x1="70" y1="70" x2="170" y2="70" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <line x1="70" y1="100" x2="170" y2="100" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <line x1="70" y1="130" x2="150" y2="130" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <path d="M95 170L145 170" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <circle cx="110" cy="46" r="6" fill="currentColor" />
        </svg>

        <svg className="absolute bottom-8 left-24 w-52 h-52 text-indigo-200 opacity-25" viewBox="0 0 240 240" fill="none">
          <path d="M60 180L100 140" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <path d="M130 110L180 60" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <path d="M188 52C195 45 206 46 212 55C217 63 215 73 208 79L110 158L88 162L92 140L188 52Z" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M70 200H190" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 14" />
        </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center fade-in-up">
          
          
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Stories that
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-500 to-rose-500">
              inspire & inform
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover a curated collection of thoughts, insights, and stories from passionate writers across technology, lifestyle, and beyond.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/blog"
              className="btn-primary group"
            >
              <span>Explore Articles</span>
            
            </Link>
            
            <Link
              to="/about"
              className="btn-secondary"
            >
              <span>Learn More</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
