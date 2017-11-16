import React from "react";
import LoginBtn from "./../UserPage/LoginBtn/LoginBtn";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-screen container-fluid">
      <div className="text-center home-screen-content">
        <h1>Welcome to <img src="/images/owlogo.svg" alt="ow-logo"/>Stats</h1>
        <h3>Sign in with your Battlenet account to continue</h3>
        <LoginBtn/>
      </div>
    </div>
  )
};

export default Home;
