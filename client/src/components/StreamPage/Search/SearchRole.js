import React from "react";
import { Button, Image } from "semantic-ui-react";

const SearchHeroes = (props) => {
  return (
    <div className="streamer-hero-search-container text-center">
      <div>
        <h5>Filter By Role</h5>
        {/* Support */}
        <Button
          onClick={() => props.filterStream("Support")}
          animated="vertical"
          basic
          inverted
          color="teal"
        >
          <Button.Content visible>
            <Image
              src="/images/role-icons/support-icon.png"
              size="mini"
            />
          </Button.Content>
          <Button.Content hidden>
            SUPPORT
          </Button.Content>
        </Button>
        {/* Offense */}
        <Button
          onClick={() => props.filterStream("Offense")}
          animated="vertical"
          basic
          inverted
          color="red"
        >
          <Button.Content visible>
            <Image
              src="/images/role-icons/offense-icon.png"
              size="mini"
            />
          </Button.Content>
          <Button.Content hidden>
            OFFENSE
          </Button.Content>
        </Button>
        {/* Defense */}
        <Button
          onClick={() => props.filterStream("Defense")}
          animated="vertical"
          basic
          inverted
          color="blue"
        >
          <Button.Content visible>
            <Image
              src="/images/role-icons/defense-icon.png"
              size="mini"
            />
          </Button.Content>
          <Button.Content hidden>
            DEFENSE
          </Button.Content>
        </Button>
        {/* Tank */}
        <Button
          onClick={() => props.filterStream("Tank")}
          animated="vertical"
          basic
          inverted
          color="purple"
        >
          <Button.Content visible>
            <Image
              src="/images/role-icons/tank-icon.png"
              size="mini"
            />
          </Button.Content>
          <Button.Content hidden>
            TANK
          </Button.Content>
        </Button>
        {/* All */}
        <Button
          onClick={() => props.filterStream("All")}
          animated="vertical"
          basic
          inverted
          color="orange"
        >
          <Button.Content visible>
            <Image
              src="/images/misc/owlogo.svg"
              size="mini"
            />
          </Button.Content>
          <Button.Content hidden>
            ALL
          </Button.Content>
        </Button>
      </div>
    </div>
  )
};

export default SearchHeroes;
