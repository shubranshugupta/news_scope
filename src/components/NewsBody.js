import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

// const data = {
//     "status": "ok",
//     "totalResults": 4,
//     "articles": [
//         {
//             "source": { "id": "news24", "name": "News24" },
//             "author": "Sibusiso Mjikeliso",
//             "title": null,
//             "description": "Acting Cricket South Africa CEO Pholetsi Moseki says the board is concerned about the issues former Proteas assistant coach Enoch Nkwe raised in his resignation.",
//             "url": "https://www.news24.com/sport/Cricket/Proteas/cricket-sa-wants-to-get-to-the-bottom-of-nkwe-resignation-concerns-says-ceo-20210826",
//             "urlToImage": null,
//             "publishedAt": "2021-08-26T11:40:16+00:00",
//             "content": "<ul><li>Cricket South Africa has committed to \"getting to the bottom\" of Enoch Nkwe's sudden resignation as Proteas assistant coach. </li><li>Nkwe voiced concerns with the current culture and working… [+3497 chars]"
//         },
//         {
//             "source": { "id": "abc-news-au", "name": "ABC News (AU)" },
//             "author": "ABC News",
//             "title": "England cricket great Ted Dexter dies aged 86",
//             "description": "The former England captain, nicknamed \"Lord Ted\", is fondly remembered as a giant of the game and one of his country's greatest players.",
//             "url": "http://www.abc.net.au/news/2021-08-26/england-cricket-great-ted-dexter-dies-aged-86/100411276",
//             "urlToImage": "https://live-productin.wcms.abc-cdn.net.au/1006c7ecf34ec0935eef2aade5017711?impolicy=wcms_crop_resize&cropH=2815&cropW=5004&xPos=0&yPos=223&width=862&height=485",
//             "publishedAt": "2021-08-26T09:07:52Z",
//             "content": "Former England captain Ted Dexter has died aged 86 following a recent illness.\r\n<ul><li>Dexter played 62 Tests for England and was captain on 30 occasions</li><li>He was inducted into the ICC Hall of… [+1746 chars]"
//         },
//         {
//             "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
//             "author": null,
//             "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
//             "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
//             "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
//             "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
//             "publishedAt": "2020-04-27T11:41:47Z",
//             "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
//         },
//         {
//             "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
//             "author": null,
//             "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
//             "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
//             "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
//             "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
//             "publishedAt": "2020-03-30T15:26:05Z",
//             "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
//         }
//     ]
// }

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
        url += `page=${this.state.page + 1}&pageSize=${this.pageSize}&category=${this.category}`;

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
        url += `page=${this.state.page + 1}&pageSize=${this.pageSize}&category=${this.category}`;
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
            <div className='container' style={{ marginTop: '80px' }}>
                <h2 className='my-3 text-center'>NewsScope Top {this.capitalizeFirstLetter(this.category)} News</h2>

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
                                            date={ele.publishedAt} theme={this.props.theme} />
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
