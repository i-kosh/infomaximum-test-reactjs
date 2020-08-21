import React, { Component } from "react";
import Import from "../Input";
import "./style.scss";

interface Props {
  error?: boolean | string;
  disabled?: boolean;
}

export default class index extends Component<Props> {
  render() {
    return (
      <div className="input-error">
        <Import err={!!this.props.error} disabled={this.props.disabled} />

        {typeof this.props.error === "string" && (
          <p className="input-error__msg">{this.props.error}</p>
        )}
      </div>
    );
  }
}
