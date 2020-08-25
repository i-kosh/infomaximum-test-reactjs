import React, { FunctionComponent } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import "./style.scss";

export interface Props
  extends React.PropsWithoutRef<NavLinkProps>,
    React.RefAttributes<HTMLAnchorElement> {
  prepend?: JSX.Element;
}

const NavListItem: FunctionComponent<Props> = (props) => {
  const { prepend, children, ...otherProps } = props;

  return (
    <li className="nav-list-item">
      <NavLink
        className="nav-list-item__link"
        activeClassName="nav-list-item__link--active"
        {...otherProps}
      >
        {prepend && <div className="nav-list-item__prepend">{prepend}</div>}
        <div className="nav-list-item__content">{children}</div>
      </NavLink>
    </li>
  );
};

export default NavListItem;
