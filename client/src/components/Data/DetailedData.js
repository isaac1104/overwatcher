import React from "react";

const DetailedData = (props) => {
  console.log(props.result);
  return (
      <div className="card detailed-summary">
        <div className="card-header">
          <h5>Detailed Summary</h5>
        </div>
        <div className="card-body">
          <h6>{props.result.all_damage_done} damage dealt</h6>
          <h6>{props.result.healing_done} healing done</h6>
          <h6>{props.result.eliminations} elminations</h6>
          <h6>{props.result.final_blows} final blows</h6>
          <h6>{props.result.competitiveStats.awards.cards} cards</h6>
          <h6>{props.result.competitiveStats.awards.medalsGold} gold medals</h6>
          <h6>{props.result.competitiveStats.awards.medalsSilver} silver medals</h6>
          <h6>{props.result.competitiveStats.awards.medalsBronze} bronze medals</h6>
        </div>
      </div>
  )
};

export default DetailedData;
