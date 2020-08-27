import React, { FunctionComponent } from "react";
import classnames from "classnames";
import "./style.scss";

interface Props {
  hidden: boolean;
}

const Profile: FunctionComponent<Props> = (props) => {
  const rootClasses = classnames({
    "loading-screen": true,
    "loading-screen--hidden": props.hidden,
  });

  return (
    <section className={rootClasses}>
      <span className="loading-screen__dots">...</span>
    </section>
  );
};

export default Profile;
