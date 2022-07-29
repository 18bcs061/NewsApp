import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d2127668544044348398d86fd2028fc5&pageSize=5`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loading: false,
    });
  }
  handlePrevclick = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d2127668544044348398d86fd2028fc5&page=${
      this.state.page - 1
    }&pageSize=5`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({
      page: this.state.page - 1,
      articles: parsedata.articles,
      loading: false,
    });
  };
  handleNextclick = async () => {
    console.log("next");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 5))) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d2127668544044348398d86fd2028fc5&page=${
        this.state.page + 1
      }&pageSize=5`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedata = await data.json();
      console.log(parsedata);
      this.setState({
        page: this.state.page + 1,
        articles: parsedata.articles,
        loading: false,
      });
    }
  };
  render() {
    console.log("render");
    return (
      <>
        <div className="container my-4">
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 20) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 40)
                          : ""
                      }
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://images.indianexpress.com/2022/03/ukraine-house.jpg"
                      }
                      newsUrl={element.url}
                      publishedAt={element.publishedAt}
                    />
                  </div>
                );
              })}
          </div>
          <div className="container my-4 d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevclick}
            >
              &larr;previous
            </button>
            <button
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalResults / 5)
              }
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextclick}
            >
              next&rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
