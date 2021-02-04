import React, { Component } from 'react'

import Header from './containers/Header/Header';
import Main from './containers/Main/Main';
import Footer from './containers/Footer/Footer';

import classes from './App.module.css';

class App extends Component {

  state = {
    lang: 'ru',
    all: true,
    clan: false,
    friends: false,
    news: false
  }

  onChangeActiveHandler = (type) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        all: type === 'all' ? true : false,
        clan: type === 'clan' ? true : false,
        friends: type === 'friends' ? true : false,
        news: type === 'news' ? true : false
      }
    })
  }

  onChangeLangHandler = (lang) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        lang: lang
      }
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
          changeLang={(lang) => this.onChangeLangHandler(lang)}
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
