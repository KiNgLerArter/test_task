import React, { Component } from 'react';

import MainComp from '../../components/MainComp/MainComp';
import socket from '../../https/socket';

class Main extends Component {
  state = {
    skipCoeff: 0,
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

  refScrollBottom = React.createRef();
  refScrollTop = React.createRef();

  uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  componentDidMount = () => {

    socket.on('message', (data) => {
      console.log(data)
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

    if (this.props.all && (this.props.lang === 'RU')) {
      this.refScrollBottom.current.scrollIntoView({block: "center", behavior: "smooth"});

      this.refScrollTop.current.addEventListener("scroll", () => {
          if (this.refScrollTop.current) {
            if (this.refScrollTop.current.scrollTop === 0) {
            let limit = 10;
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
              })
          }
        }
      })
    }

  }

  componentDidUpdate = () => {
    if (this.refScrollBottom.current) {
      this.refScrollBottom.current.scrollIntoView({block: "center", behavior: "smooth"});
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
        messages={this.state.messages}
        history={this.state.history}
      />
    )
  }
}

export default Main;