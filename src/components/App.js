import React, {Component} from "react";
import Header from "./Header";

class App extends Component {
  state = {
    value: "",
    battleTag: ""
  }

  componentDidMount() {
    this.setState({battleTag: ""});
  }

  handleInputChange = (event) => {
    this.setState({battleTag: event.target.value});
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return(
      <div className="container-fluid">
        <Header battleTag={this.state.battleTag} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit}/>
      </div>
    )
  }
};

export default App;
