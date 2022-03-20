import React from 'react';

export default function SectionHeader({ title, prefix, id }) {
  return (
    <div className="w-full space-x-5 flex justify-between items-center text-2xl text-slate-100 font-serif mb-5">
      <h2 id={id}>
        <span className="text-orange-400 text-lg font-mono">{prefix}</span>
        {' ' + title}
      </h2>
      <div className="border-b border-slate-600 flex-1"></div>
    </div>
  );
}
