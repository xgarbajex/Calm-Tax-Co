import React from 'react';

const WhoItsFor: React.FC = () => {
  const clientSituations = [
    {
      title: "Freelancers, Gig Workers & Side Income",
      body: "Whether freelancing is your full-time work or a side hustle, we'll help you report your income correctly and identify the deductions you're entitled to."
    },
    {
      title: "Employees & Families",
      body: "You want a professional to prepare your return accurately while keeping the process simple, organized, and straightforward. Whether you're filing on your own or with your family, we'll handle the details so you don't have to."
    },
    {
      title: "Small Business Owners",
      body: "Whether you provide services or sell products, we'll prepare your return accurately so you can stay focused on running your business."
    }
  ];

  return (
    <section id="who-its-for" className="py-32 px-6 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto">
        {/* Common Situations Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl serif-font text-[#3C3633] mb-6">Who We Help</h2>
          <div className="w-96 h-px bg-[#3C3633]/20 mx-auto mb-16" />
          <div className="grid md:grid-cols-3 gap-8">
            {clientSituations.map((card, index) => (
              <div key={index} className="relative overflow-hidden bg-white p-8 md:p-10 rounded-2xl border border-[#3C3633]/5 shadow-md hover:shadow-lg transition-all duration-500">
                {/* Background Graphic */}
                <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                  <img src="/hero_background.png" alt="" className="w-full h-full object-cover" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <h3 className="text-2xl serif-font text-[#3C3633] mb-3 pb-3 border-b border-[#3C3633]/15 w-full">{card.title}</h3>
                  <p className="text-[#59524F] text-base leading-relaxed pt-3">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
