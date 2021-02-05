import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MainComp from '../../components/MainComp/MainComp';
import socket from '../../https/socket';

class Main extends Component {
  refScrollBottom = React.createRef();
  refScrollTop = React.createRef();

  state = {
    scrollHeight: this.refScrollTop.current ? this.refScrollTop.current.scrollHeight : 0,
    skipCoeff: 0,
    limit: 10,
    history: [
      {
        from: 'IDontKnow',
        text: 'Прикольно. все СОС потрачены, теперь игра закончена))) ', 
        createdAt: '14:27',
        createdAtReal: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 14, 27, 0, 0),
        id: 'artificialMes1',
        icon: 'sun',
        myMessage: false,
        lvl: Math.floor(Math.random() * 10 + 1)
      },
      {
        from: 'BivOld',
        text: 'Я думал, что они будут пополнятся разв н-ное время. А тут реально игра закончена', 
        createdAt: '14:28',
        createdAtReal: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 14, 28, 0, 0),
        id: 'artificialMes2',
        icon: 'btc',
        myMessage: false,
        lvl: Math.floor(Math.random() * 10 + 1)
      },
      {
        from: 'Nigativ',
        text: 'wac можно только купить', 
        createdAt: '14:31',
        createdAtReal: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 14, 31, 0, 0),
        id: 'artificialMes3',
        badge: 'moderator',
        icon: 'sun',
        myMessage: false,
        lvl: Math.floor(Math.random() * 10 + 1)
      },
      {
        from: 'Skylifesky',
        text: 'Цена 1 wac =0,1$ и цена не изменится', 
        createdAt: '14:31',
        createdAtReal: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 14, 31, 0, 0),
        id: 'artificialMes4',
        badge: 'admin',
        icon: 'btc',
        myMessage: false,
        lvl: Math.floor(Math.random() * 10 + 1)
      },
      {
        text: 'Сегодня идем на Германию', 
        createdAt: '10:21',
        createdAtReal: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 10, 21, 0, 0),
        id: 'artificialMes5',
        myMessage: true,
        lvl: Math.floor(Math.random() * 10 + 1)
      }
    ]
  }

  pushMyMessage = () => {
    const messageDate = new Date();
    this.setState((prevState) => {
      return {
        ...prevState,
        history: [
          ...prevState.history,
          {
            text: this.props.postMessage, 
            createdAt: messageDate.getHours() + ':' + messageDate.getMinutes(),
            createdAtReal: messageDate,
            id: this.uuidv4(),
            myMessage: true,
            lvl: Math.floor(Math.random() * 10 + 1)
          }
        ]
      }
    });
    this.props.pushedMessage();
  }

  uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  componentDidMount = () => {

    socket.on('message', (data) => {
      let msDate = new Date(Date.parse(data.createdAt));
      let hours = msDate.getHours()
      let minutes = msDate.getMinutes() < 10 ? '0' + msDate.getMinutes() : msDate.getMinutes();
      let message = {
        from: data.from,
        text: data.text,
        createdAt: hours + ':' + minutes,
        createdAtReal: msDate,
        id: this.uuidv4(),
        myMessage: false,
        lvl: Math.floor(Math.random() * 10 + 1)
      }
      this.setState((prevState) => {
        return {
          ...prevState,
          history: [
            ...prevState.history,
            message
          ]
        }
      })
    });

    if (this.props.opened) {
      if (this.props.all && this.props.lang === 'RU') {
        this.refScrollBottom.current.scrollIntoView({block: "center", behavior: "smooth"});
  
        this.refScrollTop.current.addEventListener("scroll", () => {
          if (this.refScrollTop.current) {
            if (this.refScrollTop.current.scrollTop === 0) {
              let limit = this.state.limit;
              let skip = this.state.skipCoeff * limit;
              fetch('https://test-task-chat-4tmzp.ondigitalocean.app/api/messages?skip=' + skip + '&limit=' + limit)
                .then((response) => response.json())
                .then((result) => {
                  let msDate, hours, minutes;
                  result.forEach(element => {
                    msDate = new Date(Date.parse(element.createdAt));
                    hours = msDate.getHours();
                    minutes = msDate.getMinutes() < 10 ? '0' + msDate.getMinutes() : msDate.getMinutes();
                    element.createdAt = hours + ':' + minutes;
                    element.createdAtReal = msDate;
                    element.lvl = Math.floor(Math.random() * 10 + 1);
                    element.id = this.uuidv4();
                  });
  
                  this.setState((prevState) => {
                    return {
                      ...prevState,
                      skipCoeff: prevState.skipCoeff + 1,
                      history: [
                        ...result,
                        ...prevState.history
                      ]
                    }
                  })
                });

              // this.refScrollTop.current.scrollTop = this.refScrollTop.current.scrollHeight - this.state.scrollHeight - Number(window.getComputedStyle(this.refScrollTop.current).height.replace('px','')*1.5);

            }
          }
        })
      }
    }

  }

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    // if (this.refScrollBottom.current) {
    //   this.refScrollBottom.current.scrollIntoView({block: "center", behavior: "smooth"});
    // }
    if (prevState.skipCoeff !== this.state.skipCoeff ) {
      if (this.state.skipCoeff > 0) {
        console.log(new Date().getMinutes() + ':' + new Date().getSeconds() + ' [Main.js]:' + 'lastHistoryElem')
        document.getElementById('lastHistoryElem').scrollIntoView({block: "center", behavior: "smooth"})
      }
    }

    if (prevProps.postMessage && this.props.postMessage === false) {
      if (document.getElementById('lastMyMessage')) {
        document.getElementById('lastMyMessage').scrollIntoView({block: "center", behavior: "smooth"});
      }
    }

    if (this.props.postMessage) {
      this.pushMyMessage();
    }
  }

  render() {

    return (
      <MainComp 
        ref={{
          refScrollBottom: this.refScrollBottom,
          refScrollTop: this.refScrollTop
        }}
        {...this.props}
        coeff={this.state.skipCoeff}
        history={this.state.history}
        limit={this.state.limit}
      />
    )
  }
}

export default Main;