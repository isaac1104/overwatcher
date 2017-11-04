import React from "react";

const Search = (props) => {
  return(
    <form onSubmit={props.handleFormSubmit}>
      <p>Select the region</p>
      <div>
        <select value={props.region} onChange={props.handleSelectChange}>
          <option value="us">US</option>
          <option value="eu">EU</option>
          <option value="kr">KR</option>
        </select>
      </div>
      <input onChange={props.handleInputChange} type="text" value={props.battleTag} placeholder="ex.sinatraa#11809 -> sinatraa-11809"></input>
      <button onClick={()=> props.getStatData()} type="submit">Search</button>
    </form>
  )
};

export default Search;
