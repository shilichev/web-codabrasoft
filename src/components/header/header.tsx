import React, { useEffect, useState } from "react";
import classes from "./header.module.css";

const Header = (): JSX.Element => {
  return (
    <div className={classes.header}>
      <div className={classes.title}>Codabrasoft</div>
      <div className={classes.menuItems}>
        <div>About</div>
        <div>Work</div>
        <div>Process</div>
        <span>
          <div className={classes.outlineBorder}></div>
          <div className={classes.outline}></div>
          <div className={classes.menuButton}>Hire Us</div>
        </span>
      </div>
    </div>
  );
};

export default Header;
