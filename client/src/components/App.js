import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Home/Home";
import UserPage from "./UserPage/UserPage";
import StreamPage from "./StreamPage/StreamPage";

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/user" component={UserPage}/>
        <Route exact path="/stream" component={StreamPage}/>
      </div>
    </Router>
  )
};

export default App;
