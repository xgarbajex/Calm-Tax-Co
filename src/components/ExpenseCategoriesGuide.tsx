import React, { useState } from 'react';
import { ChevronDown, Megaphone, Car, UserCircle, Receipt, Home, Shield, CreditCard, Briefcase, Wrench, Salad, Store, Box, Building, PenTool, FileText, Plane, Zap, AppWindow, MoreHorizontal, Lightbulb, Info } from 'lucide-react';

const categories = [
  {
    id: 'advertising',
    icon: Megaphone,
    name: 'Advertising and marketing',
    desc: 'Anything you spend to promote your business or attract clients.',
    list: [
      'Online ads, pay-per-click, banner ads, and social media promotions',
      'Website design and logo fees',
      'Domain name registration and annual renewal fees',
      'Email marketing and direct mail campaigns',
      'Printed materials: flyers, banners, business cards, posters',
      'Promotional giveaways (branded items like shirts, pens, bags)',
      'Listing fees (like Etsy, Airbnb, or Thumbtack)',
      'Fees paid to PR or marketing agencies',
      'Sponsorships',
      'Newspaper, magazine, TV, or phone book advertising'
    ]
  },
  {
    id: 'car',
    icon: Car,
    name: 'Car and truck expenses',
    desc: 'List all your vehicle-related expenses here. If you use the same car for both business and personal trips, include the full amounts, and we will calculate the deductible portion when we file.',
    list: [
      'Gas and fuel',
      'Vehicle insurance',
      'Repairs and maintenance',
      'Vehicle loan interest',
      'Vehicle registration fees',
      'Lease payments',
      'Parking and tolls for business trips',
      'Car washes'
    ],
    note: 'Also track your business mileage. Keep a simple log of business trips (date, destination, purpose, miles). We will use this to determine whether the standard mileage rate or actual expenses method saves you more.',
    warn: 'Daily commuting between your home and a regular workplace is not deductible. Only trips made for a specific business purpose count.'
  },
  {
    id: 'contract',
    icon: UserCircle,
    name: 'Contract labor',
    desc: 'Payments to freelancers, subcontractors, or independent contractors who did work for your business. These are not employees.',
    list: [
      'Fees paid to subcontractors on your projects',
      'Freelance support (designers, writers, developers, photographers)',
      'Fees for outside research or data collection'
    ],
    note: 'If you paid any individual contractor $600 or more during the year, you are generally required to issue them a 1099-NEC. Please flag this for us so we can make sure you are covered.'
  },
  {
    id: 'commissions',
    icon: Receipt,
    name: 'Commissions and fees',
    desc: 'Fees you pay to others for referring or helping generate business. This is not for payments for actual work performed, which goes under Contract labor.',
    list: [
      'Referral fees, finder\'s fees, broker fees',
      'Sales commissions paid to non-employees',
      'Fees for drop shippers or online referral platforms',
      'Transaction or processing fees (Stripe, PayPal, Square, etc.)',
      'Shared commissions (common in real estate)'
    ]
  },
  {
    id: 'home',
    icon: Home,
    name: 'Home office expenses',
    desc: 'If you work from home and have a dedicated space used regularly and exclusively for business, you may qualify for a home office deduction. Do not try to calculate the deductible portion yourself. Just give us your total annual amounts for each expense below, plus your home\'s total square footage and your office square footage, and we will figure out what qualifies.',
    list: [
      'Rent or mortgage interest (annual total)',
      'Homeowner\'s or renter\'s insurance (annual total)',
      'Utilities (annual total)',
      'Internet service (annual total, if used for business)',
      'Repairs and maintenance specific to your home office space (annual total)'
    ],
    note: 'Just note your total home square footage and your office square footage. We will handle the rest.'
  },
  {
    id: 'insurance',
    icon: Shield,
    name: 'Insurance',
    desc: 'Insurance policies that protect your business operations. Do not include personal health insurance here as that is a separate deduction we will handle.',
    list: [
      'General liability insurance',
      'Business property insurance',
      'Workers\' compensation insurance',
      'Errors and omissions / professional liability insurance',
      'Business interruption insurance',
      'Renter\'s or fire/theft insurance for an offsite office or storage space'
    ]
  },
  {
    id: 'interest',
    icon: CreditCard,
    name: 'Interest paid',
    desc: 'Interest charges on business-related debt. This is for the interest portion only, not the loan payments themselves.',
    list: [
      'Business credit card interest',
      'Business loan interest',
      'Mortgage interest on a business property (not your home office, which goes under Home office expenses)'
    ]
  },
  {
    id: 'legal',
    icon: Briefcase,
    name: 'Legal and professional services',
    desc: 'Fees paid for professional advice related to your business, including lawyers, accountants, and consultants.',
    list: [
      'Attorney fees for business matters',
      'Accountant or bookkeeper fees (including tax preparation)',
      'Short-term consulting fees (marketing, engineering, technical, management)',
      'Professional association dues and membership fees',
      'Website analysis or one-time design consultation fees'
    ],
    note: 'If you used a professional for both personal and business advice, ask them for an itemized bill so we can deduct only the business portion.'
  },
  {
    id: 'equipment',
    icon: Wrench,
    name: 'Equipment and assets',
    desc: 'Larger purchases you use to run your business. The tax rules here depend on the cost of the item, so just tell us what you bought and what you paid and we will handle the classification.',
    list: [
      'Computers, tablets, and phones',
      'Cameras and photo/video equipment',
      'Office furniture',
      'Tools and equipment specific to your trade',
      'Copiers or printers'
    ],
    note: 'Items under $2,500 can often be deducted fully in the year of purchase. Items over $2,500 are typically treated as assets and depreciated over time. Just give us the purchase date and price for each item.'
  },
  {
    id: 'meals',
    icon: Salad,
    name: 'Meals',
    desc: 'Business meals are generally 50% deductible. Keep a quick note of who was there and what business was discussed, as the IRS may ask.',
    list: [
      'Meals with clients, prospects, or business partners where you discussed business',
      'Meals while traveling for business (away from home overnight)',
      'Meals at business conferences, trade shows, or training events'
    ],
    warn: 'Entertainment expenses (sporting events, concerts, etc.) are generally not deductible, even if a client was present.'
  },
  {
    id: 'office',
    icon: Store,
    name: 'Office expenses and supplies',
    desc: 'Day-to-day consumable supplies used in your office. These are small, quickly-used items and not equipment you hold onto for years.',
    list: [
      'Paper, pens, sticky notes, tape, scissors, staples',
      'Postage and shipping fees',
      'Envelopes and mailers',
      'Printer ink and toner',
      'Calendars and planners',
      'Cleaning supplies for your workspace',
      'Office decorating expenses',
      'Shredding or archiving services'
    ]
  },
  {
    id: 'supplies',
    icon: Box,
    name: 'Supplies (for products you make or sell)',
    desc: 'Raw materials and components that go into creating the products or services you sell. This is different from general office supplies.',
    list: [
      'Materials used to make your product (fabric, wood, metal, food ingredients, etc.)',
      'Packaging and shipping materials for goods you sell'
    ]
  },
  {
    id: 'rent',
    icon: Building,
    name: 'Rent and lease',
    desc: 'Rental costs for business spaces and equipment. Does not include your home office (see Home office expenses) or vehicle rentals (see Car and truck).',
    list: [
      'Office, retail, warehouse, or showroom space',
      'Storage units',
      'Equipment rentals (machinery, copiers, tools)',
      'Repairs and routine maintenance for a rented business space'
    ]
  },
  {
    id: 'repairs',
    icon: PenTool,
    name: 'Repairs and maintenance',
    desc: 'Costs to keep your business property and equipment in working order. Routine repairs are deductible; major improvements or renovations generally need to be treated as assets.',
    list: [
      'Plumbing repairs',
      'HVAC servicing',
      'Painting or minor electrical work in a business space',
      'Light fixture repairs',
      'Computer repair visits'
    ]
  },
  {
    id: 'taxes',
    icon: FileText,
    name: 'Taxes and licenses',
    desc: 'Business-related taxes and licensing fees you paid during the year.',
    list: [
      'Business licenses and permits',
      'DBA or fictitious business name filing fees',
      'Sales tax collected and remitted',
      'Property tax on business property (not your home)',
      'Trademark or copyright registration fees',
      'Incorporation fees',
      'Software licensing and renewal fees'
    ],
    note: 'Federal and state income tax payments are not deductible business expenses, but estimated quarterly tax payments are tracked separately. Let us know what you paid.'
  },
  {
    id: 'travel',
    icon: Plane,
    name: 'Travel',
    desc: 'Costs for business travel that requires you to be away from home overnight. Day trips go under Car and truck; meals on the road go under Meals.',
    list: [
      'Airfare, train, or bus tickets',
      'Hotel and lodging (not meals)',
      'Rental cars while traveling for business',
      'Taxis, rideshares, and shuttles while out of town',
      'Internet or phone use while traveling for business',
      'Baggage fees and shipping supplies to a work destination',
      'Dry cleaning during an overnight business trip'
    ],
    note: 'The trip must be primarily for business. If you mix in personal time, keep records of which days were business vs. personal and we will help you deduct the right portion.'
  },
  {
    id: 'utilities',
    icon: Zap,
    name: 'Utilities',
    desc: 'Utility costs for a dedicated business location. If you work from home, those costs go under Home office expenses instead.',
    list: [
      'Electricity and gas',
      'Water and sewer',
      'Trash and recycling pickup',
      'Pest control',
      'Security alarm monitoring'
    ]
  },
  {
    id: 'software',
    icon: AppWindow,
    name: 'Software, subscriptions, and apps',
    desc: 'Digital tools and recurring subscriptions used for your business.',
    list: [
      'Accounting or bookkeeping software',
      'Project management tools',
      'Cloud storage or backup services',
      'Website hosting fees',
      'Stock photo or creative asset subscriptions',
      'Communication tools (Zoom, Slack, etc.)',
      'Industry-specific software or platforms'
    ],
    note: 'Items under $2,500 can usually be expensed directly. Software over $2,500 may need to be depreciated. Just share the details and we will sort it out.'
  },
  {
    id: 'other',
    icon: MoreHorizontal,
    name: 'Other business expenses',
    desc: 'If something does not fit neatly into another category, put it here. We will review these together and find the right home for each expense.',
    list: [
      'Uniforms or required work clothing (not suitable for everyday wear)',
      'Business memberships (Costco, Sam\'s Club, etc.)',
      'Education or training directly related to your current business',
      'Printing costs',
      'Business gifts (up to $25 per recipient per IRS rules)',
      'Any other ordinary and necessary business expense'
    ],
    warn: 'Charitable contributions and political donations are not deductible as business expenses.'
  }
];

