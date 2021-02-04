import React, { Component } from 'react'

import Header from './containers/Header/Header';
import Main from './containers/Main/Main';
import Footer from './containers/Footer/Footer';
import socket from './https/socket';

import classes from './App.module.css';

class App extends Component {

  state = {
    lang: 'RU',
    opened: true,
    all: true,
    clan: false,
    friends: false,
    news: false,
    postMessage: false
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

  onChangeLangHandler = (e) => {
    let lang = e.target.value;
    this.setState((prevState) => {
      return {
        ...prevState,
        lang: lang
      }
    })
  }

  onCloseChatHandler = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        opened: !prevState.opened
      }
    })
  }

  onPushMessageHandler = (e) => {
    const message = {
      from: "Martsynovskie",
      text: e.target.value
    };
    
    socket.emit("message", message, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("success");
      }
    });

    this.setState({
      postMessage: e.target.value
    })
  }

  onPushedMessageHandler = () => {
    this.setState({
      postMessage: false
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
          changeLang={(e) => this.onChangeLangHandler(e)}
          closeChat={this.onCloseChatHandler}
        />
        <Main 
          {...this.state}
          pushedMessage={this.onPushedMessageHandler}
        />
        <Footer 
          pushUrMessage={(e) => this.onPushMessageHandler(e)}
        />
      </div>
    );
  }
  
}

export default App;
