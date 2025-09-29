import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import BlogList from '../components/BlogList';
import Sidebar from '../components/Sidebar';
import { blogPosts, getPostsByCategory } from '../data/blogData';

const Blog = () => {
  const [searchParams] = useSearchParams();
  const [posts, setPosts] = useState(blogPosts);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', 'technology', 'lifestyle', 'travel', 'food', 'health'];

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam.toLowerCase());
    }
  }, [searchParams]);

  useEffect(() => {
    let filteredPosts = blogPosts;

    // Filter by category
    if (selectedCategory !== 'all') {
      filteredPosts = getPostsByCategory(selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filteredPosts = filteredPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setPosts(filteredPosts);
  }, [selectedCategory, searchTerm]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Search is handled by the useEffect above
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-sky-50">
      
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter Bar */}
        <div className="card-modern p-8 mb-12 backdrop-blur-sm bg-white/90 border border-sky-100">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <form onSubmit={handleSearch} className="flex-1 max-w-lg">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 pl-12 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-sky-500 focus:border-transparent focus:bg-white transition-all duration-200 text-lg"
                />
                <svg
                  className="absolute left-4 top-4 h-6 w-6 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </form>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 transform hover:-translate-y-0.5 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-500 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:shadow-md'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Results Info */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-slate-600 flex items-center">
               
                {selectedCategory !== 'all' && (
                  <span className="ml-1">
                    in <span className="font-semibold text-indigo-600">{selectedCategory}</span>
                  </span>
                )}
                {searchTerm && (
                  <span className="ml-1">
                    matching "<span className="font-semibold text-sky-600">{searchTerm}</span>"
                  </span>
                )}
              </p>
              
              {(selectedCategory !== 'all' || searchTerm) && (
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchTerm('');
                  }}
                  className="text-sm text-slate-500 hover:text-slate-700 flex items-center transition-colors duration-200"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Clear filters
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:grid lg:grid-cols-4 lg:gap-12">
          {/* Blog Posts */}
          <div className="lg:col-span-3">
            {posts.length > 0 ? (
              <BlogList posts={posts} showFeatured={selectedCategory === 'all' && !searchTerm} />
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">No articles found</h3>
                <p className="text-slate-600 mb-6">
                  Try adjusting your search terms or browse different categories
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchTerm('');
                  }}
                  className="btn-primary"
                >
                  View All Articles
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="mt-12 lg:mt-0">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
