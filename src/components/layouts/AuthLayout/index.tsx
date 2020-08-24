import React, { FunctionComponent } from "react";
import "./style.scss";
import logo from "./logo.svg";

const AuthLayout: FunctionComponent = (props) => {
  return (
    <div className="auth-layout">
      <header className="auth-layout__header">
        <h1 className="auth-layout__h1">Processet</h1>
        <img
          className="auth-layout__img"
          width={150}
          height={47}
          src={logo}
          alt="Логотип Proceset"
        />
      </header>
      <main className="auth-layout__content">{props.children}</main>
    </div>
  );
};

export default AuthLayout;
