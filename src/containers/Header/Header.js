import React, {Component} from 'react';

import HeaderComp from '../../components/HeaderComp/HeaderComp';

class Header extends Component {
  state = {
    isOpenedMenu: false
  }

  showFullMenuHandler = () => {
    this.setState((prevState) => ({
      isOpenedMenu: !prevState.isOpenedMenu
    }))
  }
  
  render () {
    return (
      <HeaderComp
        {...this.props}
        isOpenedMenu={this.state.isOpenedMenu}
        showFullMenu={this.showFullMenuHandler}
      />
    )
  }
}

export default Header;