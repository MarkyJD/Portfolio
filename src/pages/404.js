import React, { useEffect } from 'react';
import Background from '../components/Background';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Not Found';
  }, []);

  return (
    <>
      <Background />
      <div className="z-50 fixed inset-0 text-3xl text-slate-200 font-serif flex justify-center space-x-5 items-center">
        <p className="text-white">Sorry! This page does not exist</p>
        <a
          href="/"
          className="text-xl px-5 py-2 text-orange-400 border rounded border-orange-400 hover:bg-orange-400 hover:text-slate-900 transition-all duration-300"
        >
          Return
        </a>
      </div>
    </>
  );
}
