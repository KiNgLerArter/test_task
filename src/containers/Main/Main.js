import React, { Component } from 'react';

import MainComp from '../../components/MainComp/MainComp';

class Main extends Component {
  mainCompRef = React.createRef();

  componentDidMount = () => {
    this.mainCompRef.current.scrollIntoView({block: "center", behavior: "smooth"});
  }

  componentDidUpdate = () => {
    this.mainCompRef.current.scrollIntoView({block: "center", behavior: "smooth"});
  }

  render() {

    return (
      <MainComp 
        ref={this.mainCompRef}
      />
    )
  }
}

export default Main;