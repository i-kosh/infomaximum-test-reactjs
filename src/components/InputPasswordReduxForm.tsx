import React, { FunctionComponent } from "react";
import InputPassword, { Props as InputPorops } from "./InputPassword";
import { WrappedFieldProps } from "redux-form";

export interface Props extends InputPorops, WrappedFieldProps {}

const InputReduxForm: FunctionComponent<Props> = (props) => {
  const { input, meta, ...restProps } = props;

  return (
    <InputPassword
      {...restProps}
      {...input}
      err={meta.submitFailed && meta.error}
    />
  );
};

export default InputReduxForm;
