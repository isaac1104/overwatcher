import React, {Component} from "react";
import Header from "./Header";
import API from "./../utils/API";

class App extends Component {
  state = {
    value: "",
    battleTag: "",
    region:""
  }

  componentDidMount() {
    this.setState({battleTag: ""});
  }

  handleInputChange = (event) => {
    this.setState({battleTag: event.target.value});
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.battleTag !== "") {
      API.getStatData(this.state.battleTag).then((res) => {
        console.log(res.data);
      }).catch((err) => {
        console.log(err);
      });
    }
  }

    render() {
      return (
        <div className="container-fluid">
          <Header battleTag={this.state.battleTag} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit}/>
        </div>
      )
    }
  };

  export default App;
