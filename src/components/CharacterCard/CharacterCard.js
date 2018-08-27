import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} id = {props.id} 
      onClick = {() => props.shuffleScoreCard(props.id)} className = "shuffleScore"
      />
    </div>
  </div>
);

export default CharacterCard;
