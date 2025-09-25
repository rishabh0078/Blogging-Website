import React from 'react';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import FeaturedBlogs from '../components/FeaturedBlogs';
import { getFeaturedPosts } from '../data/blogData';

const Home = () => {
  const featuredPosts = getFeaturedPosts();

  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedBlogs posts={featuredPosts} />
      <Newsletter />
    </div>
  );
};

export default Home;
