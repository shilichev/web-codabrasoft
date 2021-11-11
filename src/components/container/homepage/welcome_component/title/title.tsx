import React from "react";
import classes from "./title.module.css";
import LinkedIn from "../../../../../data/images/welcome_page/linkedin 1.png";
import Facebook from "../../../../../data/images/welcome_page/facebook 1.png";
import Twitter from "../../../../../data/images/welcome_page/twitter 1.png";
import Behance from "../../../../../data/images/welcome_page/behance 1.png";

const Title = (): JSX.Element => {
  return (
    <div className={classes.title}>
      <div className={classes.welcome_text}>Hey, we are Codabrasoft! 👋 </div>
      <div className={classes.welcome_title}>
        Design and development for your product
      </div>
      <button className={classes.buttonHire}>
        <div className={classes.buttonHireText}>Hire Us</div>
      </button>
      <div className={classes.linkContainer}>
        <img src={LinkedIn} className={classes.link} />
        <img src={Facebook} />
        <img src={Twitter} />
        <img src={Behance} />
      </div>
    </div>
  );
};
export default Title;
