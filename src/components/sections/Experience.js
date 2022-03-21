import React from 'react';
import SectionHeader from '../SectionHeader';

export default function Experience() {
  return (
    <section className="max-w-screen-md mx-auto min-h-[50vh] pt-5 text-slate-300">
      <SectionHeader
        title="Experience & Certifications"
        prefix="03."
        id="experience"
      />
      <div className="w-10/12 mx-auto flex flex-col space-y-3">
        <div className="flex justify-between items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
          <div className="border-b-2 border-dotted border-slate-700 flex-1"></div>
        </div>
        <div className="flex justify-between text-lg items-center font-serif font-semibold">
          <p>Latrobe University</p>
          <p className="text-sm font-normal text-slate-400 font-sans">
            Online | 2019 - 2022
          </p>
        </div>
        <h3 className="font-raleway">
          Bachelor's Degree of Information Technology
        </h3>
      </div>
    </section>
  );
}
