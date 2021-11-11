import React from "react";
import classes from "./customers.module.css";
import withSideMargins from "../../../../common/components/side-margin/withSideMagrins";
// import CustomersSlider from "./slider/slider";

const Customers = (): JSX.Element => {
  return (
    <div className={classes.body}>
      {withSideMargins({
        Component: (
          <div>
            <div className={classes.title}>
              <span className={classes.pirple}>Our Customers'</span> Success
              Stories-cycle
            </div>
            <div className={classes.subTitle}></div>
          </div>
        ),
      })}
      {/* <CustomersSlider></CustomersSlider> */}
    </div>
  );
};

export default Customers;
