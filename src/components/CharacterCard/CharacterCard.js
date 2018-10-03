import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
  <div onClick={() => props.removeCharacter(props.id)} className="remove">

    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  </div>
);

export default CharacterCard;
