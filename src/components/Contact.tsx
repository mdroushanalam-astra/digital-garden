import { Github, Linkedin, Mail, MapPin, Twitter } from 'lucide-react';

const contactMethods = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'contact@techgram.ai',
    href: 'mailto:contact@techgram.ai'
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/mdroushanalamtechgram'
  },
  {
    icon: <Twitter className="w-5 h-5" />,
    label: 'Twitter',
    value: '@techgram',
    href: 'https://twitter.com/techgram'
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: 'GitHub',
    value: 'View Projects',
    href: 'https://github.com'
  }
];

export default function Contact() {
  return (
    <footer className="py-16 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-[#0A66C2] bg-clip-text text-transparent">
              Md Roushan Alam
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              AI Founder building scalable intelligence for businesses, governments, and the future.
            </p>
            <div className="flex items-start gap-2 text-gray-400 text-sm">
              <MapPin className="w-4 h-4 text-[#0A66C2] mt-0.5 flex-shrink-0" />
              <span>Building globally, Based in India</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Portfolio', 'Services', 'About', 'Book Meeting'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-[#0A66C2] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#0A66C2] transition-colors group"
                >
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-[#0A66C2]/20 transition-colors">
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{method.label}</p>
                    <p className="text-sm">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Md Roushan Alam. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#0A66C2] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#0A66C2] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Built with purpose. Designed for impact.
          </p>
        </div>
      </div>
    </footer>
  );
}
