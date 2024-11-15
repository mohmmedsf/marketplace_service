import React from 'react';
import { Toaster } from 'react-hot-toast';
import { useThemeStore } from './stores/themeStore';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ProjectsList from './components/ProjectsList';
import DevelopersList from './components/DevelopersList';
import Testimonials from './components/Testimonials';

function App() {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 ${theme}`}>
      <Toaster 
        position="top-center"
        toastOptions={{
          className: 'dark:bg-gray-800 dark:text-white',
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ProjectsList />
        <DevelopersList />
        <Testimonials />
      </main>
    </div>
  );
}

export default App;