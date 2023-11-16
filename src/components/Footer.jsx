import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';

const Footer = () => {
  return (
    <footer
      className="bg-[#00242C] text-[#D9D9D9] py-5 text-center"
      style={{ borderTop: '1px solid #4b5563' }}
    >
      <ul className="flex gap-10 justify-center md:hidden">
        <li className="pb-5">
          <a href="https://github.com/dosu-roseline" target="blank">
            <img src={github} alt="" />
          </a>
        </li>
        <li className="pb-5">
          <a
            href="https://www.linkedin.com/in/dosu-roseline-9573011b8/"
            target="blank"
          >
            <img src={linkedin} alt="" />
          </a>
        </li>
        <li className="pb-5">
          <a href="https://www.instagram.com/dosuroseline/" target="blank">
            <img src={instagram} alt="" />
          </a>
        </li>
        <li className="pb-5">
          <a href="https://twitter.com/DosuRoseline" target="blank">
            <img src={twitter} alt="" />
          </a>
        </li>
      </ul>
      <p className="text-[12px] md:text-[18px]">
        Designed By Fortune Idu, Built with ❤ by yours truly Roseline Dosu
      </p>
    </footer>
  );
};

export default Footer;
