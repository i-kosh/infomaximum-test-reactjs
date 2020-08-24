import React, { FunctionComponent } from "react";
import "./style.scss";

const NavList: FunctionComponent = (props) => {
  return <ul className="nav-list">{props.children}</ul>;
};

export default NavList;
