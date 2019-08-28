import React from "react";
import { Link } from "react-router-dom";
import "./Artist.css";

const getArtistImage = (imageUrl, name, id) => {
  return imageUrl ? (
    <Link to={`/details/${id}`}>
      <img className="Artist__image" src={imageUrl} alt={name} />
    </Link>
  ) : (
    <Link to={`/details/${id}`}>
      <div className="Artist__image-placeholder">
        <i className="fab fa-itunes-note Artist__note-icon" />
      </div>
    </Link>
  );
};

const Artist = props => (
  <div className="Artist">
    {getArtistImage(props.artist.image, props.artist.name, props.artist.id)}
    <div className="Artist__name">{props.artist.name}</div>
  </div>
);

export default Artist;
