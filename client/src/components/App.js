import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Home/Home";
import UserPage from "./UserPage/UserPage";

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/user" component={UserPage}/>
      </div>
    </Router>
  )
};

export default App;
