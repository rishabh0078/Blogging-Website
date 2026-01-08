export const blogPosts = [
  {
    id: 1,
    title: "Android vs iOS: Which One Should You Choose in 2025?",
    slug: "getting-started-with-react-hooks",
    excerpt: "If there’s one debate that never seems to end, it’s Android vs iOS. Every year new phones come out, features change, and yet the question stays the same",
    content: `
      <p>React Hooks have revolutionized the way we write React components. Introduced in React 16.8, hooks allow you to use state and other React features in functional components.</p>
      
      <h2>What are React Hooks?</h2>
      <p>Hooks are functions that let you "hook into" React state and lifecycle features from function components. They don't work inside classes — they let you use React without classes.</p>
      
      <h2>The useState Hook</h2>
      <p>The useState hook is the most basic hook that allows you to add state to functional components:</p>
      
      <pre><code>import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    &lt;div&gt;
      &lt;p&gt;You clicked {count} times&lt;/p&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
        Click me
      &lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h2>The useEffect Hook</h2>
      <p>The useEffect hook lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined.</p>
      
      <h2>Custom Hooks</h2>
      <p>Custom hooks are a mechanism to reuse stateful logic between React components. They're JavaScript functions whose names start with "use" and that may call other hooks.</p>
      
      <p>React Hooks provide a more direct API to the React concepts you already know. They offer a powerful and expressive way to write components that are easier to understand and test.</p>
    `,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Technology",
    author: {
      name: "rishabh",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      bio: "Full-stack developer passionate about React and modern web technologies."
    },
    publishedAt: "Dec 15, 2024",
    readTime: 8,
    likes: 42,
    comments: 12,
    featured: true,
    tags: ["React", "JavaScript", "Hooks", "Frontend"]
  },
  {
    id: 2,
    title: "Building Responsive Web Applications with Tailwind CSS",
    slug: "building-responsive-web-applications-tailwind-css",
    excerpt: "Discover how to create beautiful, responsive web applications using Tailwind CSS. Learn about utility-first CSS and modern design patterns.",
    content: `
      <p>Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in your markup.</p>
      
      <h2>Why Choose Tailwind CSS?</h2>
      <p>Unlike traditional CSS frameworks like Bootstrap, Tailwind doesn't provide pre-designed components. Instead, it gives you the building blocks to create your own unique designs.</p>
      
      <h2>Responsive Design</h2>
      <p>Tailwind makes responsive design incredibly easy with its mobile-first approach and responsive prefixes:</p>
      
      <pre><code>&lt;div class="w-full md:w-1/2 lg:w-1/3"&gt;
  Responsive width
&lt;/div&gt;</code></pre>
      
      <h2>Customization</h2>
      <p>You can customize Tailwind to match your design system by modifying the tailwind.config.js file. This allows you to define your own colors, spacing, fonts, and more.</p>
      
      <p>Tailwind CSS empowers developers to build modern, responsive web applications quickly and efficiently while maintaining full control over the design.</p>
    `,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Technology",
    author: {
      name: "Rishabh",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      bio: "UI/UX designer and frontend developer with a passion for creating beautiful user experiences."
    },
    publishedAt: "Dec 12, 2024",
    readTime: 6,
    likes: 100,
    comments: 8,
    featured: true,
    tags: ["CSS", "Tailwind", "Responsive Design", "Frontend"]
  },
  {
    id: 3,
    title: "The Art of Minimalist Living: Finding Joy in Less",
    slug: "art-of-minimalist-living-finding-joy-in-less",
    excerpt: "Explore the principles of minimalist living and how reducing clutter can lead to a more fulfilling and peaceful life.",
    content: `
      <p>Minimalism isn't about having less for the sake of having less. It's about making room for what matters most in your life.</p>
      
      <h2>What is Minimalism?</h2>
      <p>Minimalism is a lifestyle that helps you focus on what's truly important by eliminating excess possessions, commitments, and distractions.</p>
      
      <h2>Benefits of Minimalist Living</h2>
      <ul>
        <li>Reduced stress and anxiety</li>
        <li>More time and energy for meaningful activities</li>
        <li>Financial freedom through conscious spending</li>
        <li>Improved focus and productivity</li>
        <li>Environmental benefits</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>Start small by decluttering one area at a time. Ask yourself: "Does this item add value to my life?" If not, consider letting it go.</p>
      
      <p>Remember, minimalism looks different for everyone. The goal is to create a life filled with intention and purpose.</p>
    `,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Lifestyle",
    author: {
      name: "Rishabh",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      bio: "Minimalist lifestyle advocate and wellness coach helping others find balance and intentionality."
    },
    publishedAt: "Dec 10, 2024",
    readTime: 5,
    likes: 100,
    comments: 15,
    featured: false,
    tags: ["Minimalism", "Lifestyle", "Wellness", "Productivity"]
  },
  {
    id: 4,
    title: "Exploring Hidden Gems: Off the Beaten Path Travel Destinations",
    slug: "exploring-hidden-gems-off-beaten-path-travel",
    excerpt: "Discover breathtaking destinations that most tourists never see. From secluded beaches to mountain villages, these hidden gems offer authentic travel experiences.",
    content: `
      <p>While popular tourist destinations have their charm, there's something magical about discovering places that few people have experienced.</p>
      
      <h2>Why Choose Off-the-Beaten-Path Destinations?</h2>
      <p>These hidden gems offer authentic cultural experiences, pristine natural beauty, and the chance to connect with local communities in meaningful ways.</p>
      
      <h2>Hidden Gems to Consider</h2>
      <h3>Faroe Islands</h3>
      <p>Located between Iceland and Norway, the Faroe Islands offer dramatic landscapes, charming villages, and some of the most spectacular hiking in Europe.</p>
      
      <h3>Socotra Island, Yemen</h3>
      <p>Often called the "Galápagos of the Indian Ocean," Socotra is home to unique flora and fauna found nowhere else on Earth.</p>
      
      <h2>Travel Tips</h2>
      <ul>
        <li>Research local customs and traditions</li>
        <li>Learn basic phrases in the local language</li>
        <li>Pack appropriately for the climate and activities</li>
        <li>Be respectful of local communities and environments</li>
      </ul>
      
      <p>Traveling to hidden gems requires more planning but rewards you with unforgettable experiences and stories that few others can share.</p>
    `,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Travel",
    author: {
      name: "Rishabh",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      bio: "Adventure traveler and photographer documenting unique destinations around the world."
    },
    publishedAt: "Dec 8, 2024",
    readTime: 7,
    likes: 100,
    comments: 22,
    featured: false,
    tags: ["Travel", "Adventure", "Hidden Gems", "Photography"]
  },
  {
    id: 5,
    title: "Farm-to-Table Cooking: Embracing Seasonal Ingredients",
    slug: "farm-to-table-cooking-seasonal-ingredients",
    excerpt: "Learn how to create delicious meals using fresh, seasonal ingredients sourced directly from local farms and gardens.",
    content: `
      <p>Farm-to-table cooking is more than a trend—it's a return to the way our ancestors ate, celebrating the natural flavors of seasonal ingredients.</p>
      
      <h2>Benefits of Farm-to-Table Cooking</h2>
      <ul>
        <li>Superior taste and nutrition</li>
        <li>Support for local farmers and economy</li>
        <li>Reduced environmental impact</li>
        <li>Connection to seasonal rhythms</li>
      </ul>
      
      <h2>Seasonal Cooking Tips</h2>
      <h3>Spring</h3>
      <p>Embrace fresh greens, asparagus, and early herbs. Light preparations that highlight the delicate flavors of spring produce.</p>
      
      <h3>Summer</h3>
      <p>Take advantage of abundant tomatoes, zucchini, and stone fruits. Perfect time for fresh salads and grilled vegetables.</p>
      
      <h3>Fall</h3>
      <p>Root vegetables, squashes, and apples shine in hearty stews and roasted dishes.</p>
      
      <h3>Winter</h3>
      <p>Preserved foods, citrus, and storage crops provide comfort and nutrition during colder months.</p>
      
      <p>By cooking with seasonal ingredients, you'll discover new flavors, support your local community, and develop a deeper appreciation for the natural world.</p>
    `,
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Food",
    author: {
      name: "Rishabh",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      bio: "Chef and cookbook author passionate about sustainable cooking and local food systems."
    },
    publishedAt: "Dec 5, 2024",
    readTime: 6,
    likes: 100,
    comments: 11,
    featured: false,
    tags: ["Food", "Cooking", "Seasonal", "Sustainability"]
  },
  {
    id: 6,
    title: "Mental Health in the Digital Age: Finding Balance",
    slug: "mental-health-digital-age-finding-balance",
    excerpt: "Explore strategies for maintaining mental wellness while navigating our increasingly connected digital world.",
    content: `
      <p>Our digital devices have transformed how we work, communicate, and entertain ourselves, but they've also introduced new challenges for mental health.</p>
      
      <h2>Digital Challenges</h2>
      <ul>
        <li>Information overload and constant notifications</li>
        <li>Social media comparison and FOMO</li>
        <li>Reduced face-to-face social interaction</li>
        <li>Sleep disruption from screen time</li>
      </ul>
      
      <h2>Strategies for Digital Wellness</h2>
      <h3>Set Boundaries</h3>
      <p>Create device-free zones and times, such as during meals or before bedtime.</p>
      
      <h3>Practice Mindful Usage</h3>
      <p>Be intentional about when and why you use digital devices. Ask yourself if your usage aligns with your values and goals.</p>
      
      <h3>Cultivate Real-World Connections</h3>
      <p>Prioritize in-person relationships and activities that don't involve screens.</p>
      
      <h2>Digital Detox Tips</h2>
      <p>Start small with short periods of disconnection and gradually increase. Use this time for activities that nourish your mind and body.</p>
      
      <p>Remember, technology should enhance your life, not control it. Finding the right balance is key to maintaining mental wellness in our digital age.</p>
    `,
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Health",
    author: {
      name: "Rishabh",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      bio: "Licensed therapist specializing in digital wellness and modern mental health challenges."
    },
    publishedAt: "Dec 3, 2024",
    readTime: 8,
    likes: 100,
    comments: 34,
    featured: false,
    tags: ["Mental Health", "Digital Wellness", "Balance", "Self Care"]
  }
];

export const getPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category) => {
  return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
};

export const getFeaturedPosts = () => {
  return blogPosts.filter(post => post.featured);
};

export const getRecentPosts = (limit = 5) => {
  return blogPosts.slice(0, limit);
};
