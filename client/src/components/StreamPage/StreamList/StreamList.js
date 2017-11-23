import React from "react";

const StreamList = (props) => {
  return (
    <div className="jumbotron">
      <img src={props.result.thumbnail_url} alt="thumbnail"/>
      <h1>{props.result.title}</h1>
      <h3>{props.result.started_at}</h3>
      <h5>{props.result.viewer_count}</h5>
    </div>
  )
};

export default StreamList;
