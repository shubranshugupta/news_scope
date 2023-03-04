import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {
    static propTypes = {
        title: PropTypes.string,
        desc: PropTypes.string,
        imageUrl: PropTypes.string,
        newsUrl: PropTypes.string,
        author: PropTypes.string,
        date: PropTypes.string
    }

    newsItemStyle = {
        lightTheme: {
            backgroundColor: '#F8F9FA',
            color: '#212529'
        },
        darkTheme: {
            backgroundColor: '#030018'
        }
    }

    render() {
        var { title, desc, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="card m-3" href={newsUrl}
            style={this.props.theme==='light'?this.newsItemStyle.lightTheme:this.newsItemStyle.darkTheme}>
                <img src={imageUrl ? imageUrl : "default_img.jpg"} className="card-img-top" ref={img => this.img = img}
                onError={()=>{this.img.src = "default_img.jpg"}} height="150px" width="200px" alt='news'/>
                <div className="card-body">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill" style={{left:'50%', zIndex:'1', backgroundColor:'#F73D93'}}>
                        {source}
                    </span>
                    <h5 className="card-title">{title ? title.slice(0, 40)+"..." : "Undefine"}</h5>
                    <p className="card-text"><small className="text-muted">
                        By {author ? author : "Unknown"} on {date ? new Date(date).toGMTString() : "Unknown"}
                    </small></p>
                    <p className="card-text">{desc ? desc.slice(0, 60)+"..." : "No Description"}</p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-info">Go To Website</a>
                </div>
            </div>
        )
    }
}

export default NewsItem
