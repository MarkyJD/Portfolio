import React, { useEffect, useState } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import NavLink from '../NavLink';
import Socials from '../Socials';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`transition-all duration-300 ${
          show ? ' translate-y-0 ' : '-translate-y-full'
        } fixed inset-x-0 z-40 bg-slate-900 h-14 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-xl flex justify-between items-center px-5 text-white`}
      >
        <div>
          <h1 className="font-mono text-orange-400 text-md text-shadow-md hover:text-shadow-accent">
            <button onClick={() => scrollTo('top')}>{'</markyjd>'}</button>
          </h1>
        </div>
        <div className="md:hidden text-slate-100">
          <button onClick={() => setIsMenuOpen(true)} className="p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex md:space-x-5 lg:space-x-8">
          <NavLink title="About" prefix="01." id="#about" />
          <NavLink title="Projects" prefix="02." id="#projects" />
          <NavLink title="Experience" prefix="03." id="#experience" />
          <NavLink title="Contact" prefix="04." id="#contact" />

          <button
            type="button"
            className="transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-orange-400/10 max-w-max px-3 py-1 border text-orange-400 border-orange-400 rounded hover:bg-orange-400 hover:text-slate-900"
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </button>
        </div>
      </div>

      {/* Menu */}

      <div
        className={`transition-all duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden fixed right-0 inset-y-0 w-2/3 z-50 bg-stone-800 px-5 flex flex-col drop-shadow-xl`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="h-14 p-1 self-end text-slate-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col space-y-2 ">
          <NavLink
            title="About"
            prefix="01."
            id="#about"
            className="rounded py-3 w-full text-left"
            onClick={() => setIsMenuOpen(false)}
          />
          <NavLink
            title="Projects"
            prefix="02."
            id="#projects"
            className="rounded py-3 w-full text-left"
            onClick={() => setIsMenuOpen(false)}
          />
          <NavLink
            title="Experience"
            prefix="03."
            id="#experience"
            className="rounded py-3 w-full text-left"
            onClick={() => setIsMenuOpen(false)}
          />
          <NavLink
            title="Contact"
            prefix="04."
            id="#contact"
            className="rounded py-3 w-full text-left"
            onClick={() => setIsMenuOpen(false)}
          />

          <button
            type="button"
            className="w-full transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-orange-400/10 px-3 py-1 border text-orange-400 border-orange-400 rounded hover:bg-orange-400 hover:text-slate-900"
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </button>
        </div>
        <Socials mobile />
      </div>

      {/* background blur */}
      <div
        className={`transition-all duration-300  ${
          isMenuOpen ? 'z-40 backdrop-blur-sm' : 'backdrop-blur-none'
        } md:hidden fixed inset-0`}
      ></div>
    </>
  );
}
