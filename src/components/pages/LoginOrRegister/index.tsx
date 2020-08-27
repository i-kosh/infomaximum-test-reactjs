import React, { FunctionComponent, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import errLogo from "./attention.svg";
import "./style.scss";
import LoginForm from "../../LoginForm";
import RegForm from "../../RegForm";
import { useSelector, useDispatch } from "react-redux";
import { loginAsync, selectUser, resetErrors } from "../../../store/userSlice";

interface Props {
  isLogin: boolean;
}

const LoginOrRegister: FunctionComponent<Props> = (props) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // Сброс ошибок при смене пути (переключении формы)
  const location = useLocation();
  const [path] = useState(location.pathname);
  useEffect(() => {
    if (path !== location.pathname) {
      dispatch(resetErrors());
    }
  }, [dispatch, location.pathname, path]);

  const Content = () => {
    if (props.isLogin) {
      return (
        <div>
          <LoginForm
            onSubmit={(val) => {
              dispatch(
                loginAsync({
                  email: val.email!,
                  password: val.password!,
                })
              );
            }}
          />
          <Link to="/register">Зарегистрироваться</Link>
        </div>
      );
    } else {
      return (
        <div>
          <RegForm
            onSubmit={(val) => {
              console.log(val);
            }}
          />
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

  const Error = () => {
    return (
      <div className="login-register__error">
        <div className="login-register__error-icon">
          <img width="48" height="48" src={errLogo} alt="Внимание" />
        </div>
        <p>{user.errors ? user.errors[0] : ""}</p>
      </div>
    );
  };

  return (
    <section className="login-register">
      <div className="login-register__content">
        <h2
          className={`login-register__heading ${
            props.isLogin && "login-register__heading--hidden"
          }`}
        >
          {props.isLogin ? "Вход" : "Регистрация"}
        </h2>
        <Content />
      </div>
      {user.errors && <Error />}
    </section>
  );
};

export default LoginOrRegister;
