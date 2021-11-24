import React, { useEffect, useState } from "react";
import classes from "./form_info.module.css";
import Developments from "./childs/development";
import CommonTitle from "../../../../../common/components/title/title";

interface IDepartments {
  text: string;
  status: boolean;
}

const FormInfo = (): JSX.Element => {
  const [departments, setDepartments] = useState<IDepartments[]>([]);
  useEffect(() => {
    setDepartments([
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
    ]);
  }, []);

  useEffect(() => {}, [departments]);

  const selectDevelopment = (id: string) => {
    let newItem: IDepartments[] = departments.map((item) =>
      item.text == id ? { status: !item.status, text: id } : item
    );
    setDepartments(newItem);
  };

  return (
    <div className={classes.form}>
      <div className={classes.header}>HIRE US</div>
      <CommonTitle> Let’s make something amazing together !</CommonTitle>
      {/* <div className={classes.title}>
        Let’s make something <br /> amazing together !
      </div> */}
      <div className={classes.headerDevs}>I’m interested in ...</div>
      <div>
        {departments.map((item: IDepartments) => (
          <div
            className={item.status ? classes.activeItem : classes.item}
            key={item.text}
            onClick={() => selectDevelopment(item.text)}
          >
            {item.text}
          </div>
        ))}
      </div>
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
