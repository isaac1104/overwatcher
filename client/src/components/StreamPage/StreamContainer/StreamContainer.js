import React from "react";
import StreamList from "./../StreamList/StreamList";

const StreamContainer = (props) => {
  console.log(props.result);
  return (
    <div>
      {props.result.map((stream) => {
        return (
          <StreamList title={stream.title} thumbnail_url={stream.thumbnail_url} started_at={stream.started_at} viewer_count={stream.viewer_count} id={stream.id} width={320} height={180}/>
        )
      })}
    </div>
  )
};

export default StreamContainer;
