import React, { FunctionComponent } from "react";
import InputWE from "../InputErrorMessage";
import InputPassword from "../InputPassword";
import "./style.scss";

const ProfileEdit: FunctionComponent = (props) => {
  return (
    <div className="profile-edit">
      <form>
        <label className="profile-edit__label">
          <span className="profile-edit__label-text">Имя</span>
          <div className="profile-edit__input">
            <InputWE placeholder="Не задано" />
          </div>
        </label>
        <label className="profile-edit__label">
          <span className="profile-edit__label-text">Фамилия</span>
          <div className="profile-edit__input">
            <InputWE placeholder="Не задано" />
          </div>
        </label>
        <label className="profile-edit__label">
          <span className="profile-edit__label-text">Электронная почта</span>
          <div className="profile-edit__input">
            <InputWE
              autoComplete="username"
              type="email"
              placeholder="Не задано"
            />
          </div>
        </label>
        <label className="profile-edit__label">
          <span className="profile-edit__label-text">Новый пароль</span>
          <div className="profile-edit__input">
            <InputPassword
              autoComplete="new-password"
              placeholder="Не задано"
            />
          </div>
        </label>
        <label className="profile-edit__label">
          <span className="profile-edit__label-text">Повторите пароль</span>
          <div className="profile-edit__input">
            <InputPassword
              autoComplete="new-password"
              placeholder="Не задано"
            />
          </div>
        </label>
      </form>
    </div>
  );
};

export default ProfileEdit;
