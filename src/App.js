import React from "react";
import "./App.css";
import "./App-responsive.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <input className="Input-search" placeholder="Type an artist name" />
      </header>

      <section>
        <div>
          <img
            className="Artist__image"
            src="https://i.scdn.co/image/cdc26c67ffe1c377e0521435eb4a46ce0ec23876"
            alt="Megadeth"
          />
        </div>
      </section>
    </div>
  );
}

export default App;
