import React, { FunctionComponent, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import classNames from "classnames";
import AppHeader from "../../Header";
import MenuBtn from "../../MenuButton";
import AppMenu from "../../AppMenu";
import NavList from "../../NavList";
import NavListItem from "../../NavListItem";
import "./style.scss";
import procesetText from "./proceset.svg";
import userIcon from "./man.svg";
import dataIcon from "./cheez.svg";
import { useSelector } from "react-redux";
import { selectUser } from "../../../store/userSlice";

const DefaultLayout: FunctionComponent = (props) => {
  const user = useSelector(selectUser);
  const userProfile = user.profile;
  const [isModalOpened, setIsModalOpened] = useState(false);

  // Закрывает меню при смене пути
  const location = useLocation();
  useEffect(() => {
    setIsModalOpened(false);
    const document = window.document.body;
    document.style.overflow = "";
  }, [location.pathname]);

  const toggleMenu = () => {
    const isOpened = !isModalOpened;
    const document = window.document.body;
    setIsModalOpened(isOpened);

    if (isOpened) {
      document.style.overflow = "hidden";
    } else {
      document.style.overflow = "";
    }
  };

  const onMenuBtnClick = () => {
    toggleMenu();
  };

  const onBackdropClick = () => {
    toggleMenu();
  };

  const backdropClasses = classNames({
    "modal-backdrop": true,
    "modal-backdrop--hidden": !isModalOpened,
  });

  const menuClasses = classNames({
    "default-layout__menu": true,
    "default-layout__menu--hidden": !isModalOpened,
  });

  const AppMenuTop = (
    <div className="default-layout__app-menu-top">
      <MenuBtn title="Закрыть меню" onClick={onMenuBtnClick} color="#ffffff">
        <img src={procesetText} alt="proceset" />
      </MenuBtn>
    </div>
  );

  return (
    <div className="default-layout">
      <header className="default-layout__header">
        <AppHeader>
          <MenuBtn onClick={onMenuBtnClick} color="#6879BB">
            Меню
          </MenuBtn>
        </AppHeader>
        <div className={menuClasses}>
          <AppMenu top={AppMenuTop}>
            <nav>
              <NavList>
                <NavListItem
                  to="/profile"
                  exact
                  prepend={
                    <div style={{ height: "100%", width: "100%" }}>
                      <img src={userIcon} alt="" />
                    </div>
                  }
                >
                  {userProfile ? userProfile.firstName : "Пользователь"}
                </NavListItem>
                <NavListItem
                  exact
                  prepend={
                    <div style={{ height: "100%", width: "100%" }}>
                      <img src={dataIcon} alt="" />
                    </div>
                  }
                  to="/"
                >
                  Список процессов
                </NavListItem>
              </NavList>
            </nav>
          </AppMenu>
        </div>
      </header>
      <main className="default-layout__content">{props.children}</main>

      <div onClick={onBackdropClick} className={backdropClasses}></div>
    </div>
  );
};

export default DefaultLayout;
