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

  getArtistComponent = (key, artist) => <Artist key={key} artist={artist} />;

  setArtistsOnState(artists) {
    for (let i = 0; i < artists.length; i++) {
      let artist = artists[i];

      this.setState({
        artists: [...this.state.artists, this.getArtistComponent(i, artist)]
      });
    }

    if (!this.state.artists.length)
      this.setState({
        messageInfo: <div>Artist not found.</div>
      });
  }

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
      getArtists(term)
        .then(artists => {
          this.setArtistsOnState(artists);
        })
        .catch(() => {
          this.setState({
            messageInfo: (
              <div>An error has occurred, please try again later.</div>
            )
          });
        });
    }, 1000);
  };

  render() {
    return (
      <div className="Search">
        <header className="Search-header">
          <h1>How famous my favourite band is?</h1>
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
