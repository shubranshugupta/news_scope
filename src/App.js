import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsBody from './components/NewsBody';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { About } from './components/About';
import Footer from './components/Footer';

export default class App extends Component {
  constructor() {
    super();
    this.pageSize = 8;
    this.apiKey = process.env.REACT_APP_NEWS_API;
    this.state = {
      progress: 10,
      theme: 'light'
    }
  }

  bodyStyle = {
    lightTheme: {
      '--bs-body-bg': '#F9F9F9',
      '--bs-body-color': 'black'
    },
    darkTheme: {
      '--bs-body-bg': '#1a1a2e',
      '--bs-body-color': '#ECF9FF'
    }
  }

  toggleTheme = () => {
    if (this.state.theme === 'light') {
      this.setState({ theme: 'dark' });
      document.body.style.backgroundColor = this.bodyStyle.darkTheme['--bs-body-bg'];
      document.body.style.color = this.bodyStyle.darkTheme['--bs-body-color'];
    }
    else {
      this.setState({ theme: 'light' });
      document.body.style.backgroundColor = this.bodyStyle.lightTheme['--bs-body-bg'];
      document.body.style.color = this.bodyStyle.lightTheme['--bs-body-color'];
    }
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <>
        <Router>
          <LoadingBar
            color='#aa24f0'
            progress={this.state.progress}
          />
          <Navbar toggleTheme={this.toggleTheme} theme={this.state.theme}/>

          <Switch>
            <Route exact path="/" element={
              <NewsBody setProgress={this.setProgress} theme={this.state.theme} key="general" pageSize={this.pageSize} apiKey={this.apiKey} category={"general"} />
            } />

            <Route exact path="/about" element={
              <About theme={this.state.theme} setProgress={this.setProgress}/>
            } />

            <Route exact path="/business" element={
              <NewsBody setProgress={this.setProgress} theme={this.state.theme} key="business" pageSize={this.pageSize} apiKey={this.apiKey} category={"business"} />
            } />

            <Route exact path="/entertainment" element={
              <NewsBody setProgress={this.setProgress} theme={this.state.theme} key="entertainment" pageSize={this.pageSize} apiKey={this.apiKey} category={"entertainment"} />
            } />

            <Route exact path="/health" element={
              <NewsBody setProgress={this.setProgress} theme={this.state.theme} key="health" pageSize={this.pageSize} apiKey={this.apiKey} category={"health"} />
            } />

            <Route exact path="/science" element={
              <NewsBody setProgress={this.setProgress} theme={this.state.theme} key="science" pageSize={this.pageSize} apiKey={this.apiKey} category={"science"} />
            } />

            <Route exact path="/sports" element={
              <NewsBody setProgress={this.setProgress} theme={this.state.theme} key="sports" pageSize={this.pageSize} apiKey={this.apiKey} category={"sports"} />
            } />

            <Route exact path="/technology" element={
              <NewsBody setProgress={this.setProgress} theme={this.state.theme} key="technology" pageSize={this.pageSize} apiKey={this.apiKey} category={"technology"} />
            } />
          </Switch>

          <Footer theme={this.state.theme} />
        </Router>
      </>
    )
  }
}

