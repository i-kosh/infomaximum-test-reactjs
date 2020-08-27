import React, { FunctionComponent } from "react";
import InputRF from "../InputReduxForm";
import InputPasswordRF from "../InputPasswordReduxForm";
import { reduxForm, InjectedFormProps, Field, FormErrors } from "redux-form";
import { emailValidate, passwordValidate } from "../../utils/validators";
import "./style.scss";

export interface FormData {
  firstName?: string;
  secondName?: string;
  email?: string;
  password?: string;
  passwordRepeat?: string;
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

  const passwordValidateResult = passwordValidate(values.password, false);
  if (passwordValidateResult != null) {
    errors.password = passwordValidateResult;
  }

  if (values.password && !values.passwordRepeat) {
    errors.passwordRepeat = "Повторите пароль";
  } else if (values.passwordRepeat !== values.password) {
    errors.passwordRepeat =
      "Пароли не совпадают, проверьте и попробуйте еще раз";
  }

  return errors;
};

const ProfileEdit: FunctionComponent<InjectedFormProps<FormData>> = (props) => {
  const { handleSubmit } = props;
  return (
    <div className="profile-edit">
      <form id="profileEditForm" noValidate onSubmit={handleSubmit}>
        <label className="profile-edit__label">
          <span className="profile-edit__label-text">Имя</span>
          <div className="profile-edit__input">
            <Field
              name="firstName"
              type="text"
              component={InputRF}
              placeholder="Не задано"
              props={{ shouldAlwaysValidate: true }}
            />
          </div>
        </label>
        <label className="profile-edit__label">
          <span className="profile-edit__label-text">Фамилия</span>
          <div className="profile-edit__input">
            <Field
              name="secondName"
              type="text"
              component={InputRF}
              placeholder="Не задано"
              props={{ shouldAlwaysValidate: true }}
            />
          </div>
        </label>
        <label className="profile-edit__label">
          <span className="profile-edit__label-text">Электронная почта</span>
          <div className="profile-edit__input">
            <Field
              name="email"
              type="email"
              autoComplete="username"
              component={InputRF}
              placeholder="Не задано"
              props={{ shouldAlwaysValidate: true }}
            />
          </div>
        </label>
        <label className="profile-edit__label">
          <span className="profile-edit__label-text">Новый пароль</span>
          <div className="profile-edit__input">
            <Field
              name="password"
              autoComplete="new-password"
              component={InputPasswordRF}
              placeholder="Не задано"
              props={{ shouldAlwaysValidate: true }}
            />
          </div>
        </label>
        <label className="profile-edit__label">
          <span className="profile-edit__label-text">Повторите пароль</span>
          <div className="profile-edit__input">
            <Field
              name="passwordRepeat"
              autoComplete="new-password"
              component={InputPasswordRF}
              placeholder="Не задано"
              props={{ shouldAlwaysValidate: true }}
            />
          </div>
        </label>
      </form>
    </div>
  );
};

const createProfileEditForm = reduxForm<FormData>({
  form: "profileEdit",
  validate,
});
const ProfileEditFormDecorated = createProfileEditForm(ProfileEdit);
export default ProfileEditFormDecorated;
