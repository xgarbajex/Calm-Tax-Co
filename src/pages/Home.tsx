import React, { useState } from 'react';
import Hero from '../components/Hero';
import Pricing from '../components/Pricing';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import BreathingExercise from '../components/BreathingExercise';
import WhoItsFor from '../components/WhoItsFor';
import HowItWorks from '../components/HowItWorks';
import WhoWeAreNot from '../components/WhoWeAreNot';

const Home: React.FC = () => {
  return (
    <div className="space-y-0">
      <Hero />
      <HowItWorks />
      <WhoItsFor />
      <Pricing />
      <WhoWeAreNot />
      <About />
      <Testimonials />
      <BreathingExercise />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
