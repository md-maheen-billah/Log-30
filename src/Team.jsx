import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(11);

  //   click on button to add player
  const addPlayer = () => {
    setTeam(team + 1);
  };

  //   click on button to remove player
  const removePlayer = () => {
    setTeam(team - 1);
  };

  //   this is the design of the component
  const teamStyle = {
    border: "2px solid purple",
    margin: "15px",
    padding: "15px",
    borderRadius: "15px",
  };

  return (
    <div style={teamStyle}>
      <h3>Players: {team}</h3>
      <button onClick={addPlayer}>Add player</button>
      <button onClick={removePlayer}>Remove Player</button>
    </div>
  );
}
