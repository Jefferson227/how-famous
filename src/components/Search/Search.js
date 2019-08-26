import React from "react";
import Artist from "../Artist/Artist";
import { getArtists } from "../../services";
import "./Search.css";

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      artists: [],
      messageInfo: null
    };
  }

  getArtistComponent = (key, id, name, imageUrl) => (
    <Artist key={key} id={id} name={name} imageUrl={imageUrl} />
  );

  searchTerm;
  searchArtist = event => {
    const term = event.target.value;

    clearTimeout(this.searchTerm);
    this.setState({
      artists: [],
      messageInfo: <div>Searching...</div>
    });

    if (!term.length) {
      this.setState({
        messageInfo: null
      });

      return;
    }

    this.searchTerm = setTimeout(() => {
      getArtists(term).then(response => {
        for (let i = 0; i < response.data.length; i++) {
          let artist = response.data[i];
          let { id, name, image } = artist;

          this.setState({
            artists: [
              ...this.state.artists,
              this.getArtistComponent(i, id, name, image)
            ]
          });
        }

        if (!this.state.artists.length)
          this.setState({
            messageInfo: <div>Artist not found.</div>
          });
      });
    }, 1000);
  };

  render() {
    return (
      <div className="Search">
        <header className="Search-header">
          <input
            className="Input-search"
            placeholder="Type an artist name"
            onChange={this.searchArtist}
          />
        </header>

        <section className="Artists">
          {this.state.artists.length
            ? this.state.artists
            : this.state.messageInfo}
        </section>
      </div>
    );
  }
}

export default Search;
