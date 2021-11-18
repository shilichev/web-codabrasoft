import React from "react";
import classes from "./customers.module.css";
import withSideMargins from "../../../../common/components/side-margin/withSideMagrins";
import Title from "../../../../common/components/title/title";
// import CustomersSlider from "./slider/slider";

const Customers = (): JSX.Element => {
  return (
    <div className={classes.body}>
      {withSideMargins({
        Component: (
          <div>
            <Title pirple="Our Customers'"> Our Customers' Success Stories-cycle </Title>
            <div className={classes.subTitle}></div>
          </div>
        ),
      })}
      {/* <CustomersSlider></CustomersSlider> */}
    </div>
  );
};

export default Customers;
