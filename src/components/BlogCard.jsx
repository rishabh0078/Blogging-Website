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
