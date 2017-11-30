import React from "react";

const SearchHeroes = (props) => {
  return (
    <div className="streamer-hero-search-container">
      <img src="/images/role-icons/support-icon.png" alt="support-icon" value="support" className="img-responsive role-icons"/>
      <img src="/images/role-icons/offense-icon.png" alt="offense-icon" value="offense" className="img-responsive role-icons"/>
      <img src="/images/role-icons/defense-icon.png" alt="defense-icon" value="defense" className="img-responsive role-icons"/>
      <img src="/images/role-icons/tank-icon.png" alt="tank-icon" value="tank" className="img-responsive role-icons"/>
    </div>
  )
};

export default SearchHeroes;
