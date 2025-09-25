import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 via-indigo-500 to-indigo-700 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-indigo-400 to-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Never miss a <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-indigo-100">story</span>
        </h2>
        
        <p className="text-xl text-slate-200 mb-12 max-w-2xl mx-auto">
          Join thousands of readers who get our latest articles delivered straight to their inbox
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-6 py-4 rounded-xl text-slate-900 bg-white/90 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white transition-all duration-200"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-600 hover:to-indigo-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Subscribe
          </button>
        </form>
        
        <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            No spam ever
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Unsubscribe anytime
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
