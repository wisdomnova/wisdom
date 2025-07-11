export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured: boolean;
  published: boolean;
  category: string;
  tags: string[];
  read_time: string;
  author: string;
  meta_description?: string;
  created_at: string;
  updated_at: string;
  published_at?: string;
}

export interface BlogFilters {
  category?: string;
  searchTerm?: string;
  tags?: string[];
  featured?: boolean;
}