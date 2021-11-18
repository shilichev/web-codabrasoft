import React, { useEffect } from "react";
import "./title.css";

interface ITitleProps {
  children: string;
  inModal?: boolean;
  pirple?: string;
}
//<span className="pirple">{pirple}</span>)
const CommonTitle = ({ children, inModal = false, pirple }: ITitleProps) => {
  return (
    <div className="title">
      <span className="pirple">{pirple}</span>
      {children.replace(pirple as string, "")}
    </div>
  );
};

export default CommonTitle;
