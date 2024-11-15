import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Briefcase } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            منصة تربط بين المبرمجين والعملاء
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            نسهل عليك إيجاد أفضل المبرمجين لمشروعك أو العثور على مشاريع مثيرة للاهتمام
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              أنا عميل أبحث عن مبرمج
            </button>
            <button className="bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors">
              أنا مبرمج أبحث عن مشاريع
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: <Code className="h-8 w-8 text-indigo-600" />,
              title: "مبرمجون محترفون",
              description: "نخبة من المبرمجين ذوي الخبرة في مختلف التقنيات"
            },
            {
              icon: <Users className="h-8 w-8 text-indigo-600" />,
              title: "تواصل مباشر",
              description: "منصة تواصل سهلة ومباشرة بين العملاء والمبرمجين"
            },
            {
              icon: <Briefcase className="h-8 w-8 text-indigo-600" />,
              title: "مشاريع متنوعة",
              description: "فرص عمل متنوعة في مختلف مجالات البرمجة"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}