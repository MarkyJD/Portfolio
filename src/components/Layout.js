import React from 'react';
import Background from './Background';
import Email from './Email';
import Footer from './sections/Footer';
import Navbar from './sections/Navbar';
import Socials from './Socials';

export default function Layout({ children }) {
  return (
    <div className="bg-slate-900 antialiased relative px-6">
      <Navbar />
      <Socials />
      <Email />
      <Background />
      <div className="relative text-white pb-32">{children}</div>
      <Footer />
    </div>
  );
}
