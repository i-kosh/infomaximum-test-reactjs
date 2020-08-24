import React, { FunctionComponent } from "react";
import "./style.scss";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  color?: string;
}

const MenuButton: FunctionComponent<Props> = (props) => {
  const { color, children, ...restProps } = props;

  const Icon = () => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H4V4H0V0ZM6 6H10V10H6V6ZM10 0H6V4H10V0ZM12 0H16V4H12V0ZM4 6H0V10H4V6ZM12 6H16V10H12V6ZM4 12H0V16H4V12ZM6 12H10V16H6V12ZM16 12H12V16H16V12Z"
          fill="currentColor"
        />
      </svg>
    );
  };

  return (
    <button
      {...restProps}
      className="menu-btn"
      style={{ color: color || "#000" }}
    >
      <div className="menu-btn__icon">
        <Icon />
      </div>
      <span className="menu-btn__text">{children}</span>
    </button>
  );
};

export default MenuButton;
