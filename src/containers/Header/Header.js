import React, {Component} from 'react';

import HeaderComp from '../../components/HeaderComp/HeaderComp';

class Header extends Component {
  
  render () {
    return (
      <HeaderComp
        {...this.props}
      />
    )
  }
}

export default Header;