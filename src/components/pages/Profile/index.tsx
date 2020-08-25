import React, { FunctionComponent } from "react";

interface Props {}

const Profile: FunctionComponent<Props> = (props) => {
  return (
    <section className="profile">
      <h2 className="profile__heading">test</h2>
      <div className="profile__content"></div>
    </section>
  );
};

export default Profile;
