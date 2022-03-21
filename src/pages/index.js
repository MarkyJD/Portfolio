import React from 'react';
import Layout from '../components/Layout';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';

export default function IndexPage() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Experience />
    </Layout>
  );
}
