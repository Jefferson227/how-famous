import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./components/Search/Search";
import ArtistDetails from "./components/ArtistDetails/ArtistDetails";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/details/:id" component={ArtistDetails} />
          <Route path="/" component={Search} />
        </Switch>
      </Router>
    );
  }
}

export default App;
