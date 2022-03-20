import React from 'react';
import Layout from '../components/Layout';
import About from '../components/sections/About';
import Hero from '../components/sections/Hero';

export default function IndexPage() {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
}
