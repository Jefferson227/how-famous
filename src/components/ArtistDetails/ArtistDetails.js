import React from "react";

class ArtistDetails extends React.Component {
  render() {
    const id = this.props.match.params.id;
    const name = this.props.location.state.selectedArtist.name;

    return (
      <h1>
        Hello this is the details page for the artist {name} with the ID {id}.
      </h1>
    );
  }
}

export default ArtistDetails;
