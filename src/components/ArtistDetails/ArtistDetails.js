import React from "react";

class ArtistDetails extends React.Component {
  render() {
    return (
      <h1>
        Hello this is the details page for the ID {this.props.match.params.id}.
      </h1>
    );
  }
}

export default ArtistDetails;
