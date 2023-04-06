import React from "react";
import { ReactDOM } from "react";

function Card(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img">
          {props.emoji}
        </span>
        <span className="name">{props.name}</span>
      </dt>
      <dd>
        <div className="meaning">{props.meaning}</div>
      </dd>
    </div>
  );
}
export default Card;