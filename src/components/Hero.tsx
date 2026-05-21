import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50 -z-10 rounded-l-[100px] transform translate-x-20" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-50 -z-10 rounded-full blur-3xl opacity-50 transform -translate-x-32 translate-y-32" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
              Trusted by 10,000+ Businesses Across India
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-blue-900 leading-[1.1] mb-6 tracking-tight">
              One-Stop Solution for All Your <span className="text-orange-600">Business Compliance</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Expert assistance for GST, PAN, Passports, MSME registration, Loans, and much more. Focus on your growth while we handle the paperwork.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#contact" className="w-full sm:w-auto bg-blue-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-blue-900/20">
              Get Started 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="w-full sm:w-auto border-2 border-gray-200 bg-white text-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:border-blue-200 hover:bg-blue-50 transition-all text-center">
              View All Services
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500 font-medium"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-500" />
              <span>Government Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-500" />
              <span>99% Success Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-500" />
              <span>Expert Support</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
