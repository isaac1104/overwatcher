import _ from "lodash";
import React from "react";
import StreamList from "./../StreamList/StreamList";

const StreamContainer = (props) => {
  console.log(props.result);
  return (
    <div>
      {props.result.map((stream) => {
        return (
          <StreamList result={props.result}/>
        )
      })}
    </div>
  )
};

export default StreamContainer;
