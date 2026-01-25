import { useEffect, useRef, useState } from 'react';
import { AlertCircle, Lightbulb, Target } from 'lucide-react';

interface TimelineItem {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  color: string;
}

const timeline: TimelineItem[] = [
  {
    icon: <AlertCircle className="w-6 h-6" />,
    title: 'The Problem',
    subtitle: 'Why Current Systems Are Broken',
    description: 'Most businesses struggle with AI implementation. Technology exists, but proper integration, strategy, and execution are missing. AI is either underutilized or implemented incorrectly, leading to wasted resources and missed opportunities.',
    color: '#ef4444'
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'The Journey',
    subtitle: 'Building Real Solutions',
    description: 'Started with a vision to democratize AI. Founded Techgram to bridge the gap between cutting-edge technology and practical business needs. Learned through building multiple startups that execution matters more than ideas.',
    color: '#0A66C2'
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'The Vision',
    subtitle: 'Building for Impact',
    description: 'Creating AI solutions that are scalable, sustainable, and transformative. Focused on long-term value creation across D2C, B2B, and GovTech sectors. Building systems that empower businesses and improve lives at scale.',
    color: '#10b981'
  }
];

function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`flex gap-8 items-start transition-all duration-700 transform ${
        isVisible ? 'translate-x-0 opacity-100' : index % 2 === 0 ? '-translate-x-20 opacity-0' : 'translate-x-20 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="hidden md:block">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center border-4 border-[#0A0E27] shadow-lg"
          style={{ backgroundColor: item.color }}
        >
          <div className="text-white">
            {item.icon}
          </div>
        </div>
      </div>

      <div className="flex-1 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#0A66C2]/50 transition-all group">
        <div className="flex items-center gap-4 mb-4 md:hidden">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: item.color }}
          >
            <div className="text-white">
              {item.icon}
            </div>
          </div>
          <h3 className="text-2xl font-bold">{item.title}</h3>
        </div>

        <h3 className="hidden md:block text-2xl font-bold mb-2">{item.title}</h3>
        <p className="text-[#0A66C2] font-semibold mb-4">{item.subtitle}</p>
        <p className="text-gray-300 leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
}

export default function Story() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#0A66C2]/30 to-transparent hidden md:block"></div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-[#0A66C2]">Story</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From identifying broken systems to building transformative solutions
          </p>
        </div>

        <div className="space-y-12 relative">
          {timeline.map((item, index) => (
            <TimelineCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
