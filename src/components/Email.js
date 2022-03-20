import React from 'react';

export default function Email() {
  return (
    <div className="hidden lg:flex fixed z-20 inset-y-0 right-0 w-24 text-slate-300 flex flex-col items-center justify-end space-y-6">
      <a href="mailto:marky.dodson@gmail.com">
        <p className="transition-all duration-300 rotate-90 -translate-y-20 font-mono text-shadow hover:text-orange-400 hover:text-shadow-accent">
          marky.dodson@gmail.com
        </p>
      </a>
      <div className="w-[1px] border-r border-slate-600 md:h-32 lg:h-40"></div>
    </div>
  );
}
