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

    render() {
        var { title, desc, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="card m-3">
                <img src={imageUrl ? imageUrl : "default_img.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-info" style={{left:'50%', zIndex:'1'}}>
                        {source}
                    </span>
                    <h5 className="card-title">{title ? title.slice(0, 40) : ""}...</h5>
                    <p className="card-text"><small className="text-muted">
                        By {author ? author : "Unknown"} on {date ? new Date(date).toGMTString() : "Unknown"}
                    </small></p>
                    <p className="card-text">{desc ? desc.slice(0, 60) : ""}...</p>
                    <a href={newsUrl} target="_blank" rel="noopener" className="btn btn-sm btn-outline-warning">Go To Website</a>
                </div>
            </div>
        )
    }
}

export default NewsItem
