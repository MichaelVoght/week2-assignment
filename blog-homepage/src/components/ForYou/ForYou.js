import React, { Component } from "react";
import Articles from "../Shared/Articles/Articles";
import yourArticles from "../../assets/data/your-articles.json";

class ForYou extends Component {
  render() {
    return (
      <div className="container">
        <h1>
          <span>For you</span>
        </h1>
        <Articles articles={yourArticles} articlesPerRow="2" />
      </div>
    );
  }
}

export default ForYou;
