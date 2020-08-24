import React, { FunctionComponent } from "react";
import Layout from "../../layouts/Default";

interface Props {}

const LoginOrRegister: FunctionComponent<Props> = (props) => {
  return (
    <Layout>
      <section className="process-list">
        <h2 className="process-list__heading">test</h2>
        <div className="process-list__content"></div>
      </section>
    </Layout>
  );
};

export default LoginOrRegister;
