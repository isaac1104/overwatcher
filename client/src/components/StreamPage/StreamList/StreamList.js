import React from "react";
import StreamData from "./StreamData";
import MetaData from "./MetaData";
import template from "url-template";

const StreamList = (props) => {
console.log(props.metaResult);
  return (
    <div className="container">
      {props.result.map((stream) => {
        let parsedImg = template.parse(stream.thumbnail_url).expand({ width: 320, height: 180});
        return (
          <StreamData title={stream.title} thumbnail_url={parsedImg} started_at={stream.started_at} viewer_count={stream.viewer_count} id={stream.id}/> || <h2>Loading...</h2>
        )
      })}
      {props.metaResult.map((result) => {
        if (result.overwatch !== null && result.overwatch.broadcaster.hero !== null) {
          return (
            <MetaData hero={result.overwatch.broadcaster.hero.name} role={result.overwatch.broadcaster.hero.role}/>
          )
        } else {
          return (
            <h5>Streamer currently not in game</h5>
          )
        }
      })}
    </div>
  )
};

export default StreamList;
