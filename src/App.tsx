import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DefaultLayout from "./components/layouts/Default";
import AuthLayout from "./components/layouts/AuthLayout";

// Pages
import LoginOrRegister from "./components/pages/LoginOrRegister";
import ProcessList from "./components/pages/ProcessList";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login">
            <AuthLayout>
              <LoginOrRegister isLogin={true} />
            </AuthLayout>
          </Route>
          <Route exact path="/register">
            <AuthLayout>
              <LoginOrRegister isLogin={false} />
            </AuthLayout>
          </Route>
          <Route exact path="/profile">
            <DefaultLayout>
              <Profile />
            </DefaultLayout>
          </Route>
          <Route exact path="/">
            <DefaultLayout>
              <ProcessList />
            </DefaultLayout>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
