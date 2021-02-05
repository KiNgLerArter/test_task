import React, {Component, Fragment} from 'react';

import FooterComp from '../../components/FooterComp/FooterComp';

class Footer extends Component {
  render () {
    return (
      this.props.opened ? 
        <FooterComp 
          pushUrMessage={this.props.pushUrMessage}
        />
      :
        <Fragment/>
    )
  }
}

export default Footer;