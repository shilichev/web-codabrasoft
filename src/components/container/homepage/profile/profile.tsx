import React from "react";
import withSideMargins from "../../../../common/components/side-margin/withSideMagrins";
import CommonTitle from "../../../../common/components/title/title";
import classes from "./profile.module.css";
import ProfileSlider from "./slider/slider";

const Profile = (): JSX.Element => {
  const Title = withSideMargins({
    Component: (
      <CommonTitle width="max(20%, 370px)">We make products shine</CommonTitle>
    ),
    backgroundColor: "pirple",
  });

  const items = [
    {
      title: "50+",
      subtitle: "Lorem",
    },
    {
      title: "50+",
      subtitle: "Lorem",
    },
    {
      title: "50+",
      subtitle: "Lorem",
    },
    {
      title: "50+",
      subtitle: "Lorem",
    },
  ];

  const Content = items.map((item) => (
    <div className={classes.item}>
      <div className={classes.itemTitle}>{item.title}</div>
      <div className={classes.itemSubtitle}>{item.subtitle}</div>
    </div>
  ));

  const InformationContent = withSideMargins({
    Component: <div className={classes.information}>{Content}</div>,
    backgroundColor: "pirple",
  });
  return (
    <div className={classes.body}>
      {Title}
      {InformationContent}
      <ProfileSlider></ProfileSlider>
    </div>
  );
};
export default Profile;
