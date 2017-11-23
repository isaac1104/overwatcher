import React, { Component } from "react";
import Navbar from "./../UserPage/Navbar/Navbar";
import axios from "axios";

class StreamPage extends Component {

  componentDidMount() {
    this.getTwitchData();
  }

  getTwitchData = () => {
    axios.get("https://api.twitch.tv/helix/streams?first=20&game_id=488552", {
      headers: {
        "Client-ID": "jagnjey4vbrrxhw18toyzzfooz7qc5"
      }
    }).then((response) => {
      console.log(response.data.data);
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <Navbar/>
        <h1>STREAM PAGE COMING SOON...</h1>
      </div>
    )
  }
}

export default StreamPage;
