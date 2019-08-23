import React from "react";
import Artist from "./components/Artist";
import "./App.css";
import "./App-responsive.css";

let searchTerm;
const searchArtist = element => {
  const term = element.target.value;

  clearTimeout(searchTerm);
  searchTerm = setTimeout(() => {
    if (term.length < 3) return;

    console.log(term);
  }, 1000);
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <input
          className="Input-search"
          placeholder="Type an artist name"
          onKeyUp={searchArtist}
        />
      </header>

      <section className="Artists">
        <Artist
          name="Megadeth"
          imageUrl="https://i.scdn.co/image/cdc26c67ffe1c377e0521435eb4a46ce0ec23876"
        />
        <Artist
          name="Megadeth"
          imageUrl="https://i.scdn.co/image/cdc26c67ffe1c377e0521435eb4a46ce0ec23876"
        />
        <Artist
          name="Megadeth"
          imageUrl="https://i.scdn.co/image/cdc26c67ffe1c377e0521435eb4a46ce0ec23876"
        />
        <Artist
          name="Megadeth"
          imageUrl="https://i.scdn.co/image/cdc26c67ffe1c377e0521435eb4a46ce0ec23876"
        />
        <Artist
          name="Megadeth"
          imageUrl="https://i.scdn.co/image/cdc26c67ffe1c377e0521435eb4a46ce0ec23876"
        />
        <Artist
          name="Megadeth"
          imageUrl="https://i.scdn.co/image/cdc26c67ffe1c377e0521435eb4a46ce0ec23876"
        />
        <Artist
          name="Megadeth"
          imageUrl="https://i.scdn.co/image/cdc26c67ffe1c377e0521435eb4a46ce0ec23876"
        />
        <Artist
          name="Megadeth"
          imageUrl="https://i.scdn.co/image/cdc26c67ffe1c377e0521435eb4a46ce0ec23876"
        />
      </section>
    </div>
  );
}

export default App;
