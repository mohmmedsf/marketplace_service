import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Briefcase, Award, DollarSign } from 'lucide-react';

const stats = [
  {
    icon: <Users className="h-8 w-8" />,
    value: "10,000+",
    label: "مطور محترف",
    color: "text-blue-600"
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    value: "25,000+",
    label: "مشروع مكتمل",
    color: "text-green-600"
  },
  {
    icon: <Award className="h-8 w-8" />,
    value: "98%",
    label: "نسبة رضا العملاء",
    color: "text-yellow-600"
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    value: "$50M+",
    label: "قيمة المشاريع",
    color: "text-purple-600"
  }
];

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`inline-flex p-4 rounded-full ${stat.color} bg-opacity-10 mb-4`}>
                {React.cloneElement(stat.icon, { className: `h-8 w-8 ${stat.color}` })}
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="text-3xl font-bold text-gray-900 mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}