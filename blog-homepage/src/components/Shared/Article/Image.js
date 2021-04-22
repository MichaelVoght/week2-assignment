import React, { Component } from "react";
import PropTypes from "prop-types";

class Image extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  };

  render() {
    return <img src={this.props.url} alt={this.props.alt}></img>;
  }
}

export default Image;
