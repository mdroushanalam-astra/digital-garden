import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#0A66C2]/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A66C2]/10 border border-[#0A66C2]/30 rounded-full mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[#0A66C2]" />
            <span className="text-sm text-gray-300">AI Founder & Visionary</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#0A66C2] to-white bg-clip-text text-transparent leading-tight">
            Md Roushan Alam
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            AI Founder building scalable intelligence for businesses, governments, and the future.
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Founder of Techgram | Building AI solutions that transform industries |
            Expertise in D2C, B2B, GovTech & Automation
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#booking"
              className="group px-8 py-4 bg-[#0A66C2] hover:bg-[#0A66C2]/90 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Book a Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#0A66C2]/50 rounded-full p-1">
          <div className="w-1.5 h-3 bg-[#0A66C2] rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
