import React from "react";

const DetailedData = (props) => {
  return (
      <div className="card">
        <div className="card-header">
          <h5>Detailed Summary</h5>
        </div>
        <div className="card-body">
          <h6>{props.detailedResult.all_damage_done} damage dealt</h6>
          <h6>{props.detailedResult.healing_done} healing done</h6>
          <h6>{props.detailedResult.eliminations} elminations</h6>
          <h6>{props.detailedResult.final_blows} final blows</h6>
          <h6>{props.detailedResult.cards} cards</h6>
          <h6>{props.detailedResult.medals_gold} gold medals</h6>
          <h6>{props.detailedResult.medals_silver} silver medals</h6>
          <h6>{props.detailedResult.medals_bronze} bronze medals</h6>
        </div>
      </div>
  )
};

export default DetailedData;
