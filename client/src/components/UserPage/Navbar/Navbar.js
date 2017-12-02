import React from "react";
import Search from "./../Search/Search";
import "./Navbar.css";

const Navbar = (props) => {

  const renderSearch = () => {
    if (props.page === "search") {
      return (
        <Search {...props}/>
      )
    } else {
      return (
        <button className="btn btn-outline-danger btn-lg"><a href="/logout">logout</a></button>
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
      <a className="navbar-brand" href="/user/search"><img src="/images/misc/owlogo.svg" className="logo" alt="logo"/>OVERWATCH STATS</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/user/search">SEARCH</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/user/stream">STREAM</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/user/compare">COMPARE</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/user/tournament">TOURNAMENT</a>
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
