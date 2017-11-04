import React from "react";

const Search = (props) => {
  return(
    <form onSubmit={props.handleFormSubmit}>
      <input onChange={props.handleInputChange} type="text" value={props.battleTag} placeholder="ex.sinatraa#11809 -> sinatraa-11809"></input>
      <button type="submit">Search</button>
    </form>
  )
};

export default Search;
