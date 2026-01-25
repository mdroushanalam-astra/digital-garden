import { Calendar, CheckCircle2, Clock, Video } from 'lucide-react';

const benefits = [
  'Free 30-minute strategy session',
  'Understand your AI opportunities',
  'Get actionable recommendations',
  'No commitment required'
];

export default function BookMeeting() {
  return (
    <section id="booking" className="py-24 px-6 bg-gradient-to-b from-transparent via-[#0A66C2]/5 to-transparent">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-[#0A66C2]">Talk</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you're looking to implement AI, need strategic guidance, or want to explore collaboration
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-6">What to Expect:</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#0A66C2] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex items-center gap-3 text-gray-400">
                  <Clock className="w-5 h-5 text-[#0A66C2]" />
                  <span>30 minutes</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Video className="w-5 h-5 text-[#0A66C2]" />
                  <span>Google Meet or Zoom</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Calendar className="w-5 h-5 text-[#0A66C2]" />
                  <span>Flexible scheduling</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0A66C2]/10 to-purple-900/10 backdrop-blur-sm border border-[#0A66C2]/30 rounded-2xl p-8 lg:p-12 text-center">
            <Calendar className="w-16 h-16 text-[#0A66C2] mx-auto mb-6" />

            <h3 className="text-2xl font-bold mb-4">
              Book Your Strategy Call
            </h3>

            <p className="text-gray-300 mb-8">
              Choose a time that works for you. I'll send you a calendar invite with the meeting link.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:contact@techgram.ai?subject=Strategy Call Request"
                className="block w-full px-8 py-4 bg-[#0A66C2] hover:bg-[#0A66C2]/90 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Request a Meeting
              </a>

              <p className="text-sm text-gray-400">
                Or email me directly at{' '}
                <a href="mailto:contact@techgram.ai" className="text-[#0A66C2] hover:underline">
                  contact@techgram.ai
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Response time: <span className="text-white font-semibold">Usually within 24 hours</span>
          </p>
        </div>
      </div>
    </section>
  );
}
