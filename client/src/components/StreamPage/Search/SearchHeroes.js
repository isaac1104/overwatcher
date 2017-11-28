import React from "react";
import Heroes from "./../../../utils/Heroes";

const SearchHeroes = (props) => {

  return (
    <div className="streamer-hero-search-container">
      {Heroes.map((hero) => {
        return (
          <div>
            <img src={hero.image} alt="portrait" className="img-responsive portrait heroes-stream-search" value={hero.name}/>
            <h6>{hero.name}</h6>
          </div>
        )
      })}
    </div>
  )
};

export default SearchHeroes;
