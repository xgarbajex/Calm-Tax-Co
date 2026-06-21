import React from 'react';

const WhoItsFor: React.FC = () => {
  const clientSituations = [
    {
      title: "W-2 Employee",
      body: "You've been filing your own taxes for years, but you'd like a professional review before you submit. You want confidence that everything is correct without turning tax season into a project."
    },
    {
      title: "1099 or Side Income",
      body: "You have income from a 1099 or another source outside of a traditional W-2. You want confidence that everything is reported correctly and that you're not missing deductions."
    },
    {
      title: "Small Business Owner or Independent Contractor",
      body: "You work for yourself and want tax preparation that's accurate, organized, and tailored to your situation. Whether you're providing services, selling products, or running an established business, you'd rather focus on your work than your taxes."
    }
  ];

  return (
    <section id="who-its-for" className="py-32 px-6 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto">
        {/* Common Situations Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl serif-font text-[#3C3633] mb-6">Common Client Situations</h2>
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
                  <p className="text-[#5D6D7E] text-base leading-relaxed pt-3">{card.body}</p>
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
