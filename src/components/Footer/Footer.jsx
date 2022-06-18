import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Behance from "@iconscout/react-unicons/icons/uil-behance";
import Dribbble from "@iconscout/react-unicons/icons/uil-dribbble";


const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="f-text">
        <span>Made with love by </span><span>Stella Raab</span>
        </div>
        <div className="f-icons">
          <a href='https://www.instagram.com/howlongisnever/' target='blank'>
          <Instagram color="white" size={"3rem"} />
          </a>
          <a href='https://github.com/if-stella' target='blank'>
          <Github color="white" size={"3rem"} />
          </a>
          <a href='https://www.linkedin.com/in/stella-raab/' target='blank'>
          <Linkedin color="white" size={"3rem"} />
          </a>
          <a href='https://dribbble.com/stellaraab' target='blank'>
          <Dribbble color="white" size={"3rem"} />
          </a>
          <a href='https://www.behance.net/stellaraab' target='blank'>
          <Behance color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
