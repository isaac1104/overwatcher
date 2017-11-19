import React from "react";
import Search from "./../Search/Search";
import "./Navbar.css";

const Navbar = (props) => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/user"><img src="/images/owlogo.svg" className="logo" alt="logo"/>OVERWATCH STATS</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/user">HOME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/user/stream">STREAM</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/user/compare">COMPARE</a>
          </li>
          <li className="nav-item">
            {props.renderLoadingGif}
          </li>
        </ul>
        <form onSubmit={props.handleFormSubmit} className="form-inline my-2 my-lg-0">
          <Search {...props}/>
        </form>
      </div>
      </nav>
  )
};

export default Navbar;
