import React, {Component} from 'react';

import FooterComp from '../../components/FooterComp/FooterComp';

class Footer extends Component {
  render () {
    return (
      <FooterComp 
        pushUrMessage={this.props.pushUrMessage}
      />
    )
  }
}

export default Footer;