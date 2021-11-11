import React from "react";
import classes from "./profile.module.css"
import ProfileSlider from "./slider/slider";

const Profile = (): JSX.Element => {
  return <div className={classes.body}>
      <ProfileSlider></ProfileSlider>
  </div>;
};
export default Profile;
