import React from "react";

const DetailedData = (props) => {
  return (
      <div className="card detailed-summary">
        <div className="card-header">
          <h5><strong>Summary</strong></h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <div>
                <b>Damage Dealt</b>
                <h6>{props.result.competitiveStats.careerStats.allHeroes.combat.damageDone}</h6>
              </div>
              <div>
                <b>Healing Done</b>
                <h6>{props.result.competitiveStats.careerStats.allHeroes.assists.healingDone}</h6>
              </div>
              <div>
                <b>Eliminations</b>
                <h6>{props.result.competitiveStats.careerStats.allHeroes.combat.eliminations}</h6>
              </div>
              <div>
                <b>Final Blows</b>
                <h6>{props.result.competitiveStats.careerStats.allHeroes.combat.finalBlows}</h6>
              </div>
              <div>
                <b>Objective Time</b>
                <h6>{props.result.competitiveStats.careerStats.allHeroes.game.objectiveTime}</h6>
              </div>
              <div>
                <b>Time on Fire</b>
                <h6>{props.result.competitiveStats.careerStats.allHeroes.game.timeSpentOnFire}</h6>
              </div>
              <div>
                <b>Multi Kills</b>
                <h6>{props.result.competitiveStats.careerStats.allHeroes.combat.multikills}</h6>
              </div>
              <div>
                <b>Solo Kills</b>
                <h6>{props.result.competitiveStats.careerStats.allHeroes.combat.soloKills}</h6>
              </div>
              <div>
                <b>Most Time Spent On Fire</b>
                <h6>{props.result.competitiveStats.careerStats.allHeroes.best.timeSpentOnFireMostInGame}</h6>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <b>Deaths</b>
                <h6>{props.result.competitiveStats.careerStats.allHeroes.deaths.deaths}</h6>
              </div><div>
                <b>Most Eliminations in Game</b>
                <h6>{props.result.competitiveStats.careerStats.allHeroes.best.eliminationsMostInGame}</h6>
              </div>
              <div>
                <b>Objective Kills</b>
                <h6>{props.result.competitiveStats.careerStats.allHeroes.combat.objectiveKills}</h6>
              </div>
              <div>
                <b>Cards</b>
                <h6>{props.result.competitiveStats.awards.cards}</h6>
              </div>
              <div>
                <b>Gold Medals</b>
                <h6>{props.result.competitiveStats.awards.medalsGold}</h6>
              </div>
              <div>
                <b>Silver Medals</b>
                <h6>{props.result.competitiveStats.awards.medalsSilver}</h6>
              </div>
              <div>
                <b>Bronze Medals</b>
                <h6>{props.result.competitiveStats.awards.medalsBronze}</h6>
              </div>
              <div>
                <b>Most Solo Kills In Game</b>
                <h6>{props.result.competitiveStats.careerStats.allHeroes.best.soloKillsMostInGame}</h6>
              </div>
              <div>
                <b>Most Objective Time Spent</b>
                <h6>{props.result.competitiveStats.careerStats.allHeroes.best.objectiveTimeMostInGame}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
};

export default DetailedData;
