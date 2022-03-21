import React from 'react';
import SectionHeader from '../SectionHeader';

export default function About() {
  return (
    <section className="max-w-screen-md mx-auto min-h-[50vh] pt-5 text-slate-300">
      <SectionHeader title="About Me" prefix="01." id="about" />
      <h3 className="font-semibold font-mono text-blue-200 text-lg italic my-3">
        Who Am I?
      </h3>
      <main className="grid grid-cols-5 gap-8 font-raleway max-h-full">
        <article className="col-span-5 md:col-span-3">
          <p className="mb-3">
            Hi, my name is Mark. I am a hobbyist musician, gamer and I
            absolutely <em>love</em> a good book. I am a recent graduate from
            Latrobe University with a Bachelor’s Degree in IT. I am currently a
            night manager at a holiday park, and I am an aspiring full-stack web
            developer.
          </p>
          <p>
            I have over 10 years’ experience split between retail and
            hospitality, I have worked many different roles within the fields
            and I am eager to change my trajectory in life by aiming for a
            career in the tech industry.
          </p>
          <h3 className="font-semibold font-mono text-blue-200 text-lg italic my-3">
            Technologies I am proficient with:
          </h3>
          <ul className="grid grid-cols-2 pl-5">
            <li className="text-slate-300">
              <span className="text-orange-400 text-xs">&#9655;</span> HTML &
              CSS
            </li>
            <li className="text-slate-300">
              <span className="text-orange-400 text-xs">&#9655;</span>{' '}
              JavaScript (ES6)
            </li>
            <li className="text-slate-300">
              <span className="text-orange-400 text-xs">&#9655;</span> React
              (CRA)
            </li>
            <li className="text-slate-300">
              <span className="text-orange-400 text-xs">&#9655;</span> Gatsby
            </li>
            <li className="text-slate-300">
              <span className="text-orange-400 text-xs">&#9655;</span> Java
            </li>
            <li className="text-slate-300">
              <span className="text-orange-400 text-xs">&#9655;</span> Python
            </li>
            <li className="text-slate-300">
              <span className="text-orange-400 text-xs">&#9655;</span>{' '}
              TailwindCSS
            </li>
            <li className="text-slate-300">
              <span className="text-orange-400 text-xs">&#9655;</span> Bootstrap
            </li>
          </ul>

          <h3 className="font-semibold font-mono text-blue-200 text-lg italic my-3">
            Things I have worked with and/or are still learning:
          </h3>
          <ul className="grid grid-cols-2 pl-5">
            <li className="text-slate-300">
              <span className="text-orange-400 text-xs">&#9655;</span> Gatsby
            </li>
            <li className="text-slate-300">
              <span className="text-orange-400 text-xs">&#9655;</span> Graphql
            </li>
            <li className="text-slate-300">
              <span className="text-orange-400 text-xs">&#9655;</span> Flutter
            </li>
            <li className="text-slate-300">
              <span className="text-orange-400 text-xs">&#9655;</span> Android
              development
            </li>
            <li className="text-slate-300">
              <span className="text-orange-400 text-xs">&#9655;</span> C
            </li>
            <li className="text-slate-300">
              <span className="text-orange-400 text-xs">&#9655;</span>{' '}
              MaterialUI
            </li>
          </ul>
        </article>
        <aside className="col-span-5 md:col-span-2 mx-auto">
          <img
            className="max-w-xs transition-all ring-8 ring-slate-800  duration-300 drop-shadow-md rounded grayscale hover:grayscale-0 saturate-100"
            src="/profile.jpg"
            alt="Me"
          />
        </aside>
      </main>
    </section>
  );
}
