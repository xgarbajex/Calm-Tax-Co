import { Service, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/#home' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Tax Resources', href: '/blog' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'personal',
    title: 'Personal Filing',
    description: 'For personal returns, W-2 employees, retirees, investors, and families.',
    price: 'Starting at $175',
    features: ['W-2, retirement & investment income', 'Credits & deductions', 'Federal & state e-file']
  },
  {
    id: 'self-employed',
    title: 'Self-Employed & Freelance',
    description: 'For freelancers, contractors, sole proprietors, gig workers, and small business owners.',
    price: 'Starting at $375',
    features: ['Business income reporting', 'Expense & deduction review', 'Inventory / COGS support', 'Federal & state e-file']
  }
];

export const COLORS = {
  sand: '#F9F7F2',
  stone: '#3C3633',
  sage: '#7D8E7E',
  terracotta: '#A66D5E',
  slate: '#59524F'
};
