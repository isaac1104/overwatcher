import React from "react";
import StreamList from "./../StreamList/StreamList";
import Header from "./../Header/Header";
import _ from "lodash";

const StreamContainer = (props) => {
  const mergedData = _.merge(props.result, props.metaResult);

  return (
    <div>
      <Header mergedData={mergedData}/>
      <div className="container">
        {mergedData.map((data) => {
          return (
            <StreamList thumbnail_url={data.thumbnail_url} title={data.title} started_at={data.started_at} viewer_count={data.viewer_count} mergedData={data}/> || <img src="/images/misc/loading.gif" alt="loading"/>
          )
        })}
      </div>
    </div>
  )
};

export default StreamContainer;
