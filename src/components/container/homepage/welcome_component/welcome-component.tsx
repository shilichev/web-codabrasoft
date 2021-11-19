import React from "react";
import classes from "./welcome-component.module.css";

import SideContent from "./side-content/side-content";

const WelcomeComponent = (): JSX.Element => {
  return (
    <div className={classes.container}>
      <SideContent></SideContent>
    </div>
  );
};
export default WelcomeComponent;
