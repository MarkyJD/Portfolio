import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

export default function Hero() {
  return (
    <div className="text-white max-w-screen-md mx-auto min-h-screen flex justify-center items-center">
      <div className=" w-full">
        <p className="text-orange-400 font-light mb-5">G'day, my name is</p>
        <h1 className="text-shadow font-serif font-extrabold text-4xl md:text-[4rem] md:mb-6 md:mt-12 text-slate-100 mb-3">
          Mark Dodson.
        </h1>
        <h2 className="font-serif italic font-extrabold text-xl md:text-3xl text-slate-500 mb-6">
          I like to build things for the web.
        </h2>
        <p className="w-1/2 font-raleway text-slate-300 mb-5">
          I am a full-stack web developer based just outside of Melbourne.
        </p>
        <button
          type="button"
          onClick={() => scrollTo('#projects')}
          className="text-lg font-medium transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-orange-400/10 max-w-max px-5 py-2 border text-orange-400 border-orange-400 rounded hover:bg-orange-400 hover:text-slate-900"
        >
          See My Work
        </button>
      </div>
    </div>
  );
}
