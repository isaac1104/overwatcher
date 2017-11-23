import React from "react";

const StreamList = (props) => {
  return (
    <div className="jumbotron">
      <img src={props.thumbnail_url} alt="thumbnail"/>
      <h1>{props.title}</h1>
      <h3>Stream Started: {props.started_at}</h3>
      <h5>Viewer Count: {props.viewer_count}</h5>
    </div>
  )
};

export default StreamList;
