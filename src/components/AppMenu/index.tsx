import React, { FunctionComponent } from "react";
import "./style.scss";

interface Props {
  top?: JSX.Element;
}

const AppMenu: FunctionComponent<Props> = (props) => {
  return (
    <div className="app-menu">
      {props.top && <div className="app-menu__top">{props.top}</div>}
      <div className="app-menu__content">{props.children}</div>
    </div>
  );
};

export default AppMenu;
