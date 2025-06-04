
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation />
      <main className="relative">
        <section id="home" className="min-h-screen">
          <Hero />
        </section>
        <section id="introduction" className="min-h-screen">
          <Introduction />
        </section>
        <section id="education" className="min-h-screen">
          <Education />
        </section>
        <section id="skills" className="min-h-screen">
          <Skills />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