export const ExpenseCategoriesGuide: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12">
      <div className="bg-[#FCFBFA] border border-[#3C3633]/10 rounded-xl p-5 md:p-6 mb-8 shadow-sm flex gap-4 items-start">
        <div className="mt-1 bg-[#F9F7F2] p-2 rounded-full border border-[#3C3633]/5">
          <Lightbulb className="w-5 h-5 text-[#A66D5E]" />
        </div>
        <p className="text-[#3C3633] text-[15px] md:text-base leading-relaxed">
          You don't need to give us every receipt. <strong className="font-medium text-[#3C3633]">Just give us a total for each category that applies to your business.</strong> This guide explains what goes where so you can feel confident sorting your expenses. When in doubt, use "Other business expenses" and we will sort it out together.
        </p>
      </div>

      <div className="border border-[#3C3633]/10 bg-white rounded-3xl overflow-hidden shadow-sm p-6 md:p-10">
        <p className="text-[13px] md:text-sm font-semibold tracking-widest uppercase text-[#3C3633]/50 mb-6">
          Expense Categories
        </p>

        <div className="space-y-3">
          {categories.map((cat) => {
            const isOpen = openId === cat.id;
            const Icon = cat.icon;

            return (
              <div key={cat.id} className="border border-[#e4e4e0] rounded-[10px] overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggle(cat.id)}
                  aria-expanded={isOpen}
                  className="w-full bg-white border-0 p-4 md:px-5 flex items-center justify-between cursor-pointer text-left gap-4 transition-colors hover:bg-[#f9f9f7]"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#A66D5E] flex-shrink-0" />
                    <span className="text-base md:text-lg font-medium text-[#3C3633]">{cat.name}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-[#3C3633]/40 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-4 md:px-5 pb-5 pt-1 border-t border-[#e4e4e0]">
                    <p className="text-[15px] text-[#3C3633]/80 leading-relaxed mt-4 mb-3">
                      {cat.desc}
                    </p>

                    <ul className="list-disc pl-5 flex flex-col gap-1.5 marker:text-[#3C3633]/30">
                      {cat.list.map((item, i) => (
                        <li key={i} className="text-[15px] text-[#3C3633]/80 leading-relaxed pl-1">
                          {item}
                        </li>
                      ))}
                    </ul>

                    {cat.note && (
                      <div className="bg-[#eef5fb] border border-[#c3ddf0] rounded-[8px] p-4 mt-5 text-[14px] text-[#1e5f8e] leading-relaxed">
                        {cat.note.split('**').map((part, index) => 
                          index % 2 !== 0 ? <strong key={index} className="font-semibold text-inherit">{part}</strong> : part
                        )}
                      </div>
                    )}
                    {cat.warn && (
                      <div className="bg-[#fdf4e7] border border-[#f0d9a0] rounded-[8px] p-4 mt-5 text-[14px] text-[#8a5c0a] leading-relaxed">
                        {cat.warn}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-[#F9F7F2] border border-[#3C3633]/10 rounded-xl p-6 md:p-8 mt-8 shadow-sm text-center max-w-2xl mx-auto">
        <h3 className="serif-font text-xl md:text-2xl text-[#3C3633] mb-3">Not sure where something goes?</h3>
        <p className="text-[#3C3633]/80 text-[15px] md:text-base leading-relaxed mb-6">
          That's what we're here for. When you submit your documents, just flag anything you are unsure about and we will take it from there.
        </p>
        <p 
          className="text-2xl md:text-3xl italic text-[#3C3633] text-center m-0"
          style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
        >
          You bring the documents. We bring the calm.
        </p>
      </div>
    </div>
  );
};
