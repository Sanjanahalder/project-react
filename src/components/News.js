import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false
    }
  }

  async componentDidMount() {
    debugger
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=f82ebb726e6146f689c2db87c80452ad";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles })
  }

  render() {
    return (
      <div className="container my-4">
        <h2>NewsItem - Top headlines</h2>
        <div className="row">
          {this.state.articles && this.state.articles.length > 0 && this.state.articles.map((element) => {
            debugger
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
      </div>
    )

  }
}
export default News
