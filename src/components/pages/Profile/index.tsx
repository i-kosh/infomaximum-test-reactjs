import React, { FunctionComponent } from "react";
import Layout from "../../layouts/Default";

interface Props {}

const Profile: FunctionComponent<Props> = (props) => {
  return (
    <Layout>
      <section className="profile">
        <h2 className="profile__heading">test</h2>
        <div className="profile__content"></div>
      </section>
    </Layout>
  );
};

export default Profile;
