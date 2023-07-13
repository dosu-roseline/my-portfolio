import React from 'react';
import line from '../assets/Line.svg';

function About() {
  return (
    <section
      id="about-me"
      className=" bg-[#00242C] text-[#D9D9D9] px-20 py-10 border-t"
    >
      <div className="flex justify-between">
        <p className="py-4 flex items-center gap-2 text-[#E5FBFF]">
          <img src={line} alt="" /> About me
        </p>
        <h1
          className="text-8xl font-normal leading-none text-transparent bg-clip-text"
          style={{
            backgroundImage:
              'linear-gradient(180deg, #004757 0%, rgba(0, 36, 44, 0.00) 100%)',
          }}
        >
          About Me
        </h1>
      </div>
      <p className="w-[50%] text-3xl">
        I am Roseline Peace if I am not working I am definitely watching anime
        or listening to classical Music
      </p>
      <div className="">
        <div className=""></div>
        <div className="">
          <p style={{ fontFamily: 'Manrope, sans-serif' }}>
            Lorem ipsum dolor sit amet consectetur. Vulputate id habitant tempus
            gravida cursus purus dapibus pellentesque quam. Odio morbi non id
            et.
          </p>
          <p style={{ fontFamily: 'Manrope, sans-serif' }}>
            Lorem ipsum dolor sit amet consectetur. Vulputate id habitant tempus
            gravida cursus purus dapibus pellentesque quam. Odio morbi non id
            et.
          </p>
          <p style={{ fontFamily: 'Manrope, sans-serif' }}>
            Lorem ipsum dolor sit amet consectetur. Vulputate id habitant tempus
            gravida cursus purus dapibus pellentesque quam. Odio morbi non id
            et.
          </p>
        </div>
        <div className="">
          <div
            className="flex gap-5 items-center"
            style={{ fontFamily: 'Fira Code, monospace' }}
          >
            <p>JavaScript</p>
            <p>Dart</p>
          </div>
          <div
            className="flex gap-5 items-center"
            style={{ fontFamily: 'Fira Code, monospace' }}
          >
            <p>React</p>
            <p>Flutter</p>
          </div>
          <div
            className="flex gap-5 items-center"
            style={{ fontFamily: 'Fira Code, monospace' }}
          >
            <p>Tailwind / Bootstrap</p>
            <p>HTML/CSS</p>
          </div>
          <div
            className="flex gap-5 items-center"
            style={{ fontFamily: 'Fira Code, monospace' }}
          >
            <p>Node</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
