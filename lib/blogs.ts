import { supabase } from './supabase';
import { Blog, BlogFilters } from '@/types/blog';

export async function getBlogs(filters: BlogFilters = {}): Promise<Blog[]> {
  try {
    let query = supabase
      .from('blogs')
      .select('*')
      .eq('published', true)
      .order('published_at', { ascending: false });

    // Apply category filter
    if (filters.category && filters.category !== 'All') {
      query = query.eq('category', filters.category);
    }

    // Apply search filter
    if (filters.searchTerm) {
      query = query.or(`title.ilike.%${filters.searchTerm}%,excerpt.ilike.%${filters.searchTerm}%,content.ilike.%${filters.searchTerm}%`);
    }

    // Apply featured filter
    if (filters.featured !== undefined) {
      query = query.eq('featured', filters.featured);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }

    // Filter by tags on client side (since Supabase array filtering can be complex)
    let filteredData = data || [];
    if (filters.tags && filters.tags.length > 0) {
      filteredData = filteredData.filter(blog => 
        filters.tags!.some(tag => blog.tags.includes(tag))
      );
    }

    return filteredData;
  } catch (error) {
    console.error('Error in getBlogs:', error);
    return [];
  }
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        // No rows found
        return null;
      }
      console.error('Error fetching blog by slug:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error in getBlogBySlug:', error);
    return null;
  }
}

export async function getFeaturedBlogs(): Promise<Blog[]> {
  return getBlogs({ featured: true });
}

export async function getBlogCategories(): Promise<string[]> {
  try {
    const { data, error } = await supabase
      .from('blogs')
      .select('category')
      .eq('published', true);

    if (error) {
      console.error('Error fetching categories:', error);
      return [];
    }

    const categories = Array.from(new Set(data?.map(blog => blog.category) || []));
    return ['All', ...categories.sort()];
  } catch (error) {
    console.error('Error in getBlogCategories:', error);
    return ['All'];
  }
}

export async function getBlogTags(): Promise<string[]> {
  try {
    const { data, error } = await supabase
      .from('blogs')
      .select('tags')
      .eq('published', true);

    if (error) {
      console.error('Error fetching tags:', error);
      return [];
    }

    const allTags = data?.flatMap(blog => blog.tags || []) || [];
    return Array.from(new Set(allTags)).sort();
  } catch (error) {
    console.error('Error in getBlogTags:', error);
    return [];
  }
}