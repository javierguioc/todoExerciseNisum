import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import React, { useState } from "react";

import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";

// Context
import TodoState from "./context/TodoState";


import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <TodoState>
      <Router>
        <Switch>
          <Route exact path="/firstPage" component={FirstPage} />
          <Route exact path="/secondPage" component={SecondPage} />
          <Route path="/" component={FirstPage} />
        </Switch>
      </Router>
    </TodoState>
  );
}

export default App;
