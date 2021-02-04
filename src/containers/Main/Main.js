import React, { Component } from 'react';

import MainComp from '../../components/MainComp/MainComp';
import socket from '../../https/socket';

class Main extends Component {
  state = {
    messages: []
  }

  mainCompRef = React.createRef();

  componentDidMount = () => {
    fetch('https://test-task-chat-4tmzp.ondigitalocean.app/api/messages?skip=0&limit=15')
      .then((response) => response.json())
      .then((result) => console.log(result))

    socket.on('message', (data) => {
      console.log(data)
      let msDate = new Date(Date.parse(data.createdAt));
      let hours = msDate.getHours()
      let minutes = msDate.getMinutes()
      let message = {
        nickName: data.from,
        message: data.text,
        date: hours + ':' + minutes,
        id: data.id
      }
      this.setState((prevState) => {
        return {
          messages: [
            ...prevState.messages,
            message
          ]
        }
      })
    });

    if (this.props.all) this.mainCompRef.current.scrollIntoView({block: "center", behavior: "smooth"});
  }

  componentDidUpdate = () => {
    if (this.props.all) this.mainCompRef.current.scrollIntoView({block: "center", behavior: "smooth"});
  }

  render() {

    return (
      <MainComp 
        ref={this.mainCompRef}
        {...this.props}
        messages={this.state.messages}
      />
    )
  }
}

export default Main;