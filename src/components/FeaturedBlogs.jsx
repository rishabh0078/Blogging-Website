import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedBlogs = ({ posts = [] }) => {
  if (!posts.length) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-indigo-500">
              Featured
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900">
              Latest Insights
            </h2>
            <p className="mt-3 text-base text-gray-600 max-w-2xl">
              Discover fresh perspectives and trending topics from our community of writers and thought leaders.
            </p>
          </div>

          <div className="md:text-right">
            <Link
              to="/blog"
              className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
            >
              Explore all articles
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid gap-8 sm:gap-10 lg:grid-cols-2">
          {posts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.slug}`}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="pt-2 border-t border-gray-100 flex justify-between items-center">
                  <p className="text-sm text-gray-600">-  {post.author.name}</p>
                  <p className="text-sm text-gray-500">{post.readTime} min read</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
