import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import Image from "./Image";
import * as constants from "../../../constants/constants";

class Footer extends Component {
  static propTypes = {
    authorImg: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    postedDate: PropTypes.string.isRequired,
    minToRead: PropTypes.string.isRequired,
  };

  cleanPostedDate(postedDate) {
    const date = new Date(postedDate);
    const day = date.getDate();
    const month = constants.MONTHS[date.getMonth()];
    return `${month} ${day}`;
  }

  render() {
    return (
      <div className="row footer">
        <div className="col-2 author-image">
          <Image url={this.props.authorImg} alt="author" />
        </div>
        <div className="col-8 content">
          <span className="author-name">{this.props.authorName}</span>
          <span>
            {this.cleanPostedDate(this.props.postedDate)} -{" "}
            {this.props.minToRead} min read
          </span>
        </div>
        <div className=" col-2 bookmark">
          <FontAwesomeIcon icon={faBookmark} />
        </div>
      </div>
    );
  }
}

export default Footer;
