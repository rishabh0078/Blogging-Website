import React from 'react';
import BlogCard from './BlogCard';

const BlogList = ({ posts, showFeatured = false, gridCols = "md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2" }) => {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-12">
        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <h3 className="mt-2 text-sm font-medium text-gray-900">No posts found</h3>
        <p className="mt-1 text-sm text-gray-500">Get started by creating your first blog post.</p>
      </div>
    );
  }

  const featuredPost = showFeatured ? posts.find(post => post.featured) : null;
  const regularPosts = showFeatured ? posts.filter(post => !post.featured) : posts;

  return (
    <div className="space-y-8">
     
      

      {/* Regular Posts Grid */}
      {regularPosts.length > 0 && (
        <div>
          {showFeatured && <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Posts</h2>}
          <div className={`grid gap-8 ${gridCols}`}>
            {regularPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      )}

      {/* Load More Button */}
      {posts.length >= 6 && (
        <div className="text-center pt-8">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Load More Posts
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogList;
