import React from "react";
import classes from "./withSideMargins.module.css";

const withSideMargins = (props:any) => {
  const style = {
     background: props.backgroundColor || "var(--main-bg-color)"
  };
  return <div style={style} className={classes.block}>{props.Component}</div>;
};

export default withSideMargins;
