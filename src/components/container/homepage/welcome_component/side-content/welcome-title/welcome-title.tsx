import React from "react";
import classes from "./welcome-title.module.css";

interface IWelcomeTextProps {
  children: string;
}

const WelcomeTitle = ({ children }: IWelcomeTextProps) => {
  return <div className={classes.welcomeTitle}>{children}</div>;
};

export default WelcomeTitle;
