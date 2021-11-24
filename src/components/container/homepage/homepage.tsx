import React from "react";
import withSideMargins from "../../../common/components/side-margin/withSideMagrins";
import Customers from "./customers/customers";
import Development from "./developments/developments";
import InfoSection from "./footer_info_section/footer_info_section";
import classes from "./homepage.module.css";
import Portfolio from "./portfolio/portfolio";
import Profile from "./profile/profile";
import WelcomeComponent from "./welcome_component/welcome-component";

const Homepage = (): JSX.Element => {
  return (
    <div className={classes.homepage}>
      {withSideMargins({
        Component: <WelcomeComponent />,
      })}
      {withSideMargins({
        Component: <Development />,
      })}
      {withSideMargins({
        Component: <Portfolio />,
        backgroundColor: "var(--second-bg-color)",
      })}
      <Customers></Customers>
      <Profile></Profile>
      {withSideMargins({
        Component: <InfoSection />,
      })}
    </div>
  );
};

export default Homepage;
