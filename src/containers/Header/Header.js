import React, {Component} from 'react';

import HeaderComp from '../../components/HeaderComp/HeaderComp';

class Header extends Component {
  

  render () {
    return (
      <HeaderComp
        all={this.props.all}
        clan={this.props.clan}
        friends={this.props.friends}
        news={this.props.news}
        changeActive={this.props.changeActive}
      />
    )
  }
}

export default Header;