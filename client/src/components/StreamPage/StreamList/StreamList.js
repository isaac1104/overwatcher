import React from "react";
import StreamData from "./StreamData";
import MetaData from "./MetaData";
import template from "url-template";
import _ from "lodash";

const StreamList = (props) => {
  const mergedData = _.merge(props.result, props.metaResult)
  console.log(mergedData);

  return (
    <div className="container stream-list-container">
      {props.result.map((stream) => {
        let parsedImg = template.parse(stream.thumbnail_url).expand({ width: 320, height: 180});
        return (
          <StreamData title={stream.title} thumbnail_url={parsedImg} started_at={stream.started_at} viewer_count={stream.viewer_count} id={stream.id}/>
        )
      })}
      {props.metaResult.map((result) => {
        if (result.overwatch !== null && result.overwatch.broadcaster.hero !== null) {
          return (
            <MetaData hero={result.overwatch.broadcaster.hero.name} role={result.overwatch.broadcaster.hero.role}/>
          )
        } else {
          return (
            <div className="card-body">
              <p className="card-text">Streamer currently not in game</p>
            </div>
          )
        }
      })}
    </div>
  )
};

export default StreamList;
