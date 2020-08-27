import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import DefaultLayout from "./components/layouts/Default";
import AuthLayout from "./components/layouts/AuthLayout";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUserProfileAsync, selectUser } from "./store/userSlice";
// Pages
import LoginOrRegister from "./components/pages/LoginOrRegister";
import ProcessList from "./components/pages/ProcessList";
import Profile from "./components/pages/Profile";
import Loading from "./components/pages/Loading";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const RedirectToLogin = () => {
    return <Redirect to="/login" />;
  };

  const RedirectToRoot = () => {
    return <Redirect to="/" />;
  };

  const isUserNotAutorized = !!(!user.isLogged && user.token);

  if (isUserNotAutorized) {
    dispatch(setCurrentUserProfileAsync());
  }

  return (
    <Router>
      <div className="App">
        <Loading hidden={!isUserNotAutorized} />
        {!isUserNotAutorized && (
          <Switch>
            <Route exact path="/login">
              {user.isLogged ? (
                RedirectToRoot
              ) : (
                <AuthLayout>
                  <LoginOrRegister isLogin={true} />
                </AuthLayout>
              )}
            </Route>
            <Route exact path="/register">
              {user.isLogged ? (
                RedirectToRoot
              ) : (
                <AuthLayout>
                  <LoginOrRegister isLogin={false} />
                </AuthLayout>
              )}
            </Route>
            <Route exact path="/profile">
              {!user.isLogged ? (
                RedirectToLogin
              ) : (
                <DefaultLayout>
                  <Profile />
                </DefaultLayout>
              )}
            </Route>
            <Route exact path="/">
              {!user.isLogged ? (
                RedirectToLogin
              ) : (
                <DefaultLayout>
                  <ProcessList />
                </DefaultLayout>
              )}
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        )}
      </div>
    </Router>
  );
}

export default App;
