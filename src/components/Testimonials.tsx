import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Sanjeev Kumar',
    position: 'Business Owner, Bengaluru',
    content: 'BuzyIndia made my GST registration incredibly easy. I was worried about the paperwork, but they handled everything in just a few days. High recommended!',
    rating: 5
  },
  {
    name: 'Anjali Sharma',
    position: 'Freelance Designer',
    content: 'I needed help with my PAN card correction and MSME registration. The team was very professional and kept me updated at every step. Great service.',
    rating: 5
  },
  {
    name: 'Rahul Varma',
    position: 'Software Engineer',
    content: 'Assisted me with my PF withdrawal. The process which seemed complicated was made simple by BuzyIndia. Efficient and transparent.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">
            Helping thousands of individuals and businesses stay compliant and grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-[40px] relative border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="absolute top-6 right-8 text-orange-500 opacity-20">
                <Quote size={40} fill="currentColor" />
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-orange-500 fill-orange-500" />
                ))}
              </div>

              <p className="text-gray-600 mb-8 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              <div>
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-blue-600 text-sm font-medium">{testimonial.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
