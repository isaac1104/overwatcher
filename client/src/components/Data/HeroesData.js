import React from "react";

const HeroesData = (props) => {

  const heroesData = [];
  const heroesName = Object.keys(props.heroesResult).sort();
  const sortedObj = Object.keys(props.heroesResult).sort().forEach(function(x, y) {
    heroesData.push(x = props.heroesResult[x]);
  });

  console.log(heroesData);
  return (
    <div className="card">
      <div className="card-header">
        <h3>Heroes Summary</h3>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <div className="card-title">
              <h4>Heroes</h4>
              <hr/>
              {heroesName.map((name) => {
                return(
                  <div className="row">
                    <div className="col-md-2">
                      <h5>{name}</h5>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="col-md-6">
            <div className="card-title">
              <h4>K</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
};

export default HeroesData;
