import React, { Component} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import UserPage from "./../containers/UserPage";
import StreamPage from "./StreamPage/StreamPage";
import ComparePage from "./ComparePage/ComparePage";
import FavoritePage from "./FavoritePage/FavoritePage";
import DataView from "./../containers/DataView";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/user/search" component={UserPage}/>
          <Route path="/user/search/*/" component={DataView}/>
          <Route exact path="/user/stream" component={StreamPage}/>
          <Route exact path="/user/compare" component={ComparePage}/>
          <Route exact path="/user/favorite" component={FavoritePage}/>
        </Switch>
      </Router>
    )
  }
};

export default App;
