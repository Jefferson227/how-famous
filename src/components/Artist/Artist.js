import React from "react";
import { Link } from "react-router-dom";
import "./Artist.css";

const getDetailsUri = (name, id) => {
  return {
    pathname: `/details/${id}`,
    state: {
      selectedArtist: {
        id,
        name
      }
    }
  };
};

const getArtistImage = (imageUrl, name, id) => {
  return imageUrl ? (
    <Link to={getDetailsUri(name, id)}>
      <img className="Artist__image" src={imageUrl} alt={name} />
    </Link>
  ) : (
    <Link to={getDetailsUri(name, id)}>
      <div className="Artist__image-placeholder">
        <i className="fab fa-itunes-note Artist__note-icon" />
      </div>
    </Link>
  );
};

const Artist = props => {
  const { image, name, id } = props.artist;

  return (
    <div className="Artist">
      {getArtistImage(image, name, id)}
      <div className="Artist__name">{name}</div>
    </div>
  );
};

export default Artist;
