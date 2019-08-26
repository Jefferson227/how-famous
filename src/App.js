import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./components/Search/Search";
import Artist from "./components/Artist/Artist";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Search} />
        <Route path="/artist/:id" component={Artist} />
      </Router>
    );
  }
}

export default App;
