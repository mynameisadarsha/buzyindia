import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-orange-600 origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Trusted Partners / Minimal Slider placeholder or just a row of text */}
        <div className="bg-white py-12 border-y border-gray-100 overflow-hidden">
          <div className="container mx-auto px-4">
            <p className="text-center text-gray-400 font-bold uppercase tracking-widest text-xs mb-8">Specialists in Indian Business Solutions</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-2xl font-black text-gray-400">GST-CONSULT</span>
              <span className="text-2xl font-black text-gray-400">MSME-PRO</span>
              <span className="text-2xl font-black text-gray-400">BANK-BRIDGE</span>
              <span className="text-2xl font-black text-gray-400">PAN-EXPERT</span>
              <span className="text-2xl font-black text-gray-400">FIN-SOLVE</span>
            </div>
          </div>
        </div>

        <Services />
        <Testimonials />
        
        {/* Features / Why Us section */}
        <section id="about" className="py-24 bg-blue-900 text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full" />
            <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rounded-full" />
          </div>
          
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">Why Choose <span className="text-orange-500">BuzyIndia</span> for your compliance needs?</h2>
                <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                  Navigating the Indian regulatory landscape can be daunting. We bring years of expertise and a streamlined digital-first approach to make compliance effortless for you.
                </p>
                
                <ul className="space-y-6">
                  {[
                    "Faster processing times with digital workflows",
                    "Dedicated account manager for every client",
                    "Transparent pricing with no hidden costs",
                    "Error-free documentation and guaranteed filing"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="font-semibold text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square bg-blue-800 rounded-[60px] p-8 flex flex-col justify-center border border-blue-700 shadow-2xl">
                  <div className="mb-8">
                    <span className="text-8xl font-black text-orange-500 opacity-20 absolute top-4 left-4">01</span>
                    <h3 className="text-3xl font-bold mb-4 ml-8 relative z-10">Expertise</h3>
                    <p className="text-blue-200 ml-8 relative z-10">Our team consists of qualified CAs and legal experts specialized in Indian business laws.</p>
                  </div>
                  <div className="mb-8">
                    <span className="text-8xl font-black text-orange-500 opacity-20 absolute top-1/2 left-4">02</span>
                    <h3 className="text-3xl font-bold mb-4 ml-8 relative z-10">Digital First</h3>
                    <p className="text-blue-200 ml-8 relative z-10">Submit documents online and track your application status in real-time.</p>
                  </div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-orange-500 p-6 rounded-3xl shadow-xl shadow-orange-900/40 rotate-12">
                  <span className="block text-3xl font-bold">100%</span>
                  <span className="text-sm font-medium">Satisfaction</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
