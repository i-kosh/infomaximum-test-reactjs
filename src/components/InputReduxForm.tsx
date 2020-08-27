import React, { FunctionComponent } from "react";
import InputWE, { Props as InputPorops } from "./InputErrorMessage";
import { WrappedFieldProps } from "redux-form";

export interface Props extends InputPorops, WrappedFieldProps {}

const InputReduxForm: FunctionComponent<Props> = (props) => {
  const { input, meta, ...restProps } = props;

  return (
    <InputWE {...restProps} {...input} err={meta.submitFailed && meta.error} />
  );
};

export default InputReduxForm;
