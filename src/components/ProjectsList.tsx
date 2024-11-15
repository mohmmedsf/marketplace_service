import React from 'react';
import { Clock, DollarSign, Tag } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "تطوير موقع تجارة إلكترونية",
    description: "نبحث عن مطور Full Stack لبناء منصة تجارة إلكترونية متكاملة",
    budget: "3000-5000",
    duration: "3 أشهر",
    tags: ["React", "Node.js", "MongoDB"],
    postedDate: "منذ يومين"
  },
  {
    id: 2,
    title: "تطبيق موبايل للتوصيل",
    description: "مطلوب مطور React Native لتطوير تطبيق توصيل طلبات",
    budget: "4000-6000",
    duration: "4 أشهر",
    tags: ["React Native", "Firebase", "Redux"],
    postedDate: "منذ 3 أيام"
  },
  {
    id: 3,
    title: "نظام إدارة مدرسة",
    description: "تطوير نظام إدارة متكامل لمدرسة يشمل إدارة الطلاب والمدرسين",
    budget: "2500-4000",
    duration: "2 أشهر",
    tags: ["Laravel", "MySQL", "Vue.js"],
    postedDate: "منذ 5 أيام"
  }
];

export default function ProjectsList() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">أحدث المشاريع</h2>
      
      <div className="grid gap-6">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm"
                    >
                      <Tag className="inline-block h-4 w-4 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <span className="text-gray-500 text-sm">{project.postedDate}</span>
            </div>
            
            <div className="flex items-center gap-6 mt-4 pt-4 border-t">
              <div className="flex items-center text-gray-700">
                <DollarSign className="h-5 w-5 mr-2" />
                <span>{project.budget} $</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Clock className="h-5 w-5 mr-2" />
                <span>{project.duration}</span>
              </div>
              <button className="mr-auto bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                تقديم عرض
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}