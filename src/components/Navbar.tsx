import { motion } from 'motion/react';
import { Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 md:px-8 text-xs md:text-sm flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-4">
          <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-1 hover:text-blue-200 transition-colors">
            <Phone size={14} />
            <span>+91 {BUSINESS_INFO.phone}</span>
          </a>
          <div className="hidden md:flex items-center gap-1">
            <MapPin size={14} />
            <span>{BUSINESS_INFO.address}</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <Facebook size={14} className="cursor-pointer hover:text-blue-200" />
            <Twitter size={14} className="cursor-pointer hover:text-blue-200" />
            <Instagram size={14} className="cursor-pointer hover:text-blue-200" />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-4 md:px-8 py-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <span className="text-2xl font-bold tracking-tight text-blue-900">
            Buzy<span className="text-orange-600">India</span>
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#about" className="hover:text-blue-600 transition-colors">About Us</a>
          <a href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>

        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-700 transition-all shadow-md hover:shadow-lg"
        >
          Consult Now
        </motion.a>
      </nav>
    </header>
  );
}
