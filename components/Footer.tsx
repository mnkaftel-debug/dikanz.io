import Link from 'next/link';
import { Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dikanz-dark text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-dikanz-dark font-display font-bold text-xl">
                D
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                DIKANZ <span className="text-dikanz-blue">EDU TECH</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering the next generation of innovators through advanced technology education and startup incubation.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Explore
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About DIKANZ
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Programs & Courses
                </Link>
              </li>
              <li>
                <Link href="/ecosystem" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Ecosystem Products
                </Link>
              </li>
              <li>
                <Link href="/collaborations" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Collaborations
                </Link>
              </li>
            </ul>
          </div>

          {/* Domains */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Domains
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/programs#robotics" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Robotics
                </Link>
              </li>
              <li>
                <Link href="/programs#ai" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link href="/programs#cybersecurity" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/programs#blockchain" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Blockchain
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest tech education news.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-gray-800 border border-gray-700 rounded-l-md px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-dikanz-blue focus:border-dikanz-blue"
              />
              <button
                type="submit"
                className="bg-dikanz-blue hover:bg-blue-600 text-white px-4 py-2 rounded-r-md transition-colors flex items-center justify-center"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} DIKANZ EDU TECH. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
