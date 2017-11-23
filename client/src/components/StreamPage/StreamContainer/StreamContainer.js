import React from "react";
import StreamList from "./../StreamList/StreamList";
import Search from "./../Search/Search";

const StreamContainer = (props) => {
  return (
    <div>
      <Search search={props.search} handleInputChange={props.handleInputChange}/>
      <StreamList result={props.result} metaResult={props.metaResult}/>
    </div>
  )
};

export default StreamContainer;
