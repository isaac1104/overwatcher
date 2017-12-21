import React, { Component } from "react";
import Logout from "./../Logout/Logout";
import { Button, Icon } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import SearchField from './SearchField';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class Search extends Component {

  formSubmit = ({ battletag }) => {
    this.props.initStatsFetch();
    this.props.getStatsData(battletag);
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <div className="search-div">
        <form onSubmit={handleSubmit(this.formSubmit)} className="search-form">
          <Field
            name="battletag"
            component={SearchField}
          />
          <Button
            animated
            basic
            inverted
            size="mini"
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

export default reduxForm({ form: "battletag" })(connect(null, actions)(Search));
