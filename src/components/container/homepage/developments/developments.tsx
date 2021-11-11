import React from "react";
import Dev from "./dev/dev";
import classes from "./developments.module.css";
import IOS from "../../../../data/images/welcome_page/ios.png";
import Android from "../../../../data/images/welcome_page/android.png";
import QA from "../../../../data/images/welcome_page/QA.png";
import Design from "../../../../data/images/welcome_page/design.png";
import Proto from "../../../../data/images/welcome_page/proto.png";
import StartUp from "../../../../data/images/welcome_page/startup.png";

export interface IDev {
  title: string;
  description: string;
  image: any;
}

const devs: IDev[] = [
  {
    title: "iOS Development",
    description:
      "Is the process of making mobile applications for Apple hardware, including iPhone and iPad, then deployed to the App Store.",
    image: IOS,
  },
  {
    title: "Android Development",
    description:
      "Is the process by which applications are created for devices running the Android operating system.",
    image: Android,
  },
  {
    title: "Quality & Assurance",
    description:
      "Whether it’s manual or automated testing, our perceptive QA specialists dig beneath the surface to get at the source of issues",
    image: QA,
  },
  {
    title: "UI/UX Design ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
    image: Design,
  },
  {
    title: "Prototyping",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
    image: Proto,
  },
  {
    title: "Start-ups  & MVP",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
    image: StartUp,
  },
];
const Development = (): JSX.Element => {
  return (
    <div className={classes.body}>
      <div className={classes.title}>
        <span className={classes.titleOther}>Full-cycle</span> Custom Software
        Development
      </div>
      <div className={classes.main}>
        {devs.map((item) => (
          <div className={classes.item}>
            <Dev
              title={item.title}
              description={item.description}
              image={item.image}
            ></Dev>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Development;
