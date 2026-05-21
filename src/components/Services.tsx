import { motion } from 'motion/react';
import { SERVICES } from '../constants';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-4">Our Premium Services</h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg italic font-medium">
            Everything you need to keep your business and personal documentation in check.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all group overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-colors" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center text-blue-600 shadow-lg">
                  <service.icon size={24} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-900">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <a href="#contact" className="text-blue-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                  Inquire Now <span>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-blue-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20" />
          <h3 className="text-2xl md:text-4xl font-bold mb-6">Don't see what you're looking for?</h3>
          <p className="text-blue-200 mb-10 max-w-xl mx-auto">
            We provide custom consultancy for a wide variety of business and legal services. Get in touch with us for a personalized quote.
          </p>
          <button className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-lg">
            Inquire Now
          </button>
        </div>
      </div>
    </section>
  );
}
