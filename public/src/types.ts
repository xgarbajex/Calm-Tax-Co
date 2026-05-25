export interface Service {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  price: string;
  features: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  description: string;
  date: string;
  content: string;
}
