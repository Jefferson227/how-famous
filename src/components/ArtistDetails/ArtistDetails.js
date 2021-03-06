import React from "react";
import { Link } from "react-router-dom";
import "./ArtistDetails.css";
import "./ArtistDetailsResponsive.css";
import { getCities } from "../../services";
import numeral from "numeral";
import Credits from "../Credits/Credits";

class ArtistDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      id: "",
      name: "",
      locations: [],
      messageInfo: <div>Loading...</div>
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
        this.setState({
          monthlyListeners: this.getMonthlyListeners(response.monthlyListeners)
        });

        for (let i = 0; i < response.cities.length; i++) {
          let location = response.cities[i];

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
              <div>{numeral(location.listeners).format("0,0")} listeners</div>
            </div>
          ];
        }

        if (!locations.length)
          this.setState({
            messageInfo: <div>No locations found for this artist.</div>
          });

        this.setState({
          locations
        });
      })
      .catch(() => {
        this.setState({
          messageInfo: <div>An error has occurred, please try again later.</div>
        });
      });
  }

  getMonthlyListeners(listeners) {
    if (!listeners) listeners = 0;

    const sentence = `${numeral(listeners).format("0,0")} monthly listeners`;
    return listeners === 1
      ? sentence.replace("listeners", "listener")
      : sentence;
  }

  render() {
    return (
      <div className="Details">
        <header className="Details__header">
          <h1 className="Details__title">{this.state.name}</h1>
          <div>{this.state.monthlyListeners}</div>
        </header>

        <section className="Locations">
          {this.state.locations.length
            ? this.state.locations
            : this.state.messageInfo}
        </section>

        <footer>
          <Credits />
          <Link to="/">
            <div>
              <h3>Search</h3>
            </div>
          </Link>
        </footer>
      </div>
    );
  }
}

export default ArtistDetails;
