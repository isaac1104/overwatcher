import React from "react";
import _ from "lodash";
import img from "./../../images/heroes/tracer.png"

const HeroesData = (props) => {

  const sorted = _.orderBy(props.result.competitiveStats.topHeroes, ["gamesWon"], ["desc"]);

  console.log(sorted);

  _.map(props.result.competitiveStats.topHeroes, (value, key) => {
    console.log(key, value);
  });

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Heroes</th>
              <th>W</th>
              <th>L</th>
              <th>Win Rate</th>
              <th>K/D</th>
              <th>Time Played</th>
            </tr>
          </thead>
          <tbody>
            {_.map(props.result.competitiveStats.topHeroes, (value, key) => {
              return(
                <tr>
                  <td className="heroes">
                    <img src={img} className="portrait" alt="portrait"/>
                    <h6>{key}</h6>
                  </td>
                  <td>
                    <h6>{value.gamesWon}</h6>
                  </td>
                  <td>
                    <h6></h6>
                  </td>
                  <td>
                    <h6>{value.winPercentage}</h6>
                  </td>
                  <td>
                    <h6>{value.eliminationsPerLife}</h6>
                  </td>
                  <td>
                    <h6>{value.timePlayed}</h6>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
  )
};

export default HeroesData;
