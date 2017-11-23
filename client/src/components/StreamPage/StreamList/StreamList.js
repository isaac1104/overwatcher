import React from "react";
import template from "url-template";

const StreamList = (props) => {

  let parsedImg = template.parse(props.thumbnail_url).expand({ width: 320, height: 180});

  return (
    <div className="container">
      <div className="jumbotron">
        <img src={parsedImg} alt="thumbnail"/>
        <h1>{props.title}</h1>
        <h3>Stream Started: {props.started_at}</h3>
        <h5>Viewer Count: {props.viewer_count}</h5>
      </div>
    </div>
  )
};

export default StreamList;
