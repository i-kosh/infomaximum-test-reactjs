import React, { Component } from "react";
import "./style.scss";
import InputWE, { Props as InputWEProps } from "../InputErrorMessage";
import eyeCLose from "./eye-close.svg";
import eyeOpen from "./eye-open.svg";

interface Props extends InputWEProps {}
interface State {
  isPassVisible: boolean;
}

export default class InputPassword extends Component<Props, State> {
  state = {
    isPassVisible: false,
  };

  appendClickHandler() {
    this.setState({
      isPassVisible: !this.state.isPassVisible,
    });
  }

  render() {
    const appendHint = this.state.isPassVisible
      ? "Скрыть пароль"
      : "Показать пароль";
    const eyeComponent = (
      <div onClick={this.appendClickHandler.bind(this)} className="append">
        <img
          src={this.state.isPassVisible ? eyeOpen : eyeCLose}
          alt={appendHint}
          title={appendHint}
        />
      </div>
    );

    return (
      <div className="input-password">
        <InputWE
          {...this.props}
          append={eyeComponent}
          type={this.state.isPassVisible ? "text" : "password"}
        />
      </div>
    );
  }
}
