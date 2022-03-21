import React from 'react';

export default function SectionHeader({ title, prefix, id, rtl = false }) {
  return (
    <div
      className={`w-full flex ${
        rtl ? ' flex-row-reverse' : ' space-x-5 '
      } justify-between items-center font-extrabold text-3xl text-slate-100 font-serif mb-5`}
    >
      <h2 id={id}>
        <span className="text-orange-400 text-lg font-mono">{prefix}</span>
        {' ' + title}
      </h2>
      <div
        className={`border-b border-slate-600 flex-1 ${rtl && 'mr-5'}`}
      ></div>
    </div>
  );
}
