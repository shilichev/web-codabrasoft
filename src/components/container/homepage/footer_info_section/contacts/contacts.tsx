import React from "react";
import classes from "./contacts.module.css";

const Contacts = (): JSX.Element => {
  return (
    <div className={classes.contacts}>
      <div className={classes.body}>
        <div className={classes.item}>
          <div className={classes.title}>CONTACTS</div>
          <div className={classes.subtitle}>info@codabrasoft.com</div>
        </div>
        <div className={classes.item}>
          <div className={classes.title}>ADDRESS</div>
          <div className={classes.subtitle}>
            66 Botolph St, Quincy, MA <br /> 02171-1910, United States
          </div>
        </div>
        <div className={classes.item}>
          <div className={classes.title}>FOLLOW</div>
          {/* <div className=}></div> */}
        </div>
      </div>
      <div className={classes.footer}>Copyright © 2021 • Codabrasoft LLC</div>
    </div>
  );
};

export default Contacts;
