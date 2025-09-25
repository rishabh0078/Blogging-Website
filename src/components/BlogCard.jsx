import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post, featured = false }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes || 0);

  const handleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Technology': 'bg-gradient-to-r from-blue-500 to-indigo-600',
      'Lifestyle': 'bg-gradient-to-r from-purple-500 to-pink-600',
      'Travel': 'bg-gradient-to-r from-emerald-500 to-teal-600',
      'Food': 'bg-gradient-to-r from-orange-500 to-red-600',
      'Health': 'bg-gradient-to-r from-rose-500 to-pink-600'
    };
    return colors[category] || 'bg-gradient-to-r from-slate-500 to-gray-600';
  };

  if (featured) {
    return (
      <article className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100/50 hover:border-indigo-200/50">
        <div className="lg:flex lg:items-stretch">
          {/* Image Section */}
          <div className="relative lg:w-1/2 overflow-hidden">
            <div className="aspect-[16/10] lg:aspect-auto lg:h-full relative">
              <img
                src={post.image}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Category Badge */}
              <div className="absolute top-6 left-6">
                <span className={`${getCategoryColor(post.category)} text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm`}>
                  {post.category}
                </span>
              </div>
              
              {/* Featured Badge */}
              <div className="absolute top-6 right-6">
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Featured
                </span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-between">
            <div className="flex-1">
              <Link to={`/blog/${post.slug}`} className="block group/title">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight group-hover/title:text-transparent group-hover/title:bg-clip-text group-hover/title:bg-gradient-to-r group-hover/title:from-indigo-600 group-hover/title:to-purple-600 transition-all duration-300">
                  {post.title}
                </h2>
              </Link>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="text-sm text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-full transition-colors duration-200 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Author & Actions */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-100">
              <div className="flex items-center">
                <div className="relative">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover ring-3 ring-indigo-100"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-3 border-white"></div>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">{post.author.name}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{post.publishedAt}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
                    isLiked 
                      ? 'bg-red-50 text-red-600 hover:bg-red-100' 
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <svg className={`w-5 h-5 transition-transform duration-200 ${isLiked ? 'scale-110' : 'hover:scale-110'}`} fill={isLiked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="font-medium">{likeCount}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100/50 hover:border-indigo-200/50 hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <div className="aspect-[16/10] relative">
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className={`${getCategoryColor(post.category)} text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md`}>
              {post.category}
            </span>
          </div>
          
          {/* Read Time Badge */}
          <div className="absolute top-4 right-4">
            <span className="bg-black/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
              {post.readTime} min
            </span>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6">
        <Link to={`/blog/${post.slug}`} className="block group/title">
          <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover/title:text-transparent group-hover/title:bg-clip-text group-hover/title:bg-gradient-to-r group-hover/title:from-indigo-600 group-hover/title:to-purple-600 transition-all duration-300 line-clamp-2">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs text-gray-600 bg-gray-50 hover:bg-gray-100 px-2.5 py-1 rounded-full transition-colors duration-200 cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Author & Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center">
            <div className="relative">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-9 h-9 rounded-full object-cover ring-2 ring-gray-100"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-semibold text-gray-900">{post.author.name}</p>
              <p className="text-xs text-gray-500">{post.publishedAt}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-200 ${
                isLiked 
                  ? 'bg-red-50 text-red-600 hover:bg-red-100' 
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              <svg className={`w-4 h-4 transition-transform duration-200 ${isLiked ? 'scale-110' : 'hover:scale-110'}`} fill={isLiked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-sm font-medium">{likeCount}</span>
            </button>
            
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 transition-all duration-200">
              <svg className="w-4 h-4 hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-sm font-medium">{post.comments || 0}</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
