import React from "react";
import classes from "./welcome_component.module.css";

import Title from "./title/title";


const WelcomeComponent = (): JSX.Element => {

  return (
    <div className={classes.main}>
      <Title></Title>
    </div>
  );
};
export default WelcomeComponent;
