import React, { Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home/Home";
import UserPage from "./UserPage/UserPage";
import StreamPage from "./../containers/StreamPage";
import ComparePage from "./ComparePage/ComparePage";
import TournamentPage from "./TournamentPage/TournamentPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/user/search" component={UserPage}/>
          <Route exact path="/user/stream" component={StreamPage}/>
          <Route exact path="/user/compare" component={ComparePage}/>
          <Route exact path="/user/tournament" component={TournamentPage}/>
        </div>
      </Router>
    )
  }
};

export default App;
