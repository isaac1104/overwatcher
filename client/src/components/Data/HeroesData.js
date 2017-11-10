import _ from "lodash";
import React from "react";
import Heroes from "./../../utils/Heroes";

const HeroesData = (props) => {
    return (
      <div>
        <table className="table table-hover">
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
                    {Heroes.filter((hero) => {
                      return hero.name === key;
                    }).map((hero) => {
                      console.log(hero.image)
                      return (
                        <img key={hero.name} src={hero.image} className="portrait" alt={hero.name}/>
                      )
                    })}
                    <h6>{key}</h6>
                  </td>
                  <td>
                    <h6>{value.gamesWon}</h6>
                  </td>
                  <td>
                    <h6>-</h6>
                  </td>
                  <td>
                    <h6>{value.winPercentage}%</h6>
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
