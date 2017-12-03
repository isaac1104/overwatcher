import React from "react";
import { Field, reduxForm, SubmissionError } from "redux-form";
import "./Search.css";

const Search = (props) => {

  const submit = () => {
    props.initStatsFetch();
  }

  const { handleSubmit, pristine, submitting } = props;
  return (<form onSubmit={handleSubmit(submit)}>
    <Field name="battletag" component="input" type="text" placeholder="battletag-number" className="form-control mr-sm-2" autoComplete="off"/>
    <button onClick={() => props.getStatsData(props.battletag.battletag.values.battletag)} type="submit" className="btn btn-outline-success btn-lg my-2 my-sm-0" disabled={pristine || submitting}>search</button>
    <button className="btn btn-outline-danger btn-lg">
      <a href="/logout">logout</a>
    </button>
  </form>)
};

export default reduxForm({form: "battletag"})(Search);;
