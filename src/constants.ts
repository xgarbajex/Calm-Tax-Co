import { Service, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'personal',
    title: 'Personal Filing',
    description: 'For personal returns, W-2 earners, investors, retirees, and families.',
    price: 'Starting at $175',
    features: ['W-2 & 1099 Support', 'Standard Deductions', 'E-Filing']
  },
  {
    id: 'self-employed',
    title: 'Self-Employed & Gig',
    description: 'For freelancers, contractors, sole proprietors, and gig economy workers.',
    price: 'Starting at $375',
    features: ['Schedule C Preparation', 'Expense Tracking Review', 'Quarterly Estimates', 'E-Filing']
  }
];

export const COLORS = {
  sand: '#F9F7F2',
  stone: '#3C3633',
  sage: '#7D8E7E',
  terracotta: '#A66D5E',
  slate: '#5D6D7E'
};
