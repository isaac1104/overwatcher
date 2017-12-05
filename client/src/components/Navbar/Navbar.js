import React from "react";
import { Button, Icon } from "semantic-ui-react";
import Search from "./../UserPage/Search/Search";
import "./Navbar.css";

const Navbar = (props) => {

  const renderSearch = () => {
    if (props.page === "search") {
      return (
        <Search {...props}/>
      )
    } else {
      return (
        <a href="/logout">
          <Button animated color="blue" size="small">
            <Button.Content visible>logout</Button.Content>
            <Button.Content hidden>
              <Icon name="log out"/>
            </Button.Content>
          </Button>
        </a>
      )
    }
  }

  const renderLoadingGif = () => {
    if (props.renderLoading) {
      return (
        <img src="/images/misc/loading.gif" className="img-responsive loading" alt="loading"/>
      )
    } else {
      return (
        <div></div>
      )
    }
  }

  return(
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
                <Button.Content visible>SEARCH</Button.Content>
                <Button.Content hidden>
                  <Icon name="search"/>
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
            {renderLoadingGif()}
          </li>
        </ul>
        {renderSearch()}
      </div>
    </nav>
  )
};

export default Navbar;
