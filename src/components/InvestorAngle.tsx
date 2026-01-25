import { BarChart3, Globe2, Lightbulb, TrendingUp } from 'lucide-react';

interface Point {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const points: Point[] = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Long-term Vision',
    description: 'Building AI infrastructure that scales across industries and creates sustainable competitive advantages'
  },
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: 'Market Opportunity',
    description: 'Targeting underserved markets in GovTech, B2B automation, and enterprise AI transformation'
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Proven Execution',
    description: 'Track record of taking projects from concept to production with measurable business impact'
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Sustainable Growth',
    description: 'Focus on profitability, scalable business models, and creating real value for stakeholders'
  }
];

export default function InvestorAngle() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A66C2]/5 via-transparent to-purple-900/5"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A66C2]/10 border border-[#0A66C2]/30 rounded-full mb-6 backdrop-blur-sm">
            <TrendingUp className="w-4 h-4 text-[#0A66C2]" />
            <span className="text-sm text-gray-300">For Strategic Partners & Investors</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Building for Scale, Impact, <br />
            and <span className="text-[#0A66C2]">Long-Term Value</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {points.map((point, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#0A66C2]/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0A66C2]/20 rounded-lg flex items-center justify-center text-[#0A66C2] flex-shrink-0 group-hover:scale-110 transition-transform">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#0A66C2] transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#0A66C2]/10 to-purple-900/10 border border-[#0A66C2]/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              My Investment Philosophy
            </h3>

            <div className="space-y-4 text-gray-300 leading-relaxed mb-8">
              <p>
                AI is not just a technology wave—it's a fundamental shift in how we solve problems,
                build businesses, and create value. I believe in building solutions that are:
              </p>

              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#0A66C2] rounded-full mt-2"></div>
                  <span><strong className="text-white">Technically sound</strong> with robust architecture and scalable infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#0A66C2] rounded-full mt-2"></div>
                  <span><strong className="text-white">Market-driven</strong> solving real problems with clear ROI</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#0A66C2] rounded-full mt-2"></div>
                  <span><strong className="text-white">Impact-focused</strong> creating value for businesses, governments, and society</span>
                </li>
              </ul>

              <p className="mt-6">
                I align with investors who think long-term, value execution over hype,
                and believe in building sustainable businesses that create lasting impact.
              </p>
            </div>

            <div className="text-center">
              <p className="text-[#0A66C2] font-semibold text-lg mb-4">
                Open to strategic conversations
              </p>
              <a
                href="#booking"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A66C2] hover:bg-[#0A66C2]/90 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
