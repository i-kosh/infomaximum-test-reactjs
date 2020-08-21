import React, { FunctionComponent } from "react";
import "./style.scss";

export interface Props {
  disabled?: boolean;
}

const Button: FunctionComponent<Props> = (props) => {
  return (
    <button disabled={props.disabled} className="button">
      {props.children}
    </button>
  );
};

export default Button;
