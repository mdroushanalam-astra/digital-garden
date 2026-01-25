import { Award, Star, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface ProofItem {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const proofCategories: ProofItem[] = [
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Recognition',
    items: [
      'Pitch Competition Winner',
      'Featured in Tech Publications',
      'Industry Speaker & Panelist',
      'Startup Accelerator Alumni'
    ]
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Collaborations',
    items: [
      'Government Partnerships',
      'Enterprise Clients',
      'Academic Institutions',
      'Tech Communities'
    ]
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Achievements',
    items: [
      'Successfully Deployed 15+ AI Systems',
      '50+ Satisfied Clients',
      'Multiple Patents Pending',
      '2 Successful Exits'
    ]
  }
];

const testimonials = [
  {
    text: 'Roushan transformed our business with AI automation. The ROI was evident within 3 months.',
    author: 'Tech CEO',
    role: 'Enterprise Client'
  },
  {
    text: 'Working with Roushan was game-changing. His deep AI expertise helped us launch our MVP ahead of schedule.',
    author: 'Startup Founder',
    role: 'B2B SaaS'
  },
  {
    text: 'Exceptional strategic thinking combined with hands-on execution. Rare combination in AI consulting.',
    author: 'CTO',
    role: 'Fortune 500'
  }
];

export default function SocialProof() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Social <span className="text-[#0A66C2]">Proof</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Trusted by businesses, governments, and fellow founders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {proofCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#0A66C2]/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#0A66C2]/20 rounded-lg flex items-center justify-center text-[#0A66C2]">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#0A66C2] rounded-full mt-1.5"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#0A66C2]/10 via-purple-900/10 to-[#0A66C2]/10 border border-[#0A66C2]/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-center mb-8">What People Say</h3>

          <div className="relative overflow-hidden" ref={scrollRef}>
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="max-w-3xl mx-auto text-center">
                    <p className="text-xl md:text-2xl text-gray-300 mb-6 italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="font-bold text-white">{testimonial.author}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentTestimonial === index
                    ? 'bg-[#0A66C2] w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
