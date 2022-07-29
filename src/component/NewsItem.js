import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, publishedAt } = this.props;
    return (
      <>
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p class="card-text">
              <small class="text-muted">
                Published on {new Date(publishedAt).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="blank" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
