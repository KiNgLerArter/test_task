import React, { Component } from 'react';

import MainComp from '../../components/MainComp/MainComp';

class Main extends Component {
  mainCompRef = React.createRef();

  componentDidMount = () => {
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
      />
    )
  }
}

export default Main;