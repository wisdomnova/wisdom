import { notFound } from 'next/navigation';
import { getBlogBySlug, getBlogs } from '@/lib/blogs';
import BlogPost from './BlogPost';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all published blogs
export async function generateStaticParams() {
  try {
    const blogs = await getBlogs();
    return blogs.map((blog) => ({
      slug: blog.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  try {
    const resolvedParams = await params;
    const blog = await getBlogBySlug(resolvedParams.slug);

    if (!blog) {
      return {
        title: 'Blog Post Not Found | Wisdom Divine',
        description: 'The requested blog post could not be found.',
      };
    }

    return {
      title: `${blog.title} | Wisdom Divine`,
      description: blog.meta_description || blog.excerpt,
      keywords: blog.tags.join(', '),
      authors: [{ name: blog.author }],
      openGraph: {
        title: blog.title,
        description: blog.meta_description || blog.excerpt,
        type: 'article',
        publishedTime: blog.published_at || blog.created_at,
        authors: [blog.author],
        tags: blog.tags,
        url: `/blog/${blog.slug}`,
        siteName: 'Wisdom Divine',
      },
      twitter: {
        card: 'summary_large_image',
        title: blog.title,
        description: blog.meta_description || blog.excerpt,
        creator: '@wisdom_divine_d',
      },
      alternates: {
        canonical: `/blog/${blog.slug}`,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Blog Post | Wisdom Divine',
      description: 'Read the latest insights on programming and entrepreneurship.',
    };
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  try {
    const resolvedParams = await params;
    const blog = await getBlogBySlug(resolvedParams.slug);

    if (!blog) {
      notFound();
    }

    return <BlogPost blog={blog} />;
  } catch (error) {
    console.error('Error loading blog post:', error);
    notFound();
  }
}