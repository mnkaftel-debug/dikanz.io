import { Bot, Shield, Cpu, Network, Cuboid, CheckCircle2 } from 'lucide-react';

const programs = [
  {
    id: 'robotics',
    title: 'Robotics',
    icon: Cpu,
    description: 'Design, build, and program autonomous systems. From fundamental kinematics to advanced computer vision for robotic navigation.',
    outcomes: ['Build functional robotic prototypes', 'Program microcontrollers (Arduino, Raspberry Pi)', 'Implement ROS (Robot Operating System)', 'Integrate sensors and actuators'],
    applications: ['Industrial Automation', 'Healthcare Robotics', 'Autonomous Vehicles', 'Drone Technology'],
    modules: ['Intro to Mechatronics', 'Embedded Systems Programming', 'Kinematics & Dynamics', 'AI in Robotics']
  },
  {
    id: '3d-printing',
    title: '3D Printing & Additive Manufacturing',
    icon: Cuboid,
    description: 'Master the art of rapid prototyping and digital manufacturing. Learn CAD design, material science, and advanced printing techniques.',
    outcomes: ['Proficiency in CAD software (Fusion 360, SolidWorks)', 'Understanding of various 3D printing technologies (FDM, SLA, SLS)', 'Design for Additive Manufacturing (DfAM)', 'Post-processing techniques'],
    applications: ['Rapid Prototyping', 'Custom Medical Implants', 'Aerospace Components', 'Architectural Models'],
    modules: ['Fundamentals of CAD', 'Slicing & G-Code Generation', 'Material Science for 3D Printing', 'Advanced Manufacturing Processes']
  },
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    icon: Bot,
    description: 'Dive deep into machine learning, deep neural networks, natural language processing, and generative AI models.',
    outcomes: ['Build and train machine learning models', 'Implement deep learning architectures (CNNs, RNNs, Transformers)', 'Deploy AI models to production', 'Understand AI ethics and bias'],
    applications: ['Predictive Analytics', 'Computer Vision Systems', 'Conversational AI (Chatbots)', 'Generative Art & Music'],
    modules: ['Python for Data Science', 'Machine Learning Algorithms', 'Deep Learning & PyTorch/TensorFlow', 'Generative AI & LLMs']
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    icon: Shield,
    description: 'Protect digital assets and infrastructure. Learn ethical hacking, penetration testing, cryptography, and network defense.',
    outcomes: ['Conduct vulnerability assessments', 'Perform penetration testing', 'Implement secure network architectures', 'Respond to security incidents'],
    applications: ['Corporate IT Security', 'Financial Data Protection', 'Government Cyber Defense', 'Security Consulting'],
    modules: ['Network Security Fundamentals', 'Ethical Hacking & Pen Testing', 'Cryptography', 'Incident Response & Forensics']
  },
  {
    id: 'blockchain',
    title: 'Blockchain & Web3',
    icon: Network,
    description: 'Build decentralized applications (dApps), write secure smart contracts, and understand the architecture of distributed ledgers.',
    outcomes: ['Develop smart contracts using Solidity', 'Build full-stack dApps', 'Understand consensus mechanisms', 'Implement tokenomics'],
    applications: ['Decentralized Finance (DeFi)', 'Supply Chain Tracking', 'Digital Identity Verification', 'NFT Marketplaces'],
    modules: ['Cryptography for Blockchain', 'Ethereum & Smart Contracts', 'Web3.js & Frontend Integration', 'Advanced Blockchain Architecture']
  }
];

export default function ProgramsPage() {
  return (
    <div className="pt-20 pb-24">
      <div className="bg-sky-50 py-20 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6">Programs & Courses</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-aligned curriculum designed to transform beginners into highly sought-after tech professionals.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
        {programs.map((program, index) => (
          <div key={program.id} id={program.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-start scroll-mt-32`}>
            <div className="w-full lg:w-1/3 sticky top-32">
              <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center text-dikanz-blue mb-6">
                <program.icon className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">{program.title}</h2>
              <p className="text-lg text-gray-600 mb-8">{program.description}</p>
            </div>
            
            <div className="w-full lg:w-2/3 space-y-12">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">Learning Outcomes</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {program.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Real-World Applications</h3>
                  <ul className="space-y-3">
                    {program.applications.map((app, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-dikanz-blue" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-sky-50 p-8 rounded-3xl border border-sky-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Sample Curriculum</h3>
                  <ul className="space-y-4">
                    {program.modules.map((mod, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-sm font-bold text-dikanz-blue bg-white px-2 py-1 rounded-md shadow-sm">M{i+1}</span>
                        <span className="text-gray-800 font-medium pt-1">{mod}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
