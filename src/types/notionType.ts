export interface NotionDataBaseResponse {
  object: string;
  results: Result[];
  next_cursor: any;
  has_more: boolean;
  type: string;
  page_or_database: PageOrDatabase;
  request_id: string;
}

export interface Result {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: User[];
  last_edited_by: User[];
  cover: any;
  icon: any;
  parent: any[];
  archived: boolean;
  properties: Properties;
  url: string;
  public_url: string | null;
}

export interface PageOrDatabase {}

export interface Properties {
  tags?: Tags;
  slug: Slug;
  title: Title;
}

export interface Tags {
  id: string;
  type: string;
  multi_select: MultiSelect[];
}

interface MultiSelect {
  id: string;
  name: string;
  color: string;
}

export interface Slug {
  id: string;
  type: string;
  rich_text: RichText[];
}

interface RichText {
  type: string;
  text: string[];
  annotations: any[]; // Replace with a more specific type if possible
  plain_text: string;
  href: null;
}

export interface Title {
  id: string;
  type: string;
  title: RichText[];
}

interface User {
  // Define the structure of a user if possible
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  tags: string[];
  content: string;
  createdAt: string;
}
