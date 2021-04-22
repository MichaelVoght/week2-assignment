import React, { Component } from "react";
import Articles from "./content/Articles";
import missedArticles from "../../assets/data/missed-articles.json";

class MissedIt extends Component {
  render() {
    return (
      <div className="missed-it container">
        <h1>
          <span>In case you missed it</span>
        </h1>
        <Articles articles={missedArticles} articlesPerRow={3} />
      </div>
    );
  }
}

export default MissedIt;
