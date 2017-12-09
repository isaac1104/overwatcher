import React from "react";
import Logout from "./../Logout/Logout";
import { Button, Icon } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import "./Search.css";

class Search extends React.Component {

  submit = () => {
    this.props.initStatsFetch();
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <div className="search-div">
        <form onSubmit={handleSubmit(this.submit)} className="search-form">
          <Field
            name="battletag"
            component="input"
            type="text"
            placeholder="battletag-number"
            className="battletag-input"
            autoComplete="off"
          />
          <Button
            animated
            basic inverted color="grey"
            size="mini"
            onClick={() => this.props.getStatsData(this.props.battletag.battletag.values.battletag)}
            type="submit"
            disabled={pristine || submitting}>
            <Button.Content visible>SEARCH</Button.Content>
            <Button.Content hidden>
              <Icon name="search"/>
            </Button.Content>
          </Button>
        </form>
        <Logout/>
      </div>
    )
  }
}

export default reduxForm({ form: "battletag" })(Search);
