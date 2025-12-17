import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import blogData from '@/data/blog.json';
import { formatDate } from '@/lib/utils';
import BlogCard from '@/components/BlogCard';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogData.posts.find(p => p.slug === slug);
  
  if (!post) {
    return {
      title: 'Post Not Found - Excursions by Casablanca Cocktails',
    };
  }

  return {
    title: `${post.title} - Excursions by Casablanca Cocktails`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogData.posts.find(p => p.slug === slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = blogData.posts
    .filter(p => p.slug !== slug && post.relatedPosts?.includes(p.slug))
    .slice(0, 3);

  return (
    <div className="py-12 sm:py-16 md:py-24">
      <article className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3 sm:mb-4">
            <span className="text-sm sm:text-base text-accent font-semibold">{post.category}</span>
            <span className="text-xs sm:text-sm text-muted-foreground">{formatDate(post.date)}</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">
            {post.title}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
            By {post.author} • {formatDate(post.date)}
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative h-48 sm:h-64 md:h-96 mb-6 sm:mb-8 rounded-lg overflow-hidden">
          {post.featuredImage ? (
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          ) : (
            <Image
              src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=1200&q=80"
              alt={post.title}
              fill
              className="object-cover"
            />
          )}
        </div>

        {/* Content */}
        <div className="prose prose-sm sm:prose-lg max-w-none mb-8 sm:mb-12">
          <div className="text-sm sm:text-base text-muted-foreground whitespace-pre-line leading-relaxed">
            {post.content}
          </div>
        </div>

        {/* Social Sharing */}
        <div className="border-t border-border pt-6 sm:pt-8 mb-8 sm:mb-12">
          <h3 className="font-heading text-xl sm:text-2xl mb-3 sm:mb-4">Share this post</h3>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://excursions.casablancacocktails.com/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors text-center text-sm sm:text-base min-h-[44px] touch-manipulation flex items-center justify-center"
            >
              Share on Twitter
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://excursions.casablancacocktails.com/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors text-center text-sm sm:text-base min-h-[44px] touch-manipulation flex items-center justify-center"
            >
              Share on Facebook
            </a>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="border-t border-border pt-8 sm:pt-12">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8">Related Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        )}

        {/* Back to Blog */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="text-accent hover:underline inline-flex items-center"
          >
            ← Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}

