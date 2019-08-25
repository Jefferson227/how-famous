import React from "react";
import "./Artist.css";

const getArtistImage = (imageUrl, name) => {
  return imageUrl ? (
    <img className="Artist__image" src={imageUrl} alt={name} />
  ) : (
    <div className="Artist__image-placeholder">
      <i className="fab fa-itunes-note Artist__note-icon" />
    </div>
  );
};

const Artist = props => (
  <div className="Artist">
    {getArtistImage(props.imageUrl)}
    <div className="Artist__name">{props.name}</div>
  </div>
);

export default Artist;
