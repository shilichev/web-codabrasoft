import React from "react";
import classes from "./form_info.module.css";

interface IDepartments {
  text: string;
  status: boolean;
}

const FormInfo = (): JSX.Element => {
  const departments: IDepartments[] = [
    {
      text: "iOS Development",
      status: true,
    },
    {
      text: "Android Development",
      status: false,
    },
    {
      text: "Business Analyst",
      status: false,
    },
    {
      text: "Quality & Assurence",
      status: false,
    },
    {
      text: "Prototyping",
      status: false,
    },
    {
      text: "UX/UI Design",
      status: false,
    },
  ];

  const items = departments.map((item: IDepartments) => {
    if (item.status) {
      return (
        <div className={classes.activeItem} key={item.text}>
          {item.text}
        </div>
      );
    } else {
      return (
        <div className={classes.item} key={item.text}>
          {item.text}
        </div>
      );
    }
  });

  return (
    <div className={classes.form}>
      <div className={classes.header}>HIRE US</div>
      <div className={classes.title}>
        Let’s make something <br /> amazing together !
      </div>
      <div className={classes.headerDevs}>I’m interested in ...</div>
      <div>{items}</div>
      <div className={classes.inputView}>
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Your Email" />
        <input type="text" placeholder="Your Message" />

      </div>
      <button>
          <div className={classes.buttonText}>Send Message</div>
        </button>
    </div>
  );
};

export default FormInfo;
