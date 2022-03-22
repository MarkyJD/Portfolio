import React from 'react';
import SectionHeader from '../SectionHeader';

export default function Contact() {
  return (
    <section className="max-w-screen-md mx-auto">
      <SectionHeader title="Contact" prefix="04." id="contact" rtl />
      <div className="flex flex-col">
        <h2 className="font-serif font-extrabold text-xl md:text-2xl text-slate-200">
          Get in Touch
        </h2>
        <p className="text-slate-300 font-raleway text-lg mb-5">
          I am always open to learning new things and meeting new people. Hit me
          up with a message
        </p>
        <a
          className="self-center mb-10"
          href="mailto:marky.dodson@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <button className="text-lg font-medium transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-orange-400/10 max-w-max px-10 py-2 border text-orange-400 border-orange-400 rounded hover:bg-orange-400 hover:text-slate-900">
            Say Hello
          </button>
        </a>
        <blockquote className="border-l-2 border-orange-400 py-2 px-3 self-center text-xl font-raleway italic text-slate-300">
          Seize the opportunity by the beard, for it is bald behind
          <span className="not-italic text-sm"> - Bulgarian Proverb</span>
        </blockquote>
      </div>
    </section>
  );
}
