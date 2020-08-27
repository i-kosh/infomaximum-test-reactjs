import React, { FunctionComponent } from "react";
import InputRF from "../InputReduxForm";
import InputPasswordRF from "../InputPasswordReduxForm";
import Button from "../Button";
import { reduxForm, InjectedFormProps, Field, FormErrors } from "redux-form";
import { emailValidate } from "../../utils/validators";

interface FormData {
  email?: string;
  password?: string;
}

const validate = (values: Readonly<FormData>) => {
  const errors: FormErrors<FormData> = {};

  const emailValidateResult = emailValidate(values.email);
  if (emailValidateResult != null) {
    errors.email = emailValidateResult;
  }

  if (!values.password) {
    errors.password = "Введите пароль";
  }

  return errors;
};

const LoginForm: FunctionComponent<InjectedFormProps<FormData>> = (props) => {
  const { handleSubmit } = props;
  return (
    <form noValidate onSubmit={handleSubmit}>
      <div style={{ marginBottom: "12px" }}>
        <Field
          name="email"
          type="email"
          autoComplete="username"
          component={InputRF}
          placeholder="Электронная почта"
        />
      </div>
      <div style={{ marginBottom: "24px" }}>
        <Field
          name="password"
          autoComplete="current-password"
          placeholder="Пароль"
          component={InputPasswordRF}
        />
      </div>
      <div style={{ marginBottom: "24px" }}>
        <Button type="submit">Войти в систему</Button>
      </div>
    </form>
  );
};
const createLoginForm = reduxForm<FormData>({
  form: "login",
  validate,
  destroyOnUnmount: false,
});
const LoginFormDecorated = createLoginForm(LoginForm);
export default LoginFormDecorated;
