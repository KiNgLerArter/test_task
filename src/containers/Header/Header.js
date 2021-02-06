import React, {Component} from 'react';

import HeaderComp from '../../components/HeaderComp/HeaderComp';

class Header extends Component {
  state = {
    isHeaderBig: false,
    isOpenedMenu: false
  }

  headerRef = React.createRef()

  componentDidMount = () => {
    window.addEventListener('mousemove', () => {
      if (window.getComputedStyle(this.headerRef.current).width.replace('px', '') >= 380) {
        this.setState({
          isHeaderBig: true
        })
      } else if (this.state.isHeaderBig) {
        this.setState({
          isHeaderBig: false
        })
      }
    })
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
        ref={this.headerRef}
        isHeaderBig={this.state.isHeaderBig}
      />
    )
  }
}

export default Header;