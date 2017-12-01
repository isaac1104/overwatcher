import React from "react";

const SearchHeroes = (props) => {
  return (
    <div className="streamer-hero-search-container text-center">
      <div>
        <h3>Filter By Role</h3>
        <img onClick={() => props.filterStream("Support")} src="/images/role-icons/support-icon.png" alt="support-icon" className="img-responsive role-icons"/>
        <img onClick={() => props.filterStream("Offense")} src="/images/role-icons/offense-icon.png" alt="offense-icon" className="img-responsive role-icons"/>
        <img onClick={() => props.filterStream("Defense")} src="/images/role-icons/defense-icon.png" alt="defense-icon" className="img-responsive role-icons"/>
        <img onClick={() => props.filterStream("Tank")} src="/images/role-icons/tank-icon.png" alt="tank-icon" className="img-responsive role-icons"/>
      </div>
    </div>
  )
};

export default SearchHeroes;
