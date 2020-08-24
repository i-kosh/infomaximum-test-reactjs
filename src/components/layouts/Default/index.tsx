import React, { FunctionComponent, useState } from "react";
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

interface State {
  isModalOpened: boolean;
}

const DefaultLayout: FunctionComponent = (props) => {
  const [state, setState] = useState<State>({ isModalOpened: false });

  const toggleMenu = () => {
    const isModalOpened = !state.isModalOpened;
    const document = window.document.body;
    setState({ isModalOpened });

    if (isModalOpened) {
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
    "modal-backdrop--hidden": !state.isModalOpened,
  });

  const menuClasses = classNames({
    "default-layout__menu": true,
    "default-layout__menu--hidden": !state.isModalOpened,
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
                  to="/login"
                  prepend={
                    <div style={{ height: "100%", width: "100%" }}>
                      <img src={userIcon} alt="" />
                    </div>
                  }
                >
                  Username
                </NavListItem>
                <NavListItem
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
