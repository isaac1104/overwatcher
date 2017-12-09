import React from "react";
import Logout from "./../../Logout/Logout";
import { Button, Icon } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import * as actions from "./../../../actions";
import "./Search.css";

const Search = (props) => {

  const submit = () => {
    props.initStatsFetch();
  }

  const { handleSubmit, pristine, submitting } = props;
  return (
    <div className="search-div">
      <form onSubmit={handleSubmit(submit)} className="search-form">
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
          onClick={() => props.getStatsData(props.battletag.battletag.values.battletag)} type="submit"
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
};

export default reduxForm({ form: "battletag" })(connect(null, actions)(Search));
