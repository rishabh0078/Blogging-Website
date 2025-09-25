import React from 'react';

const Sidebar = () => {
  const recentPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      date: "Dec 15, 2024",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building Modern Web Applications",
      date: "Dec 12, 2024",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "The Future of Web Development",
      date: "Dec 10, 2024",
      readTime: "6 min read"
    }
  ];

  const categories = [
    { name: "Technology"},
    { name: "Lifestyle"},
    { name: "Travel"},
    { name: "Food"},
    { name: "Health"}
  ];

  const tags = [
    "React", "JavaScript", "Web Development", "CSS", "Node.js",
    "Travel", "Photography", "Lifestyle", "Health", "Food"
  ];

  return (
    <aside className="w-full lg:w-80 space-y-8">
      {/* About Widget */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">About BlogSpace</h3>
        <div className="flex items-center mb-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
            alt="Author"
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold text-gray-900">John Doe</h4>
            <p className="text-gray-600 text-sm">Content Creator</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm">
          Welcome to my blog! I share insights about technology, lifestyle, and everything in between.
          Join me on this journey of discovery and learning.
        </p>
      </div>

      {/* Recent Posts Widget */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="border-b border-gray-200 pb-4 last:border-b-0">
              <h4 className="font-medium text-gray-900 hover:text-blue-600 cursor-pointer transition-colors">
                {post.title}
              </h4>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Widget */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category, index) => (
            <div key={index} className="flex justify-between items-center py-2 hover:bg-gray-50 px-2 rounded cursor-pointer transition-colors">
              <span className="text-gray-700 hover:text-blue-600">{category.name}</span>
              <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                {category.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tags Widget */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full hover:bg-blue-200 cursor-pointer transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Newsletter Widget */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md p-6 text-white">
        <h3 className="text-xl font-bold mb-4">Subscribe to Newsletter</h3>
        <p className="text-blue-100 mb-4 text-sm">
          Get the latest posts delivered right to your inbox.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="w-full bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </aside>
  );
};

export default Sidebar;
