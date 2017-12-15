import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./../containers/Navbar";
import UserPage from "./../containers/UserPage";
import StreamPage from "./StreamPage/StreamPage";
import ComparePage from "./../containers/ComparePage";
import PlayerNotFound from "./PlayerNotFound/PlayerNotFound";
import DataView from "./../containers/DataView";
import { connect } from "react-redux";
import * as actions from "./../actions";

class App extends Component {

  componentDidMount() {
    this.props.fetchSignedInBattleTag();
  }

  renderNavbar = () => {
    if (window.location.href === `${window.location.origin}/` || window.location.href === `${window.location.origin}/login`) {
      return <div></div>
    } else {
      return <Navbar/>
    }
  }

  render() {
    return (
      <Router>
        <div>
          {this.renderNavbar()}
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Home}/>
          <Route exact path="/user/search" component={UserPage}/>
          <Route exact path="/user/notfound" component={PlayerNotFound}/>
          <Route exact path="/user/search/:player" component={DataView}/>
          <Route exact path="/user/stream" component={StreamPage}/>
          <Route exact path="/user/compare" component={ComparePage}/>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user }
}

export default connect(mapStateToProps, actions)(App);
