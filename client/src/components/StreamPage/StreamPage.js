import React, { Component } from "react";
import Navbar from "./../UserPage/Navbar/Navbar";
import StreamContainer from "./StreamContainer/StreamContainer";
import axios from "axios";

class StreamPage extends Component {
  state = {
    result: [],
    metaResult: [],
    search: ""
  }

  componentDidMount() {
    this.getTwitchData();
    this.getTwitchMetaData();
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  }

  getTwitchData = () => {
    axios.get("https://api.twitch.tv/helix/streams?first=20&game_id=488552", {
      headers: {
        "Client-ID": "jagnjey4vbrrxhw18toyzzfooz7qc5"
      }
    }).then(({data: { data }}) => {
      this.setState({result: data});
    }).catch((error) => {
      console.log(error);
    });
  }

  getTwitchMetaData = () => {
    axios.get("https://api.twitch.tv/helix/streams/metadata?first=20&game_id=488552", {
      headers: {
        "Client-ID": "jagnjey4vbrrxhw18toyzzfooz7qc5"
      }
    }).then(({data: { data }}) => {
      this.setState({metaResult: data});
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <Navbar/>
        <StreamContainer result={this.state.result} metaResult={this.state.metaResult} search={this.state.search} handleInputChange={this.handleInputChange}/>
      </div>
    )
  }
}

export default StreamPage;
