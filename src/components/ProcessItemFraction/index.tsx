import React, { FunctionComponent } from "react";
import classNames from "classnames";
import "./style.scss";

export interface Props {
  append?: JSX.Element;
  sub?: string;
  large?: boolean;
}

const ItemFraction: FunctionComponent<Props> = (props) => {
  const rootClass = classNames({
    "process-fr": true,
    "process-fr--append": !!props.append,
    "process-fr--large": !!props.large,
  });

  return (
    <div className={rootClass}>
      <div className="process-fr__content">
        {props.append && (
          <div className="process-fr__append">{props.append}</div>
        )}

        <span className="process-fr__main">{props.children}</span>
      </div>

      {props.sub && <span className="process-fr__sub">{props.sub}</span>}
    </div>
  );
};

export default ItemFraction;
