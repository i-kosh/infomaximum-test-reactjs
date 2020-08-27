import React, { FunctionComponent } from "react";
import InputPassword, { Props as InputPorops } from "./InputPassword";
import { WrappedFieldProps } from "redux-form";

export interface Props extends InputPorops, WrappedFieldProps {
  shouldAlwaysValidate?: boolean;
}

const InputReduxForm: FunctionComponent<Props> = (props) => {
  const { input, meta, shouldAlwaysValidate, ...restProps } = props;

  return (
    <InputPassword
      {...restProps}
      {...input}
      err={shouldAlwaysValidate ? meta.error : meta.touched && meta.error}
    />
  );
};

export default InputReduxForm;
