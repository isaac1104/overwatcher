import React from "react";

const SearchHeroes = (props) => {
  return (
    <div>
      <img src={props.image} alt="portrait" className="img-responsive portrait heroes-stream-search"/>
      <h6>{props.name}</h6>
    </div>
  )
};

export default SearchHeroes;
