import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

export interface Props {
  prepend?: JSX.Element;
  to?: string;
}

const NavListItem: FunctionComponent<Props> = (props) => {
  return (
    <li className="nav-list-item">
      <NavLink
        className="nav-list-item__link"
        to={props.to || "/"}
        activeClassName="nav-list-item__link--active"
      >
        {props.prepend && (
          <div className="nav-list-item__prepend">{props.prepend}</div>
        )}
        <div className="nav-list-item__content">{props.children}</div>
      </NavLink>
    </li>
  );
};

export default NavListItem;
