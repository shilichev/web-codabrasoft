import React from "react";
import classes from "./footer_info_section.module.css";
import FormInfo from "./form_info/form_info";
import Contacts from "./contacts/contacts";

const InfoSection = (): JSX.Element => {
  return (
    <div className={classes.footer}>
      <FormInfo></FormInfo>
      <Contacts></Contacts>
    </div>
  );
};

export default InfoSection;
