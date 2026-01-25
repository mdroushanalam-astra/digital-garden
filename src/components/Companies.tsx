import { Building2, Rocket, TrendingUp } from 'lucide-react';

interface Company {
  name: string;
  icon: React.ReactNode;
  mission: string;
  role: string;
  stage: string;
  focus: string[];
  color: string;
}

const companies: Company[] = [
  {
    name: 'Techgram',
    icon: <Rocket className="w-8 h-8" />,
    mission: 'Building AI-powered solutions for businesses and governments',
    role: 'Founder & CEO',
    stage: 'Active',
    focus: ['AI SaaS', 'Custom Development', 'GovTech', 'Consulting'],
    color: '#0A66C2'
  },
  {
    name: 'Previous Venture',
    icon: <TrendingUp className="w-8 h-8" />,
    mission: 'Scaled D2C platform with AI-driven personalization',
    role: 'Co-Founder',
    stage: 'Exited',
    focus: ['E-commerce', 'ML Personalization', 'Growth'],
    color: '#10b981'
  }
];

function CompanyCard({ company }: { company: Company }) {
  return (
    <div className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#0A66C2]/50 transition-all duration-300 hover:transform hover:scale-105">
      <div className="flex items-start justify-between mb-6">
        <div
          className="w-16 h-16 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform"
          style={{ backgroundColor: company.color }}
        >
          {company.icon}
        </div>
        <span className={`px-4 py-1 rounded-full text-sm font-semibold ${
          company.stage === 'Active'
            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
            : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
        }`}>
          {company.stage}
        </span>
      </div>

      <h3 className="text-2xl font-bold mb-2 group-hover:text-[#0A66C2] transition-colors">
        {company.name}
      </h3>

      <p className="text-gray-400 mb-4 leading-relaxed">
        {company.mission}
      </p>

      <div className="mb-6">
        <p className="text-sm text-[#0A66C2] font-semibold mb-2">{company.role}</p>
      </div>

      <div>
        <p className="text-xs text-gray-500 mb-3 font-semibold">Focus Areas:</p>
        <div className="flex flex-wrap gap-2">
          {company.focus.map((area, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 bg-white/5 text-gray-300 rounded-full border border-white/10"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Companies() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A66C2]/10 border border-[#0A66C2]/30 rounded-full mb-6 backdrop-blur-sm">
            <Building2 className="w-4 h-4 text-[#0A66C2]" />
            <span className="text-sm text-gray-300">Builder, Not Just Advisor</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Founded <span className="text-[#0A66C2]">Companies</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Built, scaled, and led ventures from idea to execution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {companies.map((company, index) => (
            <CompanyCard key={index} company={company} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            As a founder, I understand the challenges of building from scratch, raising capital,
            and scaling operations. This hands-on experience informs every solution I create.
          </p>
        </div>
      </div>
    </section>
  );
}
