import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  featuredImage: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block card-elevated rounded-lg overflow-hidden bg-card hover:shadow-lg transition-all duration-300"
    >
      <div className="relative h-48 md:h-64 overflow-hidden">
        {post.featuredImage ? (
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <Image
            src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80&fit=crop&crop=center"
            alt={post.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        )}
      </div>
      
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-2 gap-2">
          <span className="text-xs sm:text-sm text-accent font-semibold">{post.category}</span>
          <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">{formatDate(post.date)}</span>
        </div>
        
        <h3 className="font-heading text-xl sm:text-2xl mb-2 sm:mb-3 text-card-foreground group-hover:text-accent transition-colors">
          {post.title}
        </h3>
        
        <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span className="text-xs sm:text-sm text-muted-foreground">By {post.author}</span>
          <span className="text-xs sm:text-sm text-accent group-hover:underline">
            Read More →
          </span>
        </div>
      </div>
    </Link>
  );
}

