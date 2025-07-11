import { notFound } from 'next/navigation';
import { getBlogBySlug, getBlogs } from '@/lib/blogs';
import BlogPost from './BlogPost';

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all published blogs
export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: `${blog.title} | Wisdom Divine`,
    description: blog.meta_description || blog.excerpt,
    keywords: blog.tags.join(', '),
    openGraph: {
      title: blog.title,
      description: blog.meta_description || blog.excerpt,
      type: 'article',
      publishedTime: blog.published_at || blog.created_at,
      authors: [blog.author],
      tags: blog.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.meta_description || blog.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  return <BlogPost blog={blog} />;
}