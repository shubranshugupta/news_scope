import React, { Component } from 'react'

export class About extends Component {
    constructor(props) {
        super(props);
        props.setProgress(100);
    }

    accordianStyle = {
        lightTheme: {
            backgroundColor: '#F8F9FA',
            color: '#212529',
            borderColor: "black"
        },
        darkTheme: {
            backgroundColor: '#030018',
            color: '#ECF9FF',
            borderColor: "white"
        }
    }

    render() {
        return (
            <div className="container accordion" id="accordionExample" style={{ textAlign: 'justify', marginTop: '100px', marginBottom: '20px' }}>
                <h2 className='my-3 text-center'>About NewsScope</h2>
                <div className="accordion-item" style={this.props.theme==='light'?this.accordianStyle.lightTheme:this.accordianStyle.darkTheme}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={this.props.theme==='light'?this.accordianStyle.lightTheme:this.accordianStyle.darkTheme}>
                            About NewsScope
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>
                                <strong>NewsScope </strong>is a website that provides news from various categories, including world news, politics, business, entertainment, sports, science, and technology. This website is designed to offer users an all-in-one solution for keeping up to date with the latest news from different fields.
                            </p>
                            <p>
                                The user-friendly interface of NewsScope makes it easy for users to navigate and find news stories of interest. The website has a clean layout with sections dedicated to each category, and users can quickly jump to the section they want to browse. The latest news stories from each category are displayed on the homepage, along with their headlines and brief summaries. Users can click on the stories to read the full articles.
                            </p>
                            <p>
                                Overall, NewsScope is a comprehensive news website that offers news stories from various categories and sources. Its user-friendly interface and powerful search function make it easy for users to stay up to date with the latest news and events. With its commitment to quality journalism and user-submitted content, NewsScope is an excellent resource for anyone looking to stay informed about current events.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={this.props.theme==='light'?this.accordianStyle.lightTheme:this.accordianStyle.darkTheme}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={this.props.theme==='light'?this.accordianStyle.lightTheme:this.accordianStyle.darkTheme}>
                            Benefits of Using an NewsScope
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>
                                One of the benefits of using NewsScope is the ability to access news stories from a variety of sources. The website sources news from reputable publications such as the New York Times, BBC, and CNN, among others. This allows users to get a well-rounded view of current events from different perspectives.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={this.props.theme==='light'?this.accordianStyle.lightTheme:this.accordianStyle.darkTheme}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={this.props.theme==='light'?this.accordianStyle.lightTheme:this.accordianStyle.darkTheme}>
                            About Me
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>
                                <span role="img" aria-label="bye">👋</span> Hi, I'm <strong>Shubhranshu Gupta</strong>.<br />
                                I have good knowledge & skills in the Latest and High-End Technologies like Machine Learning,
                                Deep Learning, and Computer Vision. I love the integration of technologies as it helps us to learn
                                many new things and also helps in improving our troubleshooting skills.I am a young, energetic, and
                                geeky individual with an endless desire to learn.Apart from technical knowledge. Also, I like to play video
                                games <span role="img" aria-label="console">🎮</span> and watch SciFi movies <span role="img" aria-label="movie">🎬</span> in my leisure time.
                            </p>

                            <span role="img" aria-label="pc">💻</span> <strong>My Technical Skills</strong>
                            <ul>
                                <li>
                                    Artificial Intelligence: Machine Learning, Deep Learning, Data Science, Computer Vision
                                </li>
                                <li>
                                    AI Tools: Sklearn, Tensorflow, Keras, Pandas, Matplotlib, Numpy, NLTK, Pytorch.
                                </li>
                                <li>
                                    DevOps: Docker, Git, Github
                                </li>
                                <li>
                                    Cloud Computing: AWS
                                </li>
                                <li>
                                    Web Development: HTML, CSS, JS, Flask
                                </li>
                                <li>
                                    Database: MySQL
                                </li>
                                <li>
                                    Hardware: Arduino, Raspberry PI
                                </li>
                                <li>
                                    OS: Ubuntu, RHEL7/8
                                </li>
                                <li>
                                    Programming Language: Python, C, C++
                                </li>
                            </ul>
                            <span role="img" aria-label="face">👱‍♂️</span><span role="img" aria-label="pc">💻</span> <strong>My Profile</strong>
                            <ul>
                                <li>
                                    <a href="https://www.hackerrank.com/shubranshugupta" target="_blank" rel="noopener noreferrer">HackerRank</a>
                                </li>
                                <li>
                                    <a href="https://www.codingninjas.com/codestudio/profile/4765a9e6-eb81-4c59-97f8-5b438dc17e28" target="_blank" rel="noopener noreferrer">CodeStudio</a>
                                </li>
                                <li>
                                    <a href="https://github.com/shubranshugupta" target="_blank" rel="noopener noreferrer">Github</a>
                                </li>
                                <li>
                                    <a href="https://www.kaggle.com/shubhranshugupta24" target="_blank" rel="noopener noreferrer">Kaggle</a>
                                </li>
                                <li>
                                    <a href="https://hub.docker.com" target="_blank" rel="noopener noreferrer">DockerHub</a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/shubhranshu-gupta24/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                </li>
                            </ul>
                            <p>
                                Knowledge increase by sharing not by saving. When I am not coding, I like to write a blog about what
                                I have learned on the @Medium Platform. You can follow me there if you want my work.<span role="img" aria-label="peace">✌️</span><br />
                                <span role="img" aria-label="pin">📌</span> <a href="https://medium.com/@shubhranshugupta" target="_blank" rel="noopener noreferrer">Medium</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}