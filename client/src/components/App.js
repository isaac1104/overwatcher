import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./../containers/Navbar";
import UserPage from "./../containers/UserPage";
import StreamPage from "./StreamPage/StreamPage";
import ComparePage from "./ComparePage/ComparePage";
import FavoritePage from "./FavoritePage/FavoritePage";
import DataView from "./../containers/DataView";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/user/search" component={UserPage}/>
        <Route exact path="/user/search/:player" component={DataView}/>
        <Route exact path="/user/stream" component={StreamPage}/>
        <Route exact path="/user/compare" component={ComparePage}/>
        <Route exact path="/user/favorite" component={FavoritePage}/>
      </div>
    </Router>
  );
}

export default App;
