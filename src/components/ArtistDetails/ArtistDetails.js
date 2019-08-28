import React from "react";
import "./ArtistDetails.css";
import { getCities } from "../../services";

class ArtistDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      id: "",
      name: "",
      locations: []
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const name = this.props.location.state.selectedArtist.name;

    this.setState({
      id,
      name,
      locations: []
    });

    getCities(id)
      .then(response => {
        let locations = [];

        for (let i = 0; i < response.length; i++) {
          let location = response[i];

          locations = [
            ...locations,
            <div key={i} className="Location">
              <div>
                <img
                  src={`../../assets/flags/${location.country.toLowerCase()}.png`}
                  alt={location.country}
                />{" "}
              </div>
              <div>{`${i + 1}. ${location.city}`}</div>
              <div>{location.listeners} listeners</div>
            </div>
          ];
        }

        this.setState({
          locations
        });
      })
      .catch(error => {
        console.error("it didn't work");
      });
  }

  render() {
    return (
      <div className="Details">
        <header className="Details__header">
          <h1>{this.state.name}</h1>
        </header>

        <section className="Locations">{this.state.locations}</section>
      </div>
    );
  }
}

export default ArtistDetails;
