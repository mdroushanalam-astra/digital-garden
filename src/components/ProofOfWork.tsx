import { useEffect, useRef, useState } from 'react';
import { Award, Rocket, Users, Zap } from 'lucide-react';

interface Stat {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { icon: <Rocket className="w-8 h-8" />, value: 2, suffix: 'x', label: 'Startup Founder' },
  { icon: <Zap className="w-8 h-8" />, value: 15, suffix: '+', label: 'AI Products Built' },
  { icon: <Users className="w-8 h-8" />, value: 50, suffix: '+', label: 'Clients Served' },
  { icon: <Award className="w-8 h-8" />, value: 4, suffix: '', label: 'Domains Mastered' }
];

function CountUpNumber({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const animate = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={countRef}>{count}</span>;
}

export default function ProofOfWork() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proof of <span className="text-[#0A66C2]">Work</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Numbers that speak louder than words
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#0A66C2]/50 transition-all duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A66C2]/0 to-[#0A66C2]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10">
                <div className="text-[#0A66C2] mb-4 transform group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>

                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                  <CountUpNumber end={stat.value} />
                  {stat.suffix}
                </div>

                <div className="text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-[#0A66C2]/10 via-purple-900/10 to-[#0A66C2]/10 border border-[#0A66C2]/30 rounded-2xl backdrop-blur-sm">
          <p className="text-center text-lg text-gray-300">
            <span className="font-semibold text-white">Domains:</span> D2C • B2B • GovTech • Automation • AI Research
          </p>
        </div>
      </div>
    </section>
  );
}
