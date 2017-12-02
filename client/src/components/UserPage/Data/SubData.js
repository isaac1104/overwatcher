import _ from "lodash";
import React from "react";
import Heroes from "./../../../utils/Heroes";

const SubData = (props) => {

  const heroes = _.map(props.statsData.result.competitiveStats.topHeroes, (value, key) => {
    return {"name": key, "win": value.gamesWon};
  });

  const top3Heroes = _.sortBy(heroes, [function(hero) {
      return hero.win;
    }
  ]);

  const sortedTop3Heroes = top3Heroes.splice(top3Heroes.length-3, top3Heroes.length).reverse();

  return (<div className="card sub-data">
    <div className="card-header">
      <h5><strong>Most Played Heroes</strong></h5>
    </div>
    <div className="card-body top-3-heroes">
      {sortedTop3Heroes.map((heroes) => {
        return (
          <div>
            {Heroes.filter((hero) => {
              return hero.name === heroes.name;
            }).map((hero) => {
              return (
                <img src={hero.image} alt={heroes.name} className="img-responsive portrait"/>
              )
            })}
            <h6>{heroes.name}</h6>
          </div>
        )
      })}
    </div>
  </div>)
};

export default SubData;
