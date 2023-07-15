import React from 'react';
import line from '../assets/Line2.svg';

function Right() {
  return (
    <div className="fixed bottom-0 right-3 text-[#D9D9D9] hidden md:block">
      <a
        href="mailto:dosuroseline@gmail.com"
        style={{
          writingMode: 'vertical-rl',
        }}
      >
        dosuroseline@gmail.com
      </a>
      <img src={line} className="pl-2" alt="" />
    </div>
  );
}

export default Right;
