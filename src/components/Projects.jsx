import React from 'react';
import line from '../assets/Line.svg';
import Card from './Card';
import natours from '../assets/natours.png';
import omniFood from '../assets/omni.png';
import starwars from '../assets/starwars.png';

function Projects() {
  return (
    <section
      id="work"
      className=" bg-[#00242C] text-white px-20 py-10 border-t"
    >
      <div className="flex justify-between">
        <p className="py-4 flex items-center gap-2 text-[#E5FBFF]">
          <img src={line} alt="" /> Work
        </p>
        <h1
          className="text-8xl font-normal leading-none text-transparent bg-clip-text"
          style={{
            backgroundImage:
              'linear-gradient(180deg, #004757 0%, rgba(0, 36, 44, 0.00) 100%)',
          }}
        >
          Work
        </h1>
      </div>
      <h1 className="text-[24px] pb-10 text-[#D9D9D9]">
        Check out Some of my Projects
      </h1>
      {data.map((project, index) => {
        return (
          <Card
            key={index}
            img={project.img}
            title={project.title}
            des={project.des}
            webLink={project.webLink}
            tools={project.tools}
            gitLink={project.gitLink}
          />
        );
      })}
    </section>
  );
}

export default Projects;

const data = [
  {
    img: natours,
    title: 'Natours',
    des: 'Lorem ipsum dolor sit amet consectetur. Vulputate id habitant tempus gravida cursus purus dapibus pellentesque quam. Odio morbi non id et.',
    tools: 'HTML, CSS & Vanilla JavaScript',
    webLink: 'https://natourstwo.vercel.app/',
    gitLink: 'https://github.com/dosu-roseline/natours',
  },
  {
    img: omniFood,
    title: 'Omni Food',
    des: 'Lorem ipsum dolor sit amet consectetur. Vulputate id habitant tempus gravida cursus purus dapibus pellentesque quam. Odio morbi non id et.',
    tools: 'HTML, CSS & Vanilla JavaScript',
    webLink: 'https://omini-food-neon.vercel.app/',
    gitLink: 'https://github.com/dosu-roseline/omini-food',
  },
  {
    img: starwars,
    title: 'Starwars',
    des: 'Lorem ipsum dolor sit amet consectetur. Vulputate id habitant tempus gravida cursus purus dapibus pellentesque quam. Odio morbi non id et.',
    tools: 'React & Vanilla CSS',
    webLink: 'https://starwars-ochre.vercel.app/',
    gitLink: 'https://github.com/dosu-roseline/Starwars',
  },
];