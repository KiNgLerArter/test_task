import React, {Component} from 'react';

import HeaderComp from '../../components/HeaderComp/HeaderComp';

class Header extends Component {
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

  render () {
    return (
      <HeaderComp
        all={this.state.all}
        clan={this.state.clan}
        friends={this.state.friends}
        news={this.state.news}
        changeActive={(type) => this.onChangeActiveHandler(type)}
      />
    )
  }
}

export default Header;