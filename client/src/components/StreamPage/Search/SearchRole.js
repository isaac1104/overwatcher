import React from "react";

const SearchHeroes = (props) => {
  return (
    <div className="streamer-hero-search-container jumbotron text-center">
      <div>
        <h3>Filter Streamers By Role</h3>
        <hr/>
        <img onClick={props.filterByRole} src="/images/role-icons/support-icon.png" alt="support-icon" value="Support" className="img-responsive role-icons"/>
        <img src="/images/role-icons/offense-icon.png" alt="offense-icon" value="Offense" className="img-responsive role-icons"/>
        <img src="/images/role-icons/defense-icon.png" alt="defense-icon" value="Defense" className="img-responsive role-icons"/>
        <img src="/images/role-icons/tank-icon.png" alt="tank-icon" value="Tank" className="img-responsive role-icons"/>
      </div>
    </div>
  )
};

export default SearchHeroes;
