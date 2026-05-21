import { BUSINESS_INFO } from '../constants';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="text-2xl font-bold tracking-tight text-blue-900">
                Buzy<span className="text-orange-600">India</span>
              </span>
            </div>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Your trusted partner for all business compliance and personal documentation services in India. Making the complex, simple.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-blue-900 hover:text-white transition-all cursor-pointer">
                <Facebook size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-blue-900 hover:text-white transition-all cursor-pointer">
                <Twitter size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-blue-900 hover:text-white transition-all cursor-pointer">
                <Instagram size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-blue-900 hover:text-white transition-all cursor-pointer">
                <Linkedin size={18} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-lg">Our Services</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li><a href="#" className="hover:text-blue-600 transition-colors">GST Registration</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">GST Filing</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Passport Services</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">MSME Registration</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">FSSAI License</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Disclaimer</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 group">
                <MapPin size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-500 group-hover:text-gray-700 transition-colors">{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone size={20} className="text-blue-600 flex-shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-gray-500 group-hover:text-blue-600 transition-colors">+91 {BUSINESS_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail size={20} className="text-blue-600 flex-shrink-0" />
                <span className="text-gray-500 group-hover:text-gray-700 transition-colors">{BUSINESS_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm font-medium">
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-gray-400 text-sm font-medium">
            <span>Powered by</span>
            <span className="text-gray-600 font-bold underline decoration-orange-500 underline-offset-4 cursor-pointer">{BUSINESS_INFO.website}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
