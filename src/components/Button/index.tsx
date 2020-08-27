import React, { FunctionComponent } from "react";
import "./style.scss";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FunctionComponent<Props> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button {...restProps} className="button">
      {children}
    </button>
  );
};

export default Button;
