import React from "react";
import CommonTitle from "../../../../common/components/title/title";
import classes from "./portfolio.module.css";
import Project from "./projects/project";

const projects = [0, 0, 0, 0, 0, 0];

const Portfolio = (): JSX.Element => {
  return (
    <div className={classes.body}>
      <div className={classes.title}>
        <CommonTitle>Our Portfolio</CommonTitle>
        <div className={classes.subTitle}>
          See All Works{" "}
          <svg
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.03369 7.20487C8.03369 7.43649 7.94525 7.66808 7.76875 7.84467L2.21174 13.4016C1.85824 13.7551 1.28511 13.7551 0.931762 13.4016C0.57841 13.0483 0.57841 12.4753 0.931762 12.1217L5.84891 7.20487L0.931933 2.28798C0.578581 1.93448 0.578581 1.36153 0.931933 1.0082C1.28528 0.654535 1.85842 0.654535 2.21191 1.0082L7.76892 6.56507C7.94545 6.74174 8.03369 6.97334 8.03369 7.20487Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className={classes.projects}>
        <div className={classes.leftSide}>
          {projects.map((item, index) =>
            index < projects.length / 2 ? <Project></Project> : null
          )}
        </div>
        <div className={classes.rightSide}>
          {projects.map((item, index) =>
            index >= projects.length / 2 ? <Project></Project> : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
