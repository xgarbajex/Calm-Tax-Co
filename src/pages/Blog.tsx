import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../blogData';
import { ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <section className="pt-40 md:pt-48 pb-32 px-6 bg-[#F9F7F2] min-h-screen">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl serif-font text-[#3C3633] mb-6">Tax Resources</h1>
        </motion.div>

        <div className="grid gap-12">
          {BLOG_POSTS.map((post, index) => (
            <motion.article 
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-[#3C3633]/5 shadow-sm group hover:shadow-md transition-all duration-500"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <p className="text-xs uppercase tracking-widest text-[#7D8E7E] mb-4">{post.date}</p>
                <h2 className="text-3xl md:text-4xl serif-font text-[#3C3633] mb-4 group-hover:text-[#A66D5E] transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-[#59524F] text-lg leading-relaxed mb-8 max-w-3xl">
                  {post.description}
                </p>
                <div className="flex items-center gap-2 text-sm uppercase tracking-widest text-[#3C3633] font-medium">
                  Read article <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
