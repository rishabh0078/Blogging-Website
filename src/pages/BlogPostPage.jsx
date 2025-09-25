import React from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import Sidebar from '../components/Sidebar';
import { getPostBySlug } from '../data/blogData';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Blog Post */}
          <div className="lg:col-span-3">
            <BlogPost post={post} />
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

export default BlogPostPage;
