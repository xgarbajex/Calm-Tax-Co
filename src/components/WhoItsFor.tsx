import React from 'react';

const WhoItsFor: React.FC = () => {
  const cards = [
    {
      label: "W-2 income",
      title: "The cautious W-2 filer",
      body: "You've been using TurboTax for years and it mostly works. But you've started wondering whether you're missing things, and you'd like a human to read your return before it goes out."
    },
    {
      label: "1099 or side income",
      title: "Side income",
      body: "You have a side income stream from freelance work, Etsy, or a single 1099 client. Schedule C feels like a foreign country. You'd like someone to handle it without making it a big deal."
    },
    {
      label: "New to self-employment",
      title: "Newly freelance",
      body: "You went full freelance or independent contractor in the last year or two. Your income is irregular, and you need someone to handle the filing correctly, including Schedule C and quarterly estimates, without a lot of back and forth."
    },
    {
      label: "Creative or knowledge worker",
      title: "Knowledge worker or creative",
      body: "You're a designer, therapist, writer, or consultant. Your situation is straightforward but it's yours, and you'd rather work with someone who takes it seriously without making you feel small."
    }
  ];

  return (
    <section id="who-its-for" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl serif-font text-[#3C3633] mb-6">Sound familiar?</h2>
        <p className="text-[#5D6D7E] text-lg mb-16">Four situations we know well.</p>
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-[#F9F7F2] p-8 md:p-12 rounded-2xl border border-[#3C3633]/5 hover:shadow-lg transition-all duration-500">
              <span className="text-sm uppercase tracking-[0.2em] font-medium text-[#7D8E7E] mb-6 block">{card.label}</span>
              <h3 className="text-3xl serif-font text-[#3C3633] mb-4">{card.title}</h3>
              <p className="text-[#5D6D7E] text-base md:text-lg leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
