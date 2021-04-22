import "./Article.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import Image from "../../Shared/Article/Image";
import Header from "../../Shared/Article/Header";
import Content from "../../Shared/Article/Content";
import Footer from "../../Shared/Article/Footer";

class Articles extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(PropTypes.array).isRequired,
    articlesPerRow: PropTypes.number.isRequired,
  };

  render() {
    const articleItems = this.props.articles.map((article, ind) => {
      return (
        <div className={`col-${12 / this.props.articlesPerRow}`}>
          <div className="row missed-it article">
            <div className="col-12 article-image">
              <Image url={article.image} />
            </div>
            <div className="col-12 container">
              <Header
                hasAudio={article.hasAudioAvailable}
                hasPreview={article.memberPreview}
              />
              <Content title={article.title} content={article.description} />
              <Footer
                authorImg={article.author.image}
                authorName={article.author.name}
                postedDate={article.postedDate}
                minToRead={article.minutesToRead}
              />
            </div>
          </div>
        </div>
      );
    });

    return <div className="row">{articleItems}</div>;
  }
}

export default Articles;
