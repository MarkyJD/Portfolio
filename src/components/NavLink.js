import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

export default function NavLink({
  prefix,
  title,
  id,
  className,
  onClick = () => {},
}) {
  return (
    <button
      className={`${className} transition-all duration-300 text-slate-400 hover:text-slate-100 font-mono text-md text-shadow hover:text-shadow-accent`}
      onClick={() => {
        onClick();
        scrollTo(id);
      }}
    >
      <span className="text-orange-400 text-sm">{prefix}</span>
      {' ' + title}
    </button>
  );
}
