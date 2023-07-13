import React from 'react';
import bg from '../assets/bg-intro.png';
import line from '../assets/Line.svg';
import NavBar from './NavBar';

function Intro() {
  return (
    <section className="w-full bg-[#00242C]">
      <NavBar />
      <div
        className="bg-cover bg-center py-6"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className=" text-white text-start px-5 md:px-20">
          <p className="py-4 flex gap-2">
            <img src={line} alt="" /> Hi, my name is
          </p>
          <h1 className="text-[26px] md:text-[56px] lg:text-[66px]  font-normal  leading-none pb-4">
            Roseline Peace
          </h1>
          <h1 className="text-[23px] md:text-[50px] lg:text-[66px] font-normal leading-none">
            I build things for the web
          </h1>
          <p className="text-[16px] md:text-[24px] font-normal text-[#D9D9D9] w-[86%] py-8 md:w-[76%] lg:w-[49%] leading-none">
            I create inclusive, accessible digital products, with experience
            working with startups and enterprise products. I believe in using
            product design as a tool to elevate human interaction with
            technology that scale.
          </p>
          <a href="https://flowcv.com/resume/kcesuhc77r" target="blank">
            <button className="bg-transparent hover:bg-[#fff] hover:text-[#00242C] text-[#D9D9D9] font-semibold  py-1 px-2 md:px-5 border border-white hover:border-transparent rounded-3xl text-xs md:text-sm mb-10">
              Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Intro;