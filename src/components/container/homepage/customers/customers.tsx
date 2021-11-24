import React from "react";
import classes from "./customers.module.css";
import withSideMargins from "../../../../common/components/side-margin/withSideMagrins";
import CommonTitle from "../../../../common/components/title/title";
// import CustomersSlider from "./slider/slider";

const Customers = (): JSX.Element => {
  return (
    <div className={classes.body}>
      {withSideMargins({
        Component: (
          <CommonTitle pirple="Our Customers'">
            Our Customers' Success Stories-cycle
          </CommonTitle>
        ),
      })}
    </div>
  );
};

export default Customers;
