import Image from 'next/image';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-20 pb-24">
      {/* Header */}
      <div className="bg-gray-50 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6">About DIKANZ</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are the education and innovation division of DIKANZ, dedicated to shaping the tech leaders of tomorrow.
          </p>
        </div>
      </div>

      {/* Brand Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Our Brand Story</h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                DIKANZ started with a simple yet powerful idea: technology education should not just be about learning syntax or theories; it should be about building solutions for the real world.
              </p>
              <p>
                As the main brand, DIKANZ encompasses a wide array of technological ventures. <strong>DIKANZ EDU TECH</strong> was born as its dedicated education and innovation division. We recognized a massive gap between academic curricula and the fast-paced demands of the global tech industry.
              </p>
              <p>
                Today, all our educational initiatives, product developments, and future expansions operate under the DIKANZ umbrella, creating a seamless pipeline from student to entrepreneur.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
              alt="DIKANZ Innovation Team" 
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="bg-dikanz-dark text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-dikanz-blue rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-400">
                To build a futuristic platform representing advanced technology education, where innovation meets real-world skills, fostering a global startup incubation ecosystem.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-dikanz-blue rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-400">
                To guide individuals through the student-to-entrepreneur journey by providing world-class education in AI, Cybersecurity, Robotics, and Blockchain, backed by real product incubation.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-dikanz-blue rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
              <p className="text-gray-400">
                We blend rigorous academic frameworks with hands-on startup experience. Our students don&apos;t just pass exams; they build products that matter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
