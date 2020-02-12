import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class BluecatPage extends Component {
  state = {
    bluecat: {},
    isLoaded: false
  };

  componentDidMount() {
    axios
      .get(
        `https://demo.nereabotanicals.com/wp-json/wp/v2/bluecat/${this.props.match.params.id}`
      )
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
    if (isLoaded) {
      return (
        <div style={{ margin: "20rem" }}>
          <Link to="/news">Go Back</Link>
          <hr />
          <h1>{bluecat.title.rendered}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: bluecat.content.rendered }}
          ></div>
          <h4>Publisher: {bluecat.acf.publisher}</h4>
        </div>
      );
    }
    return <h3>Loading...</h3>;
  }
}

export default BluecatPage;
