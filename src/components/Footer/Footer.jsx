import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
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
          <Insta color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} />
          <Linkedin color="white" size={"3rem"} />
          <Dribbble color="white" size={"3rem"} />
          <Behance color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
