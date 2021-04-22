import React, { Component } from "react";
import PropTypes from "prop-types";

class Content extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="art-primary">
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default Content;
