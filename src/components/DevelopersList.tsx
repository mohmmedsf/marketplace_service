import React from 'react';
import DeveloperCard from './DeveloperCard';

const developers = [
  {
    id: 1,
    name: "أحمد محمد",
    title: "Full Stack Developer",
    rating: 4.9,
    location: "القاهرة، مصر",
    hourlyRate: 45,
    completedProjects: 32,
    skills: ["React", "Node.js", "TypeScript", "MongoDB"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    name: "سارة أحمد",
    title: "UI/UX Designer & Frontend Developer",
    rating: 4.8,
    location: "دبي، الإمارات",
    hourlyRate: 55,
    completedProjects: 28,
    skills: ["Figma", "React", "TailwindCSS", "Next.js"],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    name: "محمد علي",
    title: "Mobile App Developer",
    rating: 4.7,
    location: "الرياض، السعودية",
    hourlyRate: 50,
    completedProjects: 24,
    skills: ["React Native", "Flutter", "Firebase", "AWS"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];

export default function DevelopersList() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">أفضل المطورين</h2>
        <button className="text-indigo-600 hover:text-indigo-700 font-medium">
          عرض الكل
        </button>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {developers.map((developer) => (
          <DeveloperCard key={developer.id} developer={developer} />
        ))}
      </div>
    </div>
  );
}