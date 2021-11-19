import React from "react";
import classes from "./welcome-text.module.css";

interface IWelcomeTextProps {
  children: string;
}

const WelcomeText = ({ children }: IWelcomeTextProps) => {
  return <div className={classes.welcomeText}>{children}</div>;
};

export default WelcomeText;
