import React from "react";
import Search from "./../Search/Search";
import "./Navbar.css";

const Navbar = (props) => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <Search {...props}/>
      </div>
      </nav>
      // <nav className="navbar navbar-top navbar-dark bg-dark" id="nav">
      //   <div id="logo-section">
      //     <a className="navbar-brand"><img src="/images/owlogo.svg" className="logo" alt="owlogo"/></a>
      //     <h2>OVERWATCH STATS</h2>
      //     <div className="navbar">
      //       <ul className="nav nav-pills">
      //         <li className="nav-item">
      //           <a className="nav-link active" href="/">HOME</a>
      //         </li>
      //         <li className="nav-item">
      //           <a className="nav-link" href="/stream">STREAM</a>
      //         </li>
      //         <li className="nav-item">
      //           <a className="nav-link" href="/compare">COMPARE</a>
      //         </li>
      //       </ul>
      //     </div>
      //     {props.renderLoadingGif}
      //   </div>
      //   <Search {...props}/>
      // </nav>
  )
};

export default Navbar;
