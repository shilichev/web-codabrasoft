import React from "react";
import classes from "./dev.module.css"
import {IDev} from "./../developments"



const Dev  = ({title, description, image}:IDev):JSX.Element =>{


    
    return(
        <div className= {classes.container}>
            <img src={image} alt="" />
            <div className= {classes.title}>{title}</div>
            <div className= {classes.text}>{description}</div>
        </div>
    )
}

export default Dev