import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

class BlueItem extends Component {
  state = {
    imgUrl: "",
    author: "",
    isLoaded: false
  };

  static propTypes = {
    bluecats: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { featured_media, author } = this.props.bluecats;
    const getImageUrl = axios.get(`/wp-json/wp/v2/media/${featured_media}`);
    const getAuthor = axios.get(`/wp-json/wp/v2/users/${author}`);

    Promise.all([getImageUrl, getAuthor]).then(res => {
      console.log(res);

      this.setState({
        imgUrl: res[0].data.media_details.sizes.full.source_url,
        author: res[1].data.name,
        isLoaded: true
      });
    });
  }
  render() {
    const { id, title, excerpt } = this.props.bluecats;
    const { imgUrl, author, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <div>
          <h2 style={{ marginBottom: "0" }}>{title.rendered}</h2>
          <small>
            Article by: <strong>{author}</strong>
          </small>
          <Link to={`/bluecat/${id}`}>
            <img style={{ width: "100%" }} src={imgUrl} alt={title.rendered} />
          </Link>
          <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
          <Link to={`/bluecat/${id}`}>Read Post</Link>
          <hr />
        </div>
      );
    }
    return null;
  }
}

export default BlueItem;
