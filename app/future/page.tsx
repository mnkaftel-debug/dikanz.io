import Image from 'next/image';
import { Rocket, Briefcase, Globe2 } from 'lucide-react';

export default function FuturePage() {
  return (
    <div className="pt-20 pb-24">
      <div className="bg-dikanz-dark py-20 border-b border-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Future Vision</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            DIKANZ is constantly looking ahead. Discover our upcoming initiatives designed to shape the next decade of technology and entrepreneurship.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Junior Business Tycoons */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center text-dikanz-blue">
              <Briefcase className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Junior Business Tycoons Program</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                We believe entrepreneurship should start early. The Junior Business Tycoons Program is our upcoming flagship initiative aimed at identifying and nurturing young talent before they even enter university.
              </p>
              <p>
                This program will provide high school students with hands-on experience in building startups, managing teams, understanding venture capital, and developing tech products under the mentorship of industry leaders.
              </p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-dikanz-blue" /> Early-stage startup simulation
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-dikanz-blue" /> Mentorship from successful founders
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-dikanz-blue" /> Pitch competitions with real seed funding
                </li>
              </ul>
            </div>
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-gray-100 shadow-xl">
              <Image 
                src="https://picsum.photos/seed/junior-tycoons/800/450" 
                alt="Junior Business Tycoons" 
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Expansion of Incubation Centers */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-900">
              <Globe2 className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Global Incubation Expansion</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Physical Hubs</h3>
              <p className="text-gray-600">
                Expanding our physical footprint beyond our current headquarters. We are planning state-of-the-art incubation centers in key tech cities globally, providing co-working spaces, hardware labs, and direct access to local investor networks.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Virtual Incubation</h3>
              <p className="text-gray-600">
                A borderless digital ecosystem where students and entrepreneurs from anywhere in the world can collaborate, access DIKANZ resources, and build their startups entirely online.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Venture Fund</h3>
              <p className="text-gray-600">
                The establishment of a dedicated DIKANZ seed fund to provide direct capital to the most promising startups emerging from our education and incubation programs.
              </p>
            </div>
          </div>
        </div>

        {/* Future AI & Deep-Tech Innovations */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600">
              <Rocket className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Deep-Tech Innovations</h2>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-dikanz-dark rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="relative z-10 max-w-3xl">
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Following the success of Royal Rhythm AI and AI Justice GPT, our R&D division is actively working on the next wave of deep-tech products. Our focus is shifting towards quantum computing applications, advanced brain-computer interfaces (BCI), and sustainable tech solutions.
              </p>
              <p className="text-lg text-gray-400">
                Students enrolled in our advanced programs will have the exclusive opportunity to contribute to these groundbreaking projects, gaining experience that is simply unavailable in traditional academic settings.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
