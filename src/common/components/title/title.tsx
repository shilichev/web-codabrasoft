import React, { useEffect } from "react";
import "./title.css";

interface ITitleProps {
  children: string;
  inModal?: boolean;
  pirple?: string;
  width?: string;
}
//<span className="pirple">{pirple}</span>)
const CommonTitle = ({
  children,
  inModal = false,
  pirple,
  width,
}: ITitleProps) => {
  return (
    <div className="title" style={{ width: width ||  "var(--common-title-default-width)" }}>
      <span className="pirple">{pirple}</span>
      {children.replace(pirple as string, "")}
    </div>
  );
};

export default CommonTitle;
