import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export class NewsBody extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 10,
        category: 'general',
    }

    static propTypes = {
        apiKey: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        country: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.apiKey = props.apiKey;
        this.pageSize = props.pageSize;
        this.category = props.category;
        this.setProgress = props.setProgress;

        this.state = {
            page: 0,
            articles: [],
            loading: true,
            totalResults: 0,
        };
    }

    async updateNews() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.apiKey}&`
        url += `page=${this.state.page+1}&pageSize=${this.pageSize}&category=${this.category}`;

        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            loading: false,
            totalResults: parsedData.totalResults,
            page: this.state.page + 1,
        });
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.apiKey}&`;
        url+=`page=${this.state.page+1}&pageSize=${this.pageSize}&category=${this.category}`;
        this.setProgress(20);

        let data = await fetch(url);
        this.setProgress(50);

        let parsedData = await data.json();
        this.setProgress(80);

        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            loading: false,
            totalResults: parsedData.totalResults,
            page: this.state.page + 1,
        });
        this.setProgress(100);
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    fetchMoreData = () => {
        this.updateNews();
    }


    render() {
        return (
            <div className='container' style={{marginTop: '80px'}}>
                <h2 className='my-3 text-center'>NewsScope Top {this.capitalizeFirstLetter(this.category)} News</h2>
                {/* {this.state.loading && <Spinner />} */}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className='container'>
                        <div className="row my-3">
                            {this.state.articles.map((ele) => {
                                return (
                                    <div className="col-xxl-3 col-xl-4 col-md-6" key={ele.url}>
                                        <NewsItem title={ele.title} desc={ele.description} author={ele.author}
                                            source={ele.source.name} imageUrl={ele.urlToImage} newsUrl={ele.url}
                                            date={ele.publishedAt} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}

export default NewsBody
