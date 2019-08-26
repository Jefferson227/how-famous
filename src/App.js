import React from "react";
import Artist from "./components/Artist";
import { getArtists } from "./services";
import "./App.css";
import "./App-responsive.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      artists: []
    };
  }

  getArtistComponent = (key, id, name, imageUrl) => (
    <Artist key={key} id={id} name={name} imageUrl={imageUrl} />
  );

  searchTerm;
  searchArtist = event => {
    const term = event.target.value;

    clearTimeout(this.searchTerm);
    this.setState({ artists: [] });

    this.searchTerm = setTimeout(() => {
      if (term.length < 3) return;

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
      });
    }, 1000);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input
            className="Input-search"
            placeholder="Type an artist name"
            onKeyUp={this.searchArtist}
          />
        </header>

        <section className="Artists">{this.state.artists}</section>
      </div>
    );
  }
}

export default App;
