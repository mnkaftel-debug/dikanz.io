'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, Cpu, Shield, Cuboid, Network, Bot, GraduationCap, Rocket, Building2 } from 'lucide-react';

const domains = [
  { name: 'Artificial Intelligence', icon: Bot, desc: 'Master machine learning, neural networks, and generative AI.' },
  { name: 'Cybersecurity', icon: Shield, desc: 'Learn ethical hacking, network defense, and cryptography.' },
  { name: 'Robotics', icon: Cpu, desc: 'Build and program autonomous systems and smart machines.' },
  { name: 'Blockchain', icon: Network, desc: 'Develop decentralized apps, smart contracts, and Web3 solutions.' },
  { name: '3D Printing', icon: Cuboid, desc: 'Design and manufacture complex prototypes and products.' },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-50 to-white overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-sky-200/30 blur-3xl"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-blue-200/20 blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-sm font-medium mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-dikanz-blue animate-pulse"></span>
            The Future of Education is Here
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tight text-gray-900 mb-6 text-balance leading-tight"
          >
            Empowering the Next Generation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-dikanz-blue to-sky-400">Tech Innovators</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto mb-10 text-balance"
          >
            DIKANZ EDU TECH is redefining the educational landscape by bridging the gap between academic excellence and the global tech startup ecosystem. We nurture students into visionary entrepreneurs.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link 
              href="/programs" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-dikanz-blue text-white font-medium hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 group"
            >
              Explore Programs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/ecosystem" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-gray-900 border border-gray-200 font-medium hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
            >
              View Ecosystem
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                More Than Just Education. <br/>
                <span className="text-dikanz-blue">An Incubation Ecosystem.</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                DIKANZ EDU TECH is the education and innovation division of DIKANZ. We don&apos;t just teach technology; we build the environment for it to thrive.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { icon: GraduationCap, text: 'Advanced Technology Curriculum' },
                  { icon: Rocket, text: 'Startup Incubation Support' },
                  { icon: Building2, text: 'Real-world Industry Projects' }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-dikanz-blue">
                      <item.icon className="w-5 h-5" />
                    </div>
                    {item.text}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="inline-flex items-center gap-2 text-dikanz-blue font-semibold hover:underline">
                Learn more about our vision <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80" 
                alt="Indian tech students collaborating on innovation" 
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Domains Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Master the Technologies of Tomorrow</h2>
            <p className="text-lg text-gray-600">Comprehensive, industry-aligned programs designed to take you from fundamentals to advanced applications.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain, i) => (
              <motion.div 
                key={domain.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-sky-100 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center text-dikanz-blue mb-6 group-hover:scale-110 transition-transform">
                  <domain.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{domain.name}</h3>
                <p className="text-gray-600 mb-6">{domain.desc}</p>
                <Link href={`/programs#${domain.name.toLowerCase().replace(' ', '-')}`} className="inline-flex items-center gap-2 text-sm font-semibold text-dikanz-blue group-hover:gap-3 transition-all">
                  Explore domain <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Highlight */}
      <section className="py-24 bg-dikanz-dark text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-dikanz-blue/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-sm font-medium mb-6">
                DIKANZ Ecosystem
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Real Products. Real Impact.</h2>
              <p className="text-lg text-gray-400 mb-8">
                Our education is backed by actual innovation. Discover the products built within the DIKANZ ecosystem, serving as benchmarks for our students.
              </p>
              
              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    Royal Rhythm AI <span className="text-xs px-2 py-1 bg-sky-500/20 text-sky-300 rounded-full">Project</span>
                  </h3>
                  <p className="text-gray-400 text-sm">An innovative AI-powered song generation project created by DIKANZ company to revolutionize audio creation.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    AI Justice GPT <span className="text-xs px-2 py-1 bg-sky-500/20 text-sky-300 rounded-full">Project</span>
                  </h3>
                  <p className="text-gray-400 text-sm">An AI-powered Indian Constitution education platform created by DIKANZ to educate citizens about their legal rights.</p>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/ecosystem" className="inline-flex items-center gap-2 text-white font-semibold hover:text-sky-300 transition-colors">
                  View all products <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-3xl overflow-hidden border border-white/10">
               <Image 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" 
                alt="DIKANZ Advanced AI Ecosystem Dashboard" 
                fill
                className="object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dikanz-dark via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Collaborations Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Trusted by Institutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
            We collaborate with leading government bodies and institutions to ensure our programs meet the highest industry standards.
          </p>
          
          <div className="grid grid-cols-1 gap-8 max-w-md mx-auto">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl border border-gray-200 bg-gray-50 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-white rounded-full shadow-sm flex items-center justify-center mb-6 border border-gray-100">
                {/* Placeholder for CCOE Logo */}
                <span className="font-bold text-gray-400">CCOE</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">CCOE Telangana</h3>
              <p className="text-sm text-gray-600">Centre of Excellence, Telangana. Collaboration for innovation, incubation support, and advanced technology programs.</p>
            </motion.div>
          </div>
          
          <div className="mt-12">
             <Link href="/collaborations" className="inline-flex items-center gap-2 text-dikanz-blue font-semibold hover:underline">
                Read more about our partnerships <ArrowRight className="w-4 h-4" />
              </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dikanz-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-10 mix-blend-overlay bg-cover bg-center" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Ready to Build the Future?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Join DIKANZ EDU TECH today and transform your potential into real-world innovation.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-white text-dikanz-blue hover:bg-gray-50 transition-colors shadow-xl"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
}
