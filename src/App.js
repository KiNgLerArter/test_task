import React, { Component } from 'react'

import Header from './containers/Header/Header';
import Main from './containers/Main/Main';
import Footer from './containers/Footer/Footer';
import socket from './https/socket';

import classes from './App.module.css';

class App extends Component {
  appRef = React.createRef();

  state = {
    lang: 'RU',
    opened: true,
    pages: {
      all: true,
      clan: false,
      friends: false,
      news: false,
    },
    nickName: "Martsynovskie",
    postMessage: false
  }

  onChangeActiveHandler = (type) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        pages: {
          all: type === 'all' ? true : false,
          clan: type === 'clan' ? true : false,
          friends: type === 'friends' ? true : false,
          news: type === 'news' ? true : false
        }
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
      from: this.state.nickName,
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

  changeChatSize = (e, chatWidth, chatHeight, footerHeight, chatBottomDstnc) => {
    this.appRef.current.style.width = (e.clientX + 38) + 'px';
    document.getElementById('mainComp').style.height = (document.documentElement.clientHeight - (e.clientY + footerHeight/2) - footerHeight*2) + 'px';
    this.appRef.current.style.bottom = (document.documentElement.clientHeight - e.clientY - chatHeight) + 'px';
    const mainCompHeight = Number(window.getComputedStyle(document.getElementById('mainComp')).height.replace('px', ''));
    const mainCompWidth = Number(window.getComputedStyle(this.appRef.current).width.replace('px', ''));
    if (mainCompWidth <= chatWidth) {
      this.appRef.current.style.width = chatWidth + 'px'
    }
    if (mainCompHeight <= chatHeight - footerHeight*2) {
      document.getElementById('mainComp').style.height = (chatHeight - footerHeight*2) + 'px';
      this.appRef.current.style.bottom = '20px';
    }
    if (mainCompWidth >= document.documentElement.clientWidth - chatBottomDstnc*2) {
      this.appRef.current.style.width = (document.documentElement.clientWidth - chatBottomDstnc*2) + 'px';
    }
    if (mainCompHeight >= document.documentElement.clientHeight - chatBottomDstnc*2 - footerHeight*2) {
      document.getElementById('mainComp').style.height = (document.documentElement.clientHeight - chatBottomDstnc*2 - footerHeight*2) + 'px';
      this.appRef.current.style.bottom = (document.documentElement.clientHeight - chatBottomDstnc - chatHeight) + 'px';
    }
  }

  onResizeHandler = (e) => {
    e.target.ondragstart = () => false;
    const chatWidth = 360;
    const chatHeight = 400;
    const footerHeight = 40;
    const chatBottomDstnc = 20;

    const onMouseMove = (evt) => {
      this.changeChatSize(evt, chatWidth, chatHeight, footerHeight, chatBottomDstnc);
    }
    
    window.addEventListener('mousemove', onMouseMove);

    const deleteEvtLstnr = () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', deleteEvtLstnr);
    }

    window.addEventListener('mouseup', deleteEvtLstnr);
  }

  render() {
    return (
      <div 
        className={classes.App}
        ref={this.appRef}
      >
        <Header 
          all={this.state.pages.all}
          clan={this.state.pages.clan}
          friends={this.state.pages.friends}
          news={this.state.pages.news}
          changeActive={(type) => this.onChangeActiveHandler(type)}
          changeLang={(e) => this.onChangeLangHandler(e)}
          closeChat={this.onCloseChatHandler}
          resizeChat={(e) => this.onResizeHandler(e)}
        />
        <Main 
          {...this.state}
          pushedMessage={this.onPushedMessageHandler}
        />
        <Footer 
          pushUrMessage={(e) => this.onPushMessageHandler(e)}
          opened={this.state.opened}
        />
      </div>
    );
  }
  
}

export default App;
