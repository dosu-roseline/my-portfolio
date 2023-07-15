import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

function NavBar() {
  return (
    <div
      className="flex justify-between items-center px-5 md:px-10 py-2 text-[#D9D9D9]"
      style={{ borderBottom: '1px solid #4b5563' }}
    >
      <img src={logo} alt="Logo" className="h-[25px] md:h-[50px]" />
      <div className="flex items-center gap-4 md:gap-10">
        <a href="#work">
          <button className="hover:border-b hover:pb-1 text-xs md:text-sm">
            Work
          </button>
        </a>
        <a href="#about-me">
          <button className="hover:border-b hover:pb-1 text-xs md:text-sm">
            About
          </button>
        </a>
        <a href="#contact">
          <button className="hover:border-b hover:pb-1 text-xs md:text-sm">
            Contact
          </button>
        </a>
      </div>
      <a
        href="https://drive.google.com/file/d/1PpunabvDDWiWai0etG9vRcS9XXQ0BC1Z/view?usp=sharing"
        target="blank"
      >
        <button className="bg-transparent hover:bg-[#fff] hover:text-[#00242C] text-[#D9D9D9] font-semibold  py-1 px-2 md:px-5 border border-white hover:border-transparent rounded-3xl text-xs md:text-sm">
          Resume
        </button>
      </a>
    </div>
  );
}

export default NavBar;
