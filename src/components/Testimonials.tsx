import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "منصة رائعة ساعدتني في العثور على مطورين محترفين لمشروعي. النتائج كانت مذهلة والتواصل كان سلساً للغاية.",
    author: "محمد عبدالله",
    role: "مؤسس شركة ناشئة",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    content: "كمطور، وجدت هنا فرصاً رائعة للعمل مع شركات عالمية. المنصة سهلت علي التواصل مع العملاء وإدارة المشاريع.",
    author: "سارة محمد",
    role: "مطورة واجهات أمامية",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">ماذا يقول عملاؤنا</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            آراء حقيقية من مطورين وعملاء استفادوا من منصتنا
          </p>
        </div>

        <div 
          ref={ref}
          className="grid md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote className="h-8 w-8 text-indigo-600 mb-4" />
              <p className="text-gray-700 mb-6">{testimonial.content}</p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover ml-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}