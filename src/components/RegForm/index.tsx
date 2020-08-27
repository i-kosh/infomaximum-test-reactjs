import React, { FunctionComponent } from "react";
import InputRF from "../InputReduxForm";
import InputPasswordRF from "../InputPasswordReduxForm";
import Button from "../Button";
import { reduxForm, InjectedFormProps, FormErrors, Field } from "redux-form";
import { emailValidate, passwordValidate } from "../../utils/validators";

interface FormData {
  firstName?: string;
  secondName?: string;
  email?: string;
  password?: string;
  passwordCheck?: string;
}

const validate = (values: Readonly<FormData>) => {
  const errors: FormErrors<FormData> = {};

  if (!values.firstName) {
    errors.firstName = "Введите имя";
  }

  if (!values.secondName) {
    errors.secondName = "Введите фамилию";
  }

  const emailValidateResult = emailValidate(values.email);
  if (emailValidateResult != null) {
    errors.email = emailValidateResult;
  }

  const passwordValidateResult = passwordValidate(values.password);
  if (passwordValidateResult != null) {
    errors.password = passwordValidateResult;
  }

  if (values.password && !values.passwordCheck) {
    errors.passwordCheck = "Повторите пароль";
  } else if (values.passwordCheck !== values.password) {
    errors.passwordCheck =
      "Пароли не совпадают, проверьте и попробуйте еще раз";
  }

  return errors;
};

const RegForm: FunctionComponent<InjectedFormProps<FormData, {}, string>> = (
  props
) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: "12px" }}>
        <Field name="firstName" component={InputRF} placeholder="Имя" />
      </div>
      <div style={{ marginBottom: "12px" }}>
        <Field name="secondName" component={InputRF} placeholder="Фамилиия" />
      </div>
      <div style={{ marginBottom: "12px" }}>
        <Field
          name="email"
          type="email"
          component={InputRF}
          autoComplete="username"
          placeholder="Электронная почта"
        />
      </div>
      <div style={{ marginBottom: "12px" }}>
        <Field
          name="password"
          component={InputPasswordRF}
          autoComplete="new-password"
          placeholder="Введите пароль"
        />
      </div>
      <div style={{ marginBottom: "12px" }}>
        <Field
          name="passwordCheck"
          component={InputPasswordRF}
          autoComplete="new-password"
          placeholder="Повторите пароль"
        />
      </div>
      <div style={{ marginBottom: "24px" }}>
        <Button>Применить и войти</Button>
      </div>
    </form>
  );
};
const createRegForm = reduxForm<FormData>({
  form: "reg",
  validate,
  destroyOnUnmount: false,
});
const RegFormDecorated = createRegForm(RegForm);
export default RegFormDecorated;
