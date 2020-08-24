import React, { FunctionComponent } from "react";
import "./style.scss";

const Header: FunctionComponent = (props) => {
  return (
    <div className="header">
      <div className="header__content">{props.children}</div>
    </div>
  );
};

export default Header;
