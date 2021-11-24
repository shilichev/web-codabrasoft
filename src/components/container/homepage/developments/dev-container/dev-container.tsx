import React from "react";
import classes from "./dev-container.module.css";

interface IDevContainerProps {
  children: JSX.Element[];
}

const DevContainer = ({ children }: IDevContainerProps): JSX.Element => {

  return <div className={classes.container}>{children}</div>;
};

export default DevContainer;
