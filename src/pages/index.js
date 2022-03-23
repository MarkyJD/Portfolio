import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import Experience from '../components/sections/Experience';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';

export default function IndexPage() {
  useEffect(() => {
    document.title = 'MarkyJD';
  }, []);

  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </Layout>
  );
}
