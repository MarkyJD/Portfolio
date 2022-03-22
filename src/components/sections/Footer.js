import React, { useState, useEffect } from 'react';

export default function Footer() {
  return (
    <a
      href="https://github.com/MarkyJD/Portfolio"
      alt="This site's Github repo"
      target="_blank"
    >
      <div className="absolute text-slate-400 h-20 inset-x-0 bottom-0 flex flex-col justify-center items-center hover:text-slate-200 transition-all duration-300 cursor-pointer">
        <p className="text-sm">Built by Mark Dodson</p>
        <p className="text-sm">All Rights Reserved &copy; 2022</p>
      </div>
    </a>
  );
}
