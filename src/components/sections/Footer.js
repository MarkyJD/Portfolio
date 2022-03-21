import React, { useState, useEffect } from 'react';

export default function Footer() {
  return (
    <div className="absolute text-slate-400 h-20 inset-x-0 bottom-0 flex flex-col justify-center items-center">
      <p className="text-sm">Built by Mark Dodson</p>
      <p className="text-sm">All Rights Reserved &copy; 2022</p>
    </div>
  );
}
