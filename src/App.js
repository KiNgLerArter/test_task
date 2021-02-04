import React, { Component } from 'react';

import Header from './containers/Header/Header';
import Main from './containers/Main/Main';
import Footer from './containers/Footer/Footer';

import classes from './App.module.css';

class App extends Component {
  state = {
    all: true,
    clan: false,
    friends: false,
    news: false
  }

  onChangeActiveHandler = (type) => {
    this.setState({
      all: type === 'all' ? true : false,
      clan: type === 'clan' ? true : false,
      friends: type === 'friends' ? true : false,
      news: type === 'news' ? true : false
    })
  }

  render() {
    return (
      <div className={classes.App}>
        <Header 
          all={this.state.all}
          clan={this.state.clan}
          friends={this.state.friends}
          news={this.state.news}
          changeActive={(type) => this.onChangeActiveHandler(type)}
        />
        <Main 
          all={this.state.all}
          clan={this.state.clan}
          friends={this.state.friends}
          news={this.state.news}
        />
        <Footer />
      </div>
    );
  }
  
}

export default App;
