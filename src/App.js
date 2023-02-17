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

export default class App extends Component {
  constructor() {
    super();
    this.pageSize = 8;
    this.apiKey = process.env.REACT_APP_NEWS_API;
    this.state = {
      progress: 10
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
          <Navbar />

          <Switch>
            <Route exact path="/" element={
              <NewsBody setProgress={this.setProgress} key="general" pageSize={this.pageSize} apiKey={this.apiKey} category={"general"} />
            } />

            <Route exact path="/about" element={
              <h1>about</h1>
            } />

            <Route exact path="/business" element={
              <NewsBody setProgress={this.setProgress} key="business" pageSize={this.pageSize} apiKey={this.apiKey} category={"business"} />
            } />

            <Route exact path="/entertainment" element={
              <NewsBody setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} apiKey={this.apiKey} category={"entertainment"} />
            } />

            <Route exact path="/health" element={
              <NewsBody setProgress={this.setProgress} key="health" pageSize={this.pageSize} apiKey={this.apiKey} category={"health"} />
            } />

            <Route exact path="/science" element={
              <NewsBody setProgress={this.setProgress} key="science" pageSize={this.pageSize} apiKey={this.apiKey} category={"science"} />
            } />

            <Route exact path="/sports" element={
              <NewsBody setProgress={this.setProgress} key="sports" pageSize={this.pageSize} apiKey={this.apiKey} category={"sports"} />
            } />

            <Route exact path="/technology" element={
              <NewsBody setProgress={this.setProgress} key="technology" pageSize={this.pageSize} apiKey={this.apiKey} category={"technology"} />
            } />
          </Switch>

        </Router>
      </>
    )
  }
}

