
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SectionTitle } from '../components/SectionTitle';
import { BlogPostCard } from '../components/BlogPostCard';
import { BLOG_POSTS_DATA, SITE_NAME } from '../constants';

export const BlogPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to post if hash is present (for internal linking from cards)
    if (location.hash) {
      const id = location.hash.replace('#', '');
      // Blog posts don't have specific IDs on this page, but this could be adapted
      // For now, just scroll to top or a general blog section if needed
      // This simple blog page doesn't have individual post sections to scroll to with current setup
      // window.scrollTo(0,0) or find an element by a convention.
      // For simplicity, we'll rely on users finding the post manually or enhance this later.
      console.log("Navigated to blog with hash:", id);
    }
  }, [location]);

  return (
    <div className="py-16 lg:py-24 bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={`${SITE_NAME} Blog`} subtitle="Insights & Updates" centered />
        <p className="mt-4 text-lg text-slate-300 text-center max-w-3xl mx-auto">
          Stay informed with the latest in cybersecurity trends, insights from our experts, updates on the {SITE_NAME} Framework, and compelling case studies.
        </p>

        {BLOG_POSTS_DATA.length > 0 ? (
          <div className="mt-16 grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
            {BLOG_POSTS_DATA.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center">
            <p className="text-xl text-slate-400">No blog posts yet. Check back soon for updates!</p>
          </div>
        )}
        
        <div className="mt-20 text-center">
          <p className="text-lg text-slate-400">
            Want to contribute or have a topic suggestion? <a href={`mailto:blog@lazyown.redteam`} className="text-red-500 hover:text-red-400 underline">Let us know!</a>
          </p>
        </div>
      </div>
    </div>
  );
};
