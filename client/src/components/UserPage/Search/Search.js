import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import "./Search.css";

const Search = (props) => {

  const submit = () => {
    props.initStatsFetch();
  }

  const { handleSubmit, pristine, submitting } = props;
  return (
    <div className="search-div">
      <form onSubmit={handleSubmit(submit)} className="search-form">
        <Field name="battletag" component="input" type="text" placeholder="battletag-number" className="battletag-input" autoComplete="off"/>
        <Button animated basic inverted color="grey" size="mini" onClick={() => props.getStatsData(props.battletag.battletag.values.battletag)} type="submit" disabled={pristine || submitting}>
          <Button.Content visible>search</Button.Content>
          <Button.Content hidden>
            <Icon name="search"/>
          </Button.Content>
        </Button>
      </form>
      <a href="/logout">
        <Button animated basic inverted color="grey" size="mini">
          <Button.Content visible>logout</Button.Content>
          <Button.Content hidden>
            <Icon name="log out"/>
          </Button.Content>
        </Button>
      </a>
    </div>
  )
};

export default reduxForm({ form: "battletag" })(Search);;
