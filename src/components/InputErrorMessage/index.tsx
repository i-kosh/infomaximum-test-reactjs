import React, { FunctionComponent } from "react";
import Input, { Props as InputProps } from "../Input";
import "./style.scss";

export interface Props extends InputProps {}

const InputErrorMessage: FunctionComponent<Props> = (props) => {
  return (
    <div className="input-error">
      <Input {...props} />
      {typeof props.err === "string" && (
        <p className="input-error__msg">{props.err}</p>
      )}
    </div>
  );
};

export default InputErrorMessage;
