import React, { FunctionComponent } from "react";
import InputWE from "../../InputErrorMessage";
import InputPassword from "../../InputPassword";
import Button from "../../Button";
import { Link } from "react-router-dom";
import errLogo from "./attention.svg";
import "./style.scss";

interface Props {
  isLogin: boolean;
}

const LoginOrRegister: FunctionComponent<Props> = (props) => {
  const Content = () => {
    if (props.isLogin) {
      return (
        <div>
          <div style={{ marginBottom: "12px" }}>
            <InputWE placeholder="Электронная почта" />
          </div>
          <div style={{ marginBottom: "24px" }}>
            <InputPassword placeholder="Пароль" />
          </div>
          <div style={{ marginBottom: "24px" }}>
            <Button>Войти в систему</Button>
          </div>
          <Link to="/register">Зарегистрироваться</Link>
        </div>
      );
    } else {
      return (
        <div>
          <div style={{ marginBottom: "12px" }}>
            <InputWE placeholder="Имя" />
          </div>{" "}
          <div style={{ marginBottom: "12px" }}>
            <InputWE placeholder="Фамилиия" />
          </div>{" "}
          <div style={{ marginBottom: "12px" }}>
            <InputWE placeholder="Электронная почта" />
          </div>
          <div style={{ marginBottom: "12px" }}>
            <InputPassword placeholder="Введите пароль" />
          </div>
          <div style={{ marginBottom: "12px" }}>
            <InputPassword placeholder="Повторите пароль" />
          </div>
          <div style={{ marginBottom: "24px" }}>
            <Button>Применить и войти</Button>
          </div>
          <div>
            <p>
              <span>Уже зарегистрированы? </span>
              <Link to="/login">Войти</Link>
            </p>
          </div>
        </div>
      );
    }
  };

  return (
    <section className="login-register">
      <h2 className="login-register__heading">test</h2>
      <div className="login-register__content">
        <Content />
      </div>
      <div className="login-register__error">
        <div className="login-register__error-icon">
          <img width="48" height="48" src={errLogo} alt="Внимание" />
        </div>
        <p>Сообщение об ошибке</p>
      </div>
    </section>
  );
};

export default LoginOrRegister;
