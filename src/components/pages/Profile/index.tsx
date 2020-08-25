import React, { FunctionComponent } from "react";
import Button from "../../Button";
import ProfileForm from "../../ProfileEdit";
import "./style.scss";

interface Props {}

const Profile: FunctionComponent<Props> = (props) => {
  return (
    <section className="profile">
      <div className="profile__top">
        <h2 className="profile__heading">Борис Годунов. Редактирование</h2>
        <div className="profile__save-btn">
          <Button>Сохранить</Button>
        </div>
      </div>
      <div className="profile__content">
        <ProfileForm />
      </div>
    </section>
  );
};

export default Profile;
