import React from "react";
import StreamList from "./../StreamList/StreamList";
import Search from "./../Search/Search";

const StreamContainer = (props) => {
  return (
    <div>
      <Search search={props.search} handleInputChange={props.handleInputChange}/>
      {props.result.map((stream) => {
        return (
          <StreamList title={stream.title} thumbnail_url={stream.thumbnail_url} started_at={stream.started_at} viewer_count={stream.viewer_count} id={stream.id} metaResult={props.metaResult}/> || <h2>Loading...</h2>
        )
      })}
    </div>
  )
};

export default StreamContainer;
