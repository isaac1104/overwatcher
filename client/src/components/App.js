import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Home/Home";
import UserPage from "./UserPage/UserPage";

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/user" component={UserPage}/>
      </div>
    </Router>
  )
};

export default App;
