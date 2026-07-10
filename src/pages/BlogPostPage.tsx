import React, { useEffect, Fragment } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { BLOG_POSTS } from '../blogData';
import { ArrowLeft } from 'lucide-react';
import { ExpenseCategoriesGuide } from '../components/ExpenseCategoriesGuide';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => {
    if (!slug) return false;
    const cleanSlug = slug.replace(/\/$/, '').replace(/\.html$/, '').toLowerCase();
    return p.slug.toLowerCase() === cleanSlug;
  });

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Calm Tax Co.`;
    }
    return () => {
      document.title = 'Calm Tax Co.'; // Reset title on unmount
    };
  }, [post]);

  if (!post) {
    return (
      <div className="pt-40 md:pt-48 pb-32 px-6 text-center bg-[#F9F7F2] min-h-screen">
        <h1 className="text-4xl serif-font mb-8">Article not found ({slug})</h1>
        <Link to="/blog" className="text-[#7D8E7E] hover:underline flex items-center justify-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Tax Resources
        </Link>
      </div>
    );
  }

  // Handle custom embedded components
  const contentParts = post.content.split('<!-- INSERT EXPENSE GUIDE HERE -->');

  return (
      <motion.article 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-40 md:pt-48 pb-32 px-6 bg-[#F9F7F2] min-h-screen"
      >
        <div className="max-w-3xl mx-auto">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#7D8E7E] hover:text-[#3C3633] transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Tax Resources
          </Link>
          
          <header className="mb-16">
            <p className="text-xs uppercase tracking-widest text-[#7D8E7E] mb-4">{post.date}</p>
            <h1 className="text-4xl md:text-6xl serif-font text-[#3C3633] leading-tight mb-8">
              {post.title}
            </h1>
            <p className="text-xl text-[#59524F] italic leading-relaxed">
              {post.description}
            </p>
          </header>

          <div className="markdown-body">
            {contentParts.map((part, index) => (
              <Fragment key={index}>
                <ReactMarkdown
                  components={{
                    a: ({ node, ...props }) => (
                      <Link 
                        to={props.href || "#"} 
                        className="font-bold underline text-[#A66D5E] hover:text-[#3C3633]"
                      >
                        {props.children}
                      </Link>
                    )
                  }}
                >
                  {part}
                </ReactMarkdown>
                {index < contentParts.length - 1 && <ExpenseCategoriesGuide />}
              </Fragment>
            ))}
          </div>

        <footer className="mt-24 pt-12 border-t border-[#3C3633]/10">
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] text-center border border-[#3C3633]/5">
            <h3 className="text-2xl serif-font text-[#3C3633] mb-4">Ready for a calmer tax season?</h3>
            <p className="text-[#59524F] mb-8">
              We help freelancers and remote workers handle their filing with clarity and precision.
            </p>
            <a 
              href="/intake.html" 
              className="inline-block py-4 px-10 rounded-full bg-[#3C3633] text-white text-xs uppercase tracking-[0.2em] cursor-pointer hover:bg-[#4d4642] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#3C3633]/20 active:translate-y-0 transition-all duration-300"
            >
              Begin Walkthrough
            </a>
          </div>
        </footer>
      </div>
    </motion.article>
  );
};

export default BlogPostPage;
