// Base type for common fields
export type Base = {
  id: string;
  created_at: string;
  updated_at: string;
  slug: string;
};

// Extends Base with specific fields for a post
export interface Post extends Base {
  title: string;
  html: string; // Ghost returns HTML content by default
  feature_image?: string; // Optional featured image URL
  custom_excerpt?: string; // Optional custom excerpt
  tags?: Tag[]; // Optional array of tags
  authors?: Author[]; // Optional array of authors
}

// Author details as provided by Ghost
export interface Author extends Base {
  name: string;
  profile_image?: string; // Optional profile image URL
  cover_image?: string; // Optional cover image URL
  bio?: string; // Optional biography
  website?: string; // Optional website URL
  location?: string; // Optional location
}

// Image type simplified for use with feature images and author images
export interface Image {
  url: string; // URL to the image
  caption?: string; // Optional image caption
}

// Tag details as provided by Ghost
export interface Tag extends Base {
  name: string;
  description?: string; // Optional description
  feature_image?: string; // Optional featured image URL
}
