import Image from 'next/image';
import { Music, Scale, Sparkles, ArrowRight } from 'lucide-react';

export default function EcosystemPage() {
  return (
    <div className="pt-20 pb-24">
      <div className="bg-dikanz-dark py-24 border-b border-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">DIKANZ Ecosystem</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We don&apos;t just teach technology; we build it. Explore the innovative products developed within the DIKANZ ecosystem.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
        
        {/* Royal Rhythm AI */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
            <Image 
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80" 
              alt="Royal Rhythm AI - Advanced Music Studio" 
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-transparent mix-blend-multiply" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" /> DIKANZ Project
            </div>
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Music className="w-8 h-8 text-purple-600" /> Royal Rhythm AI
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              AI-powered song generation project by DIKANZ company.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Royal Rhythm AI represents a breakthrough in generative audio. Created entirely by the DIKANZ company, this project allows creators to generate high-quality songs with vocals and dynamic soundscapes using advanced neural networks. It serves as a prime example of applied AI for our students.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="w-2 h-2 rounded-full bg-purple-500" /> Text-to-Music Generation
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="w-2 h-2 rounded-full bg-purple-500" /> Vocal Synthesis
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="w-2 h-2 rounded-full bg-purple-500" /> Stem Separation & Editing
              </li>
            </ul>
            <button className="flex items-center gap-2 text-purple-600 font-bold hover:text-purple-700 transition-colors">
              Visit Royal Rhythm AI <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* AI Justice GPT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" /> DIKANZ Project
            </div>
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Scale className="w-8 h-8 text-blue-600" /> AI Justice GPT
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Indian Constitution AI education platform by DIKANZ company.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Democratizing legal knowledge through technology. AI Justice GPT is a sophisticated educational platform developed by DIKANZ to simplify the complexities of the Indian Constitution. By transforming dense legal frameworks into interactive, understandable insights, we empower citizens to navigate their fundamental rights and duties with confidence and clarity.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="w-2 h-2 rounded-full bg-blue-500" /> Interactive Constitution Learning
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="w-2 h-2 rounded-full bg-blue-500" /> Civic Rights & Duties Education
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="w-2 h-2 rounded-full bg-blue-500" /> Multilingual Legal Awareness
              </li>
            </ul>
            <button className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors">
              Visit AI Justice GPT <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
            <Image 
              src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80" 
              alt="AI Justice GPT - Indian Constitution Education" 
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent mix-blend-multiply" />
          </div>
        </div>

        {/* Future Note */}
        <div className="bg-gray-50 rounded-3xl p-12 text-center border border-gray-200">
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">More Innovation on the Horizon</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Both Royal Rhythm AI and AI Justice GPT are proudly created by the DIKANZ company. These projects are just the beginning. DIKANZ is continuously incubating new ideas, and more upcoming projects will be launched soon. Our students get front-row seats and active participation opportunities in building the next generation of DIKANZ projects.
          </p>
        </div>

      </div>
    </div>
  );
}
