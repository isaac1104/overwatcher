import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import "./Search.css";

const Search = (props) => {

  const submit = () => {
    props.initStatsFetch();
  }

  const btnStyle = {
    search : {
      backgroundColor : "orange",
      color : "#353b40"
    },
    logout: {
      backgroundColor : "#7a0905",
      color : "white"
    }
  }

  const { handleSubmit, pristine, submitting } = props;
  return (
    <div>
      <form onSubmit={handleSubmit(submit)} className="search-form">
        <Field name="battletag" component="input" type="text" placeholder="battletag-number" className="form-control mr-sm-2 battletag-input" autoComplete="off"/>
        <Button animated onClick={() => props.getStatsData(props.battletag.battletag.values.battletag)} type="submit" disabled={pristine || submitting} style={btnStyle.search}>
          <Button.Content visible>search</Button.Content>
          <Button.Content hidden>
            <Icon name="search"/>
          </Button.Content>
        </Button>
      </form>
      <a href="/logout">
        <Button animated style={btnStyle.logout}>
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
