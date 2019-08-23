import React from "react";

const Artist = props => (
  <div className="Artist">
    <img className="Artist__image" src={props.imageUrl} alt={props.name} />
    <div className="Artist__name">{props.name}</div>
  </div>
);

export default Artist;
