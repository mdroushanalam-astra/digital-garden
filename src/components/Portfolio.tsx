import { useState } from 'react';
import { Bot, Building2, ChevronRight, Code, Cpu, Globe, Shield, TrendingUp } from 'lucide-react';

interface Project {
  category: string;
  icon: React.ReactNode;
  title: string;
  problem: string;
  solution: string;
  tech: string[];
  outcome: string;
  target: string;
  color: string;
}

const projects: Project[] = [
  {
    category: 'AI SaaS',
    icon: <Bot className="w-6 h-6" />,
    title: 'Intelligent Automation Platform',
    problem: 'Businesses spending excessive time on repetitive tasks and manual data processing',
    solution: 'Built end-to-end automation platform with ML-powered decision making',
    tech: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
    outcome: '70% reduction in manual work, deployed across 20+ companies',
    target: 'SMBs & Enterprises',
    color: '#0A66C2'
  },
  {
    category: 'GovTech',
    icon: <Shield className="w-6 h-6" />,
    title: 'Public Service AI Assistant',
    problem: 'Citizens facing delays in accessing government services and information',
    solution: 'AI-powered chatbot and workflow automation for government departments',
    tech: ['NLP', 'GPT', 'Node.js', 'MongoDB'],
    outcome: '60% faster service delivery, 10K+ citizens served',
    target: 'Government Agencies',
    color: '#10b981'
  },
  {
    category: 'B2B Solutions',
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Predictive Analytics Suite',
    problem: 'Companies making decisions based on historical data without future insights',
    solution: 'Real-time predictive analytics dashboard with AI forecasting',
    tech: ['PyTorch', 'FastAPI', 'Vue.js', 'Redis'],
    outcome: '35% improvement in forecast accuracy, $2M+ revenue impact',
    target: 'B2B Enterprises',
    color: '#f59e0b'
  },
  {
    category: 'D2C Platform',
    icon: <Globe className="w-6 h-6" />,
    title: 'Personalized Shopping Experience',
    problem: 'Low conversion rates due to generic product recommendations',
    solution: 'AI-driven personalization engine with behavior analysis',
    tech: ['Recommendation Systems', 'React Native', 'AWS'],
    outcome: '45% increase in conversions, 2M+ users',
    target: 'E-commerce Brands',
    color: '#ec4899'
  },
  {
    category: 'Custom AI',
    icon: <Cpu className="w-6 h-6" />,
    title: 'Industry-Specific AI Models',
    problem: 'Generic AI solutions not addressing specific industry needs',
    solution: 'Custom-trained models for healthcare, finance, and logistics',
    tech: ['Custom ML', 'Docker', 'Kubernetes', 'MLOps'],
    outcome: 'Deployed across 15+ industries with 90%+ accuracy',
    target: 'Enterprise Clients',
    color: '#8b5cf6'
  },
  {
    category: 'Research',
    icon: <Code className="w-6 h-6" />,
    title: 'AI Research & Development',
    problem: 'Emerging AI technologies not accessible to businesses',
    solution: 'R&D projects exploring LLMs, computer vision, and autonomous systems',
    tech: ['PyTorch', 'Transformers', 'OpenCV', 'JAX'],
    outcome: 'Multiple POCs converted to production systems',
    target: 'Innovation Teams',
    color: '#06b6d4'
  }
];

const categories = ['All', 'AI SaaS', 'GovTech', 'B2B Solutions', 'D2C Platform', 'Custom AI', 'Research'];

function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#0A66C2]/50 transition-all duration-300 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform"
          style={{ backgroundColor: project.color }}
        >
          {project.icon}
        </div>
        <span className="text-xs px-3 py-1 bg-white/5 rounded-full text-gray-400 border border-white/10">
          {project.category}
        </span>
      </div>

      <h3 className="text-xl font-bold mb-2 group-hover:text-[#0A66C2] transition-colors">
        {project.title}
      </h3>

      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
        <span className="font-semibold text-gray-300">Problem:</span> {project.problem}
      </p>

      <div className={`space-y-3 overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-400 text-sm">
          <span className="font-semibold text-gray-300">Solution:</span> {project.solution}
        </p>

        <div>
          <p className="text-xs text-gray-500 mb-2">Tech Stack:</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span key={i} className="text-xs px-2 py-1 bg-[#0A66C2]/10 text-[#0A66C2] rounded border border-[#0A66C2]/20">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <p className="text-gray-400 text-sm">
          <span className="font-semibold text-green-400">Outcome:</span> {project.outcome}
        </p>

        <p className="text-gray-400 text-sm">
          <span className="font-semibold text-gray-300">Target:</span> {project.target}
        </p>
      </div>

      <button className="mt-4 text-[#0A66C2] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
        {isExpanded ? 'Show Less' : 'Learn More'}
        <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
      </button>
    </div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-6 bg-gradient-to-b from-transparent via-[#0A66C2]/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I <span className="text-[#0A66C2]">Build</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            AI solutions that solve real problems and deliver measurable results
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-[#0A66C2] text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-gray-400">
            <Building2 className="w-5 h-5 text-[#0A66C2]" />
            <span>All projects designed for production, scalability, and impact</span>
          </div>
        </div>
      </div>
    </section>
  );
}
