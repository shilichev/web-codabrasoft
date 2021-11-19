import React from "react";
import "./social.css";

import LinkedIn from "../../../data/images/welcome_page/linkedin 1.png";
import Facebook from "../../../data/images/welcome_page/facebook 1.png";
import Twitter from "../../../data/images/welcome_page/twitter 1.png";
import Behance from "../../../data/images/welcome_page/behance 1.png";

const SocialLinks = () => {
  return (
    <div className="linkContainer">
      <img src={LinkedIn} className="link" />
      <img src={Facebook} />
      <img src={Twitter} />
      <img src={Behance} />
    </div>
  );
};

export default SocialLinks;
