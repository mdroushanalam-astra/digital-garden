import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import ProofOfWork from './components/ProofOfWork';
import Story from './components/Story';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Companies from './components/Companies';
import SocialProof from './components/SocialProof';
import InvestorAngle from './components/InvestorAngle';
import BookMeeting from './components/BookMeeting';
import Contact from './components/Contact';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0A0E27] text-white overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A66C2]/10 via-transparent to-purple-900/10"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(10, 102, 194, 0.1) 0%, transparent 50%)`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        ></div>
      </div>

      <div className="relative z-10">
        <Hero />
        <ProofOfWork />
        <Story />
        <Portfolio />
        <Services />
        <Companies />
        <SocialProof />
        <InvestorAngle />
        <BookMeeting />
        <Contact />
      </div>
    </div>
  );
}

export default App;
