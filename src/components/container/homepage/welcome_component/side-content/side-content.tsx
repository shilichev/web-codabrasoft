import React from "react";
import HireButton from "../../../../../common/components/hire-us-button/hire-us-button";
import SocialLinks from "../../../../../common/components/social-links/social-links";
import classes from "./side-content.module.css";
import WelcomeText from "./welcome-text/welcome-text";
import WelcomeTitle from "./welcome-title/welcome-title";

const SideContent = (): JSX.Element => {
  return (
    <div className={classes.content}>
      <WelcomeText>Hey, we are Codabrasoft! 👋</WelcomeText>
      <WelcomeTitle>Design and development for your product</WelcomeTitle>
      <HireButton>Hire Us</HireButton>
      <SocialLinks />
    </div>
  );
};
export default SideContent;
