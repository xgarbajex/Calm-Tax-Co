import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const BreathingExercise: React.FC = () => {
  const [phase, setPhase] = useState<'inhale' | 'exhale' | 'wait'>('wait');

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const runCycle = () => {
      setPhase('inhale');
      timer = setTimeout(() => {
        setPhase('exhale');
        timer = setTimeout(runCycle, 8000);
      }, 4000);
    };

    runCycle();
    return () => clearTimeout(timer);
  }, []);

  const getInstruction = () => {
    switch (phase) {
      case 'inhale': return 'inhale through the nose...';
      case 'exhale': return 'exhale through pursed lips...';
      default: return 'inhale through the nose...';
    }
  };

  return (
    <section className="py-32 bg-[#FCFBFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:items-center">
        <div className="text-center md:text-left mb-8 md:mb-0 flex flex-col items-center md:items-start">
          <h3 className="text-5xl md:text-6xl serif-font text-[#3C3633] leading-tight">A moment of calm, on us.</h3>
          <div className="w-48 h-px bg-[#3C3633]/20 my-6 mx-auto md:mx-0" />
          <p className="text-lg text-[#5D6D7E] mt-6 max-w-xl leading-relaxed">
            Just follow along with the animation.
            <br />
            Inhale through your nose for 4, then exhale slowly through pursed lips for 8, like you're gently blowing out a candle.
          </p>
        </div>

        <div className="relative flex flex-col items-center justify-center min-h-[400px]">
          <div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{
                  scale: phase === 'inhale' ? 2.5 : 1,
                  opacity: phase === 'inhale' ? 0.7 : 0.4,
                }}
                transition={{ 
                  duration: phase === 'inhale' ? 4 : 8, 
                  ease: "easeInOut" 
                }}
                className="w-48 h-48 rounded-full filter blur-xl"
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(125,142,126,0.6) 60%, rgba(125,142,126,0) 100%)'
                }}
              />
              <motion.div
                animate={{
                  scale: phase === 'inhale' ? 1.5 : 0.8,
                  opacity: phase === 'inhale' ? 0.9 : 0.6,
                }}
                transition={{ 
                  duration: phase === 'inhale' ? 4 : 8, 
                  ease: "easeInOut" 
                }}
                className="absolute w-32 h-32 rounded-full filter blur-md"
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4) 70%, rgba(255,255,255,0) 100%)'
                }}
              />
              
              {/* Solid thin outline circles for structure */}
              {[1, 1.2, 1.6].map((multiplier, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: phase === 'inhale' ? multiplier * 1.8 : multiplier,
                    opacity: phase === 'inhale' ? 0.4 - (i * 0.05) : 0.2,
                  }}
                  transition={{ 
                    duration: phase === 'inhale' ? 4 : 8, 
                    ease: "easeInOut" 
                  }}
                  className="absolute w-48 h-48 rounded-full border border-[#7D8E7E]/40"
                  style={{ borderWidth: '0.5px' }}
                />
              ))}

              <AnimatePresence>
                <motion.div
                  key={phase}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="absolute text-xl md:text-2xl serif-font text-[#3C3633] text-center pointer-events-none"
                >
                  {getInstruction()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreathingExercise;
