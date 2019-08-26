import React from "react";
import { Link } from "react-router-dom";
import "./Artist.css";

const getArtistImage = (imageUrl, name, id) => {
  return imageUrl ? (
    <Link to={`/artist/${id}`}>
      <img className="Artist__image" src={imageUrl} alt={name} />
    </Link>
  ) : (
    <Link to={`/artist/${id}`}>
      <div className="Artist__image-placeholder">
        <i className="fab fa-itunes-note Artist__note-icon" />
      </div>
    </Link>
  );
};

const Artist = props => (
  <div className="Artist">
    {getArtistImage(props.imageUrl, props.name, props.id)}
    <div className="Artist__name">{props.name}</div>
  </div>
);

export default Artist;
