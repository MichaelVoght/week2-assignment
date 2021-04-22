import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faStar } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

class Header extends Component {
  static propTypes = {
    hasAudio: PropTypes.bool.isRequired,
    hasPreview: PropTypes.bool.isRequired,
  };

  render() {
    return (
      <div className="header">
        {this.props.hasAudio === true && (
          <div className="audio">
            <FontAwesomeIcon icon={faVolumeUp} />
            <p className="audio-text">Audio Available</p>
          </div>
        )}
        {this.props.hasPreview === true && (
          <div className="preview">
            <FontAwesomeIcon icon={faStar} />
            <p className="preview-text">Member preview</p>
          </div>
        )}
      </div>
    );
  }
}

export default Header;
