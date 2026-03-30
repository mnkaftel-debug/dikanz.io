import { Building, ShieldCheck, ArrowRight } from 'lucide-react';

export default function CollaborationsPage() {
  return (
    <div className="pt-20 pb-24">
      <div className="bg-gray-50 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6">Collaborations & Incubation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partnering with leading government bodies and institutions to bridge the gap between education and real-world impact.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-24">
        
        {/* CCOE Telangana */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-bl-full -z-10" />
            <div className="w-20 h-20 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
              <Building className="w-10 h-10 text-dikanz-blue" />
            </div>
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">CCOE Telangana</h2>
            <p className="text-lg text-dikanz-blue font-medium mb-6">Centre of Excellence, Telangana</p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our official collaboration with the Centre of Excellence, Telangana, forms the backbone of our innovation and incubation support. This partnership ensures our students have access to state-of-the-art facilities, government-backed initiatives, and a direct pipeline to the regional tech ecosystem.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-dikanz-blue mt-2" />
                <span>Advanced technology program certification and alignment.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-dikanz-blue mt-2" />
                <span>Incubation support for student-led startups.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-dikanz-blue mt-2" />
                <span>Access to government innovation grants and resources.</span>
              </li>
            </ul>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">Building the Innovation Hub</h3>
            <p className="text-gray-600">
              Through CCOE, DIKANZ EDU TECH is establishing a premier incubation center where ideas are nurtured into viable businesses. We provide the mentorship, the technology, and the network.
            </p>
            <div className="bg-sky-50 p-6 rounded-2xl border border-sky-100">
              <p className="text-sky-900 font-medium italic">
                &quot;Empowering the next generation of tech entrepreneurs through strategic government-private partnerships.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
