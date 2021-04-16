import "./Articles.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import * as constants from "../../../constants/constants";

class Articles extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(PropTypes.array).isRequired,
    articlesPerRow: PropTypes.number.isRequired,
  };

  cleanPostedDate(postedDate) {
    const date = new Date(postedDate);
    const day = date.getDate();
    const month = constants.MONTHS[date.getMonth()];
    return `${month} ${day}`;
  }

  render() {
    const articleItems = this.props.articles.map((article, ind) => {
      return (
        <div className={`col-${12 / this.props.articlesPerRow}`}>
          <div className="row article">
            <div className="col-5 article-image">
              <img src={article.image} alt="article"></img>
            </div>
            <div className="col-7 container">
              <div className="art-primary">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
              <div className="row footer">
                <div className="col-2 author-image">
                  <img src={article.author.image} alt="author"></img>
                </div>
                <div className="col-10">
                  <span>{article.author.name}</span>
                  <br></br>
                  <span>
                    {this.cleanPostedDate(article.postedDate)} -{" "}
                    {article.minutesToRead} min read
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return <div className="row">{articleItems}</div>;
  }
}

export default Articles;
