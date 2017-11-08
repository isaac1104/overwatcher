import React from "react";

const DetailedData = (props) => {
  return (
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h3>Detailed Summary</h3>
          </div>
          <div className="card-body">
            <h5>{props.detailedResult.all_damage_done} damage dealt</h5>
            <h5>{props.detailedResult.healing_done} healing done</h5>
            <h5>{props.detailedResult.eliminations} elminations</h5>
            <h5>{props.detailedResult.final_blows} final blows</h5>
            <h5>{props.detailedResult.cards} cards</h5>
            <h5>{props.detailedResult.medals_gold} gold medals</h5>
            <h5>{props.detailedResult.medals_silver} silver medals</h5>
            <h5>{props.detailedResult.medals_bronze} bronze medals</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
};

export default DetailedData;
