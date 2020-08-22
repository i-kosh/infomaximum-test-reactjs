import React, { Component } from "react";
import classNames from "classnames";
import "./style.scss";

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  err?: boolean | string;
  append?: JSX.Element;
}

export default class Input extends Component<Props> {
  render() {
    const { err, append, ...otherProps } = this.props;

    const rootClasses = classNames({
      "input-wrap": true,
    });

    const inputClasses = classNames({
      input: true,
      "input--error": !!err,
      "input--append": !!append,
    });

    return (
      <div className={rootClasses}>
        <input className={inputClasses} {...otherProps} />

        {!!append && <div className="input__append">{append}</div>}
      </div>
    );
  }
}
