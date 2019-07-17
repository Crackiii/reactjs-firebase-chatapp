import React, { Component } from 'react'
import Icon from 'react-eva-icons'
import './scss/navigation.scss'

// Images
import logo from '../Components/assets/img/logo.png'
import profile from '../Components/assets/img/avatars/avatar-male-1.jpg'

export class navigation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <>
                {/* Start of Navigation */}
<nav className="navigation">
<div className="container">
  <a href="#link" className="logo" rel="home"> <img src={logo} alt="pic" /> </a>
  <ul className="nav" role="tablist">
    <li><a href="#conversations" className="active" data-toggle="tab" role="tab" aria-controls="conversations" aria-selected="true"> <Icon name="message-square"
    size="medium"     // small, medium, large, xlarge
    animation={{
      type: "pulse",  // zoom, pulse, shake, flip
      hover: true,
      infinite: false 
    }}/>  </a></li>
    <li><a href="#friends" data-toggle="tab" role="tab" aria-controls="friends" aria-selected="false"><i data-eva="people" data-eva-animation="pulse" /></a></li>
    <li><a href="#notifications" data-toggle="tab" role="tab" aria-controls="notifications" aria-selected="false"><i data-eva="bell" data-eva-animation="pulse" /></a></li>
    <li><a href="#settings" data-toggle="tab" role="tab" aria-controls="settings" aria-selected="false"><i data-eva="settings" data-eva-animation="pulse" /></a></li>
    <li><button type="button" className="btn mode"><i data-eva="bulb" data-eva-animation="pulse" /></button></li>
    <li><button type="button" className="btn"><img src={profile} alt="avatar" /><i data-eva="radio-button-on" /></button></li>
  </ul>
</div>
</nav>
{/* End of Navigation */}

            </>
        )
    }
}

export default navigation
