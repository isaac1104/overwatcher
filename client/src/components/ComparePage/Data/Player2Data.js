import _ from "lodash";
import React from "react";
import Heroes from "./../../../utils/Heroes";

const Player2Data = (props) => {

  const mainHero =  _.map(props.result2.competitiveStats.topHeroes, (value, key) => {
      return {"name": key, "win": value.gamesWon};
    }).reduce((acc,curr) => {
      if (acc.win > curr.win) {
        return acc;
      } else {
        return curr;
      }
    });

    const style = {
        padding: "10px",
        backgroundImage: `url(/images/heroes-bg/${mainHero.name}.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        opacity: "0.8"
    }

    const heroes = _.map(props.result2.competitiveStats.topHeroes, (value, key) => {
      return {"name": key, "win": value.gamesWon};
    });

    const top3Heroes = _.sortBy(heroes, [function(hero) {
        return hero.win;
      }
    ]);

  const sortedTop3Heroes = top3Heroes.splice(top3Heroes.length-3, top3Heroes.length).reverse();

  const {competitiveStats} = props.result2;
  const {allHeroes} = props.result2.competitiveStats.careerStats;

  return (
    <div className="card player-stats-data">
      <div className="card-header player-stats-header" style={style}>
        <img src={props.result2.ratingIcon} alt="rank" className="rank-img"/>
        <div>
          <h5>{props.result2.name}</h5>
          <h5>LV.{props.result2.level}</h5>
          <h5>Main Hero: {mainHero.name}</h5>
          <h5>{props.result2.ratingName}</h5>
          <h5>{props.result2.rating} Points</h5>
        </div>
      </div>
      <div className="card-header">
        <h5>Most Played Heroes</h5>
      </div>
      <div className="card-body">
        <div className="row">
          {sortedTop3Heroes.map((hero) => {
            return (
              <div className="col-md-4">
                {Heroes.filter((heroes) => {
                  return heroes.name === hero.name;
                }).map((hero) => {
                  return (
                    <img src={hero.image} alt={heroes.name} className="img-responsive portrait"/>
                  )
                })}
                <h6>{hero.name}</h6>
              </div>
            )
          })}
        </div>
      </div>
      <div className="card-header">
        <h5>Summary</h5>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <h5><strong>Win Rate</strong></h5>
            <hr/>
            <h6>{((competitiveStats.games.won / competitiveStats.games.played) * 100).toFixed(0)}%</h6>
            <h6>{allHeroes.game.gamesWon}W {allHeroes.game.gamesTied}D {allHeroes.game.gamesLost}L</h6>
          </div>
          <div className="col-md-4">
            <h5><strong>Total Games Won</strong></h5>
            <hr/>
            <h6>{props.result2.gamesWon}</h6>
          </div>
          <div className="col-md-4">
            <h5><strong>Time Played</strong></h5>
            <hr/>
            <h6>{allHeroes.game.timePlayed}</h6>
            <h6>{allHeroes.game.gamesPlayed} game(s)</h6>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <h5><strong>All Damages Done</strong></h5>
            <hr/>
            <h6>{allHeroes.best.allDamageDoneMostInGame}</h6>
          </div>
          <div className="col-md-4">
            <h5><strong>Most Time Spent On Fire</strong></h5>
            <hr/>
            <h6>{allHeroes.best.timeSpentOnFireMostInGame}</h6>
          </div>
          <div className="col-md-4">
            <h5><strong>Most Time Spent On Object</strong></h5>
            <hr/>
            <h6>{allHeroes.best.objectiveTimeMostInGame}</h6>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <h5><strong>Eliminations</strong></h5>
            <hr/>
            <h6>{allHeroes.combat.eliminations}</h6>
          </div>
          <div className="col-md-4">
            <h5><strong>Deaths</strong></h5>
            <hr/>
            <h6>{allHeroes.combat.deaths}</h6>
          </div>
          <div className="col-md-4">
            <h5><strong>Objective Kills</strong></h5>
            <hr/>
            <h6>{allHeroes.combat.objectiveKills}</h6>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <h5><strong>Gold Medals</strong></h5>
            <hr/>
            <h6>{competitiveStats.awards.medalsGold}</h6>
          </div>
          <div className="col-md-4">
            <h5><strong>Silver Medals</strong></h5>
            <hr/>
            <h6>{competitiveStats.awards.medalsSilver}</h6>
          </div>
          <div className="col-md-4">
            <h5><strong>Bronze Medals</strong></h5>
            <hr/>
            <h6>{competitiveStats.awards.medalsBronze}</h6>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <h5><strong>Final Blows</strong></h5>
            <hr/>
            <h6>{allHeroes.combat.finalBlows}</h6>
          </div>
          <div className="col-md-4">
            <h5><strong>Multi Kills</strong></h5>
            <hr/>
            <h6>{allHeroes.combat.multikills}</h6>
          </div>
          <div className="col-md-4">
            <h5><strong>Solo Kills</strong></h5>
            <hr/>
            <h6>{allHeroes.combat.soloKills}</h6>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Player2Data;
