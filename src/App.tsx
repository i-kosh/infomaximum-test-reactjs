import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import LoginOrRegister from "./components/pages/LoginOrRegister";
import ProcessList from "./components/pages/ProcessList";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login">
            <LoginOrRegister isLogin={true} />
          </Route>
          <Route exact path="/register">
            <LoginOrRegister isLogin={false} />
          </Route>
          <Route exact path="/">
            <ProcessList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
