import React from 'react';
import { Star, Code2, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface DeveloperCardProps {
  developer: {
    id: number;
    name: string;
    title: string;
    rating: number;
    location: string;
    hourlyRate: number;
    skills: string[];
    image: string;
    completedProjects: number;
  };
}

export default function DeveloperCard({ developer }: DeveloperCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6"
    >
      <div className="flex items-start gap-4">
        <img
          src={developer.image}
          alt={developer.name}
          className="w-20 h-20 rounded-full object-cover border-2 border-indigo-100"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{developer.name}</h3>
              <p className="text-gray-600">{developer.title}</p>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="mr-1 font-medium">{developer.rating}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mt-3 text-gray-600">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 ml-1" />
              <span>{developer.location}</span>
            </div>
            <div className="flex items-center">
              <Code2 className="h-4 w-4 ml-1" />
              <span>{developer.completedProjects} مشروع مكتمل</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          {developer.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t">
        <div className="text-lg font-semibold text-gray-900">
          ${developer.hourlyRate}/ساعة
        </div>
        <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          <span>عرض الملف الشخصي</span>
          <ExternalLink className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
}