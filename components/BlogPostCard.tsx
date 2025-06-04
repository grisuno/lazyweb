
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';
import { ChevronRightIcon } from './icons/ChevronRightIcon';


interface BlogPostCardProps {
  post: BlogPost;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <article className="bg-slate-800 rounded-lg shadow-xl overflow-hidden flex flex-col h-full transform hover:scale-105 transition-transform duration-300">
      <img 
        className="h-48 w-full object-cover" 
        src={post.imageUrl} 
        alt={post.title} 
      />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold text-white hover:text-red-400 transition-colors">
          <Link to={`/blog#${post.slug}`}>{post.title}</Link> {/* Simple anchor link for now */}
        </h3>
        <p className="mt-3 text-sm text-slate-400 flex-grow">{post.excerpt}</p>
        <div className="mt-4">
          <p className="text-xs text-slate-500">By {post.author} on {post.date}</p>
        </div>
      </div>
      <div className="p-6 bg-slate-700/50">
         <Link 
            to={`/blog#${post.slug}`}
            className="text-red-500 hover:text-red-400 font-medium inline-flex items-center group"
          >
            Read More 
            <ChevronRightIcon className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
      </div>
    </article>
  );
};
