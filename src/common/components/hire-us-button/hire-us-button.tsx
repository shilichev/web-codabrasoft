import React from "react";
import "./button.css";

interface IHireButtonProps {
  children: string;
}

const HireButton = ({ children }: IHireButtonProps) => {
  return (
    <button className="buttonHire">
      <div className="buttonHireText">{children}</div>
    </button>
  );
};

export default HireButton;
