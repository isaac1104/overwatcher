import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
import Search from "./../components/Search/Search";
import { connect } from "react-redux";
import * as actions from "./../actions";
import { Redirect } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {

    renderLoadingGif = () => {
      if (this.props.statsData.renderLoading) {
        return (
          <img src="/images/misc/loading.gif" className="img-responsive loading" alt="loading"/>
        )
      } else {
        return (
          <div></div>
        )
      }
    }

    renderDataView = () => {
      if (this.props.statsData.playerFound) {
        return (
          <Redirect to={`/user/search/${this.props.form.battletag.values.battletag}`}/>
        )
      } else if (this.props.statsData.playerFound !== "" && !this.props.statsData.playerFound) {
        return (
          <Redirect to={`/user/search/notfound`}/>
        )
      }
    }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/user/search"><img src="/images/misc/owlogo.svg" className="logo" alt="logo"/>OVERWATCHER</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href="/user/search">
                  <Button animated basic inverted color="grey" size="mini">
                    <Button.Content visible>HOME</Button.Content>
                    <Button.Content hidden>
                      <Icon name="home"/>
                    </Button.Content>
                  </Button>
                </a>
              </li>
              <li className="nav-item">
                <a href="/user/favorite">
                  <Button animated basic inverted color="grey" size="mini">
                    <Button.Content visible>FAVORITE</Button.Content>
                    <Button.Content hidden>
                      <Icon name="star"/>
                    </Button.Content>
                  </Button>
                </a>
              </li>
              <li className="nav-item">
                <a href="/user/stream">
                  <Button animated basic inverted color="grey" size="mini">
                    <Button.Content visible>STREAM</Button.Content>
                    <Button.Content hidden>
                      <Icon name="video play"/>
                    </Button.Content>
                  </Button>
                </a>
              </li>
              <li className="nav-item">
                <a href="/user/compare">
                  <Button animated basic inverted color="grey" size="mini">
                    <Button.Content visible>COMPARE</Button.Content>
                    <Button.Content hidden>
                      <Icon name="users"/>
                    </Button.Content>
                  </Button>
                </a>
              </li>
              <li className="nav-item">
                {this.renderLoadingGif()}
              </li>
            </ul>
            <Search
              getStatsData={this.props.getStatsData}
              battletag={this.props.form}
              initStatsFetch={this.props.initStatsFetch}
            />
          </div>
        </nav>
        {this.renderDataView()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    statsData: state.statsData,
    user: state.user,
    form: state.form
  }
}

export default connect(mapStateToProps, actions)(Navbar);
