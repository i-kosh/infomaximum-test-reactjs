import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUser,
  logOut,
  editUserAsync,
  // toggleProfileChangesSaved,
} from "../../../store/userSlice";
import Button from "../../Button";
import ProfileForm, { FormData as ProfileFormData } from "../../ProfileEdit";
import "./style.scss";
import { isInvalid, getFormValues } from "redux-form";

const Profile: FunctionComponent = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const userProfile = user.profile;

  const isFormIvalid = useSelector(isInvalid("profileEdit"));
  const formValues: Partial<ProfileFormData> = useSelector(
    getFormValues("profileEdit")
  );

  const isFormDirty = () => {
    const { email, firstName, secondName } = user.profile!;
    const currentProfile = JSON.stringify({
      email,
      firstName,
      secondName,
    });
    const currentFormData = JSON.stringify(formValues);

    return currentProfile !== currentFormData;
  };

  const submitButtonDisabled = !isFormDirty() || isFormIvalid;

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
