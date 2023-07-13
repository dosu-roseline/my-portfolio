import React from 'react';
import git from '../assets/github.svg';
import arrow from '../assets/arrow.svg';

function Card({ img, title, des, gitLink, webLink, tools }) {
  return (
    <div
      className="flex items-center mb-10 py-10 px-10 gap-10 "
      style={{
        background:
          'linear-gradient(180deg, #004757 22.70%, rgba(0, 36, 44, 0.00) 100%)',
        borderRadius: '40px',
        border: '3px solid #00517B',
        transition: 'background 0.5s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background =
          'linear-gradient(180deg, rgba(0, 36, 44, 0.00) 0%, #01191F 39.06%)';
        (e.currentTarget.style.border = '1px solid #00517B'),
          (e.currentTarget.querySelector('img').style.transform = 'scale(1.1)');
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background =
          'linear-gradient(180deg, #004757 22.70%, rgba(0, 36, 44, 0.00) 100%)';
        e.currentTarget.querySelector('img').style.transform = 'scale(1)';
        e.currentTarget.style.border = '3px solid #00517B';
      }}
    >
      <div className="bg-[#00000033] rounded-2xl">
        <img src={img} alt="" style={{ transition: 'transform 0.5s' }} />
      </div>
      <div className="">
        <h1 className="text-[#D9D9D9] text-[40px] font-normal ">{title}</h1>
        <p
          className="text-[#D9D9D9] mb-2"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          {des}
        </p>
        <p
          className="text-[#D9D9D9] text-[18px] font-normal pb-2 mb-5"
          style={{ fontFamily: 'Fira Code, monospace' }}
        >
          {tools}
        </p>
        <div className="flex items-center gap-5">
          <a href={gitLink} target="blank">
            <button
              className="flex items-center gap-1 bg-transparent hover:bg-[#fff] hover:text-[#00242C] text-[#D9D9D9] font-semibold  py-1 px-2 md:px-5 border border-white hover:border-transparent rounded-3xl text-xs md:text-sm"
              style={{ fontFamily: 'Fira Code, monospace' }}
            >
              View Github <img src={git} alt="Git Icon" className="h-[20px]" />{' '}
            </button>
          </a>
          <a href={webLink} target="blank">
            <button
              className="flex items-center gap-1"
              style={{ fontFamily: 'Fira Code, monospace' }}
            >
              View website{' '}
              <img src={arrow} alt="Website Icon" className="h-[20px]" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
