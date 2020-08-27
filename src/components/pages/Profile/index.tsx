import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, logOut } from "../../../store/userSlice";
import Button from "../../Button";
import ProfileForm from "../../ProfileEdit";
import "./style.scss";

interface Props {}

const Profile: FunctionComponent<Props> = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const userProfile = user.profile;

  const fullUserName = userProfile
    ? `${userProfile.firstName} ${userProfile.secondName}. `
    : "";

  return (
    <section className="profile">
      <div className="profile__top">
        <h2 className="profile__heading">{fullUserName}Редактирование</h2>
        <div className="profile__save-btn">
          <Button>Сохранить</Button>
        </div>
      </div>
      <div className="profile__content">
        <ProfileForm />
      </div>
      <Button
        onClick={() => {
          dispatch(logOut());
        }}
        type="button"
        style={{ width: "fit-content", marginTop: "24px" }}
      >
        Выйти
      </Button>
    </section>
  );
};

export default Profile;
