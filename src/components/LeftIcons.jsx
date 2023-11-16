import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import line from '../assets/Line2.svg';

function LeftIcons() {
  return (
    <div className="fixed bottom-0 left-5 hidden md:block">
      <ul>
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

        <li className="leftLine">
          <img src={line} className="pl-2" alt="" />
        </li>
      </ul>
    </div>
  );
}

export default LeftIcons;
