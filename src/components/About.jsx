import React from 'react';
import line from '../assets/Line.svg';
import roseline from '../assets/roseline.png';

function About() {
  return (
    <section
      id="about-me"
      className=" bg-[#00242C] text-[#D9D9D9] px-5 md:px-20 py-10 border-t"
    >
      <div className="flex justify-between">
        <p className="py-4 flex items-center gap-2 text-[#E5FBFF]">
          <img src={line} alt="" /> About me
        </p>
        <h1
          className="text-4xl md:text-8xl font-normal leading-none text-transparent bg-clip-text"
          style={{
            backgroundImage:
              'linear-gradient(180deg, #004757 0%, rgba(0, 36, 44, 0.00) 100%)',
          }}
        >
          About Me
        </h1>
      </div>
      <p className="md:w-[50%] w-[90%] text-xl md:text-3xl">
        I'm Roseline Peace, a devoted professional who finds joy in anime and
        classical music, seamlessly blending captivating storytelling and
        timeless melodies in my life.
      </p>
      <div className="flex flex-col md:flex-row items-center px-5 md:px-10 gap-10">
        <img src={roseline} alt="Roseline Dosu" className="h-[500px]" />
        <div className="">
          <div className="">
            <p
              style={{ fontFamily: 'Manrope, sans-serif' }}
              className="text-[12px] md:text-[18px] font-normal mb-5"
            >
              I am a passionate and driven frontend developer with a love for
              creating exceptional user experiences. With a keen eye for detail
              and a knack for problem-solving, I take pride in turning ideas
              into polished, pixel-perfect designs.
            </p>
            <p
              style={{ fontFamily: 'Manrope, sans-serif' }}
              className="text-[12px] md:text-[18px] font-normal mb-5"
            >
              Equipped with a solid foundation in HTML, CSS, and JavaScript, I
              am constantly honing my skills and staying up-to-date with the
              latest trends and technologies.
            </p>
            <p
              style={{ fontFamily: 'Manrope, sans-serif' }}
              className="text-[12px] md:text-[18px] font-normal mb-5"
            >
              Collaborative by nature, I thrive in dynamic teams where I can
              contribute my expertise and learn from fellow professionals. Let's
              collaborate and bring your vision to life!
            </p>
          </div>
          <div className="">
            <div
              className="flex items-center text-[12px] md:text-[18px]"
              style={{ fontFamily: 'Fira Code, monospace' }}
            >
              <p className="w-[50%] flex items-center gap-2">
                <span className="text-[3px] px-[2.5px] py-[1px] bg-white rounded-[50%]">
                  &nbsp;
                </span>
                JavaScript
              </p>
              <p className="w-[50%] flex items-center gap-2">
                <span className="text-[3px] px-[2.5px] py-[1px] bg-white rounded-[50%]">
                  &nbsp;
                </span>
                Dart
              </p>
            </div>
            <div
              className="flex items-center text-[12px] md:text-[18px]"
              style={{ fontFamily: 'Fira Code, monospace' }}
            >
              <p className="w-[50%] flex items-center gap-2">
                <span className="text-[3px] px-[2.5px] py-[1px] bg-white rounded-[50%]">
                  &nbsp;
                </span>
                React
              </p>
              <p className="w-[50%] flex items-center gap-2">
                <span className="text-[3px] px-[2.5px] py-[1px] bg-white rounded-[50%]">
                  &nbsp;
                </span>
                Flutter
              </p>
            </div>
            <div
              className="flex items-center text-[12px] md:text-[18px]"
              style={{ fontFamily: 'Fira Code, monospace' }}
            >
              <p className="w-[50%] flex items-center gap-2">
                <span className="text-[3px] px-[2.5px] py-[1px] bg-white rounded-[50%]">
                  &nbsp;
                </span>
                Tailwind
              </p>
              <p className="w-[50%] flex items-center gap-2">
                <span className="text-[3px] px-[2.5px] py-[1px] bg-white rounded-[50%]">
                  &nbsp;
                </span>
                HTML/CSS
              </p>
            </div>
            <div
              className="flex items-center text-[12px] md:text-[18px]"
              style={{ fontFamily: 'Fira Code, monospace' }}
            >
              <p className="w-[50%] flex items-center gap-2">
                <span className="text-[3px] px-[2.5px] py-[1px] bg-white rounded-[50%]">
                  &nbsp;
                </span>
                Node
              </p>
              <p className="w-[50%] flex items-center gap-2">
                <span className="text-[3px] px-[2.5px] py-[1px] bg-white rounded-[50%]">
                  &nbsp;
                </span>
                Bootstrap
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
