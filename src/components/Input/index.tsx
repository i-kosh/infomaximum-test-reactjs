import React, { Component } from "react";
import classNames from "classnames";
import "./style.scss";

export interface Props {
  err?: boolean | string;
  disabled?: boolean;
}

export interface State {
  value: any;
}

export default class Input extends Component<Props, State> {
  state: State = {
    value: undefined,
  };

  handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const rootClasses = classNames({
      input: true,
      "input--error": !!this.props.err,
    });

    return (
      <input
        className={rootClasses}
        disabled={this.props.disabled}
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
      />
    );
  }
}
