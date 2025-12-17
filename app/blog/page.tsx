import { Metadata } from 'next';
import BlogCard from '@/components/BlogCard';
import blogData from '@/data/blog.json';

export const metadata: Metadata = {
  title: 'Blog - Excursions by Casablanca Cocktails',
  description: 'Read about top cocktail bars, corporate team building, cocktail culture, and more. Expert insights on mixology and cocktail tour experiences.',
};

export default function BlogPage() {
  const posts = blogData.posts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl mb-3 sm:mb-4">
            BLOG
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
            Discover the best cocktail bars, learn about cocktail culture, and get insights 
            on corporate team building experiences. Expert guides and stories from the world of mixology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

