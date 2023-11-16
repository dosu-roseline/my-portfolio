import bg from '../assets/bg-intro.png';
import line from '../assets/Line.svg';
import NavBar from './NavBar';

function Intro() {
  return (
    <section className="w-full bg-[#00242C] lg:min-h-screen">
      <NavBar />
      <div
        className="bg-cover bg-center py-6"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className=" text-white text-start px-5 md:px-20">
          <p className="py-4 flex gap-2 text-[#E5FBFF]">
            <img src={line} alt="" /> Hi, my name is
          </p>
          <h1 className="text-[26px] md:text-[56px] lg:text-[66px] text-[#CEF7FF]  font-normal  leading-none pb-4">
            Roseline Peace
          </h1>
          <h1 className="text-[23px] md:text-[50px] lg:text-[66px] text-[#E5FBFF] font-normal leading-none">
            I build things for the web
          </h1>
          <p
            className="text-[16px] md:text-[20px] font-normal text-[#D9D9D9] w-[90%] py-8 md:w-[76%] lg:w-[49%]"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            I am a passionate frontend developer with a keen eye for crafting
            beautiful and intuitive user experiences. With a solid foundation in
            HTML, CSS, and JavaScript, I strive to create pixel-perfect designs
            that seamlessly blend aesthetics with functionality.
          </p>
          <a
            href="https://drive.google.com/file/d/1PpunabvDDWiWai0etG9vRcS9XXQ0BC1Z/view?usp=sharing"
            target="blank"
          >
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
