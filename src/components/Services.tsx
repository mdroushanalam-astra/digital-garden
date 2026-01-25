import { ArrowRight, Brain, Code2, Lightbulb, Rocket } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  target: string;
  color: string;
}

const services: Service[] = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'AI Consulting',
    description: 'Strategic guidance for AI implementation and transformation',
    features: [
      'AI Readiness Assessment',
      'Technology Stack Selection',
      'Implementation Roadmap',
      'ROI & Feasibility Analysis'
    ],
    target: 'CTOs, Product Leaders, Decision Makers',
    color: '#0A66C2'
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Custom AI Development',
    description: 'End-to-end AI solutions tailored to your business needs',
    features: [
      'MVP Development',
      'Custom ML Models',
      'API Integration',
      'Production Deployment'
    ],
    target: 'Startups, Enterprises, Product Teams',
    color: '#10b981'
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Founder Advisory',
    description: 'Strategic guidance for AI-first companies and founders',
    features: [
      'Product-Market Fit',
      'Technical Architecture',
      'Go-to-Market Strategy',
      'Investor Preparation'
    ],
    target: 'Early-stage Founders, AI Startups',
    color: '#f59e0b'
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'Freelance AI Projects',
    description: 'Fast execution for specific AI implementations',
    features: [
      'Rapid Prototyping',
      'Automation Solutions',
      'Data Pipeline Setup',
      'Model Fine-tuning'
    ],
    target: 'Agencies, SMBs, Quick Pilots',
    color: '#ec4899'
  }
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#0A66C2]/50 transition-all duration-300 hover:transform hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A66C2]/0 to-[#0A66C2]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div className="relative z-10">
        <div
          className="w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform"
          style={{ backgroundColor: service.color }}
        >
          {service.icon}
        </div>

        <h3 className="text-2xl font-bold mb-3 group-hover:text-[#0A66C2] transition-colors">
          {service.title}
        </h3>

        <p className="text-gray-400 mb-6 leading-relaxed">
          {service.description}
        </p>

        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-3 font-semibold">What You Get:</p>
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                <div className="w-1.5 h-1.5 bg-[#0A66C2] rounded-full mt-1.5"></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
          <p className="text-xs text-gray-500 mb-1">Perfect For:</p>
          <p className="text-sm text-gray-300">{service.target}</p>
        </div>

        <a
          href="#booking"
          className="inline-flex items-center gap-2 text-[#0A66C2] font-semibold group-hover:gap-3 transition-all"
        >
          Discuss Project
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Services & <span className="text-[#0A66C2]">Solutions</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Flexible engagement models designed to deliver value at every stage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#0A66C2]/10 via-purple-900/10 to-[#0A66C2]/10 border border-[#0A66C2]/30 rounded-2xl p-8 md:p-12 text-center backdrop-blur-sm">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Not sure which service fits your needs?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's have a conversation about your challenges and goals. I'll help you find the right approach.
          </p>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A66C2] hover:bg-[#0A66C2]/90 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            Schedule Free Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
