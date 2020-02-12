import React, { Component } from "react";
import axios from "axios";
import BlueItem from "./blue-props";

class Bluecat extends Component {
  state = {
    bluecat: [],
    isLoaded: false
  };

  componentDidMount() {
    axios
      .get("https://demo.nereabotanicals.com/wp-json/wp/v2/bluecat")
      .then(res =>
        this.setState({
          bluecat: res.data,
          isLoaded: true
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    const { bluecat, isLoaded } = this.state;
    // console.log(this.state);

    if (isLoaded) {
      return (
        <div>
          {bluecat.map(bluecats => (
            <BlueItem key={bluecats.id} bluecats={bluecats} />
          ))}
        </div>
      );
    }
    return <h3>Loading...</h3>;
  }
}

export default Bluecat;
