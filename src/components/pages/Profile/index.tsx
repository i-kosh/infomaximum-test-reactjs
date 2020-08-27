import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, logOut, editUserAsync } from "../../../store/userSlice";
import Button from "../../Button";
import ProfileForm, { FormData as ProfileFormData } from "../../ProfileEdit";
import "./style.scss";
import { isDirty, isInvalid } from "redux-form";

interface Props {}

const Profile: FunctionComponent<Props> = (props) => {
  const dispatch = useDispatch();
  const isFormDirty = useSelector(isDirty("profileEdit"));
  const isFormIvalid = useSelector(isInvalid("profileEdit"));
  const submitButtonDisabled = !isFormDirty || isFormIvalid;
  const user = useSelector(selectUser);
  const userProfile = user.profile;
  const formInitialValues: Partial<ProfileFormData> = {
    email: userProfile?.email,
    firstName: userProfile?.firstName,
    secondName: userProfile?.secondName,
  };

  const fullUserName = userProfile
    ? `${userProfile.firstName} ${userProfile.secondName}. `
    : "";

  const Error = () => {
    return (
      <p className="profile__error">{user.errors ? user.errors[0] : ""}</p>
    );
  };

  return (
    <section className="profile">
      <div className="profile__top">
        <h2 className="profile__heading">{fullUserName}Редактирование</h2>
        <div className="profile__save-btn">
          <Button
            disabled={submitButtonDisabled}
            form="profileEditForm"
            type="submit"
          >
            Сохранить
          </Button>
        </div>
      </div>
      <div className="profile__content">
        <ProfileForm
          onSubmit={(val) => {
            dispatch(
              editUserAsync({
                email: val.email!,
                firstName: val.firstName!,
                secondName: val.secondName!,
                password: val.password || undefined,
              })
            );
          }}
          initialValues={formInitialValues}
        />
        {user.errors && <Error />}
      </div>
      <Button
        onClick={() => {
          dispatch(logOut());
        }}
        type="button"
        style={{ width: "120px", marginTop: "24px" }}
      >
        Выйти
      </Button>
    </section>
  );
};

export default Profile;
