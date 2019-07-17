import React, { Component } from 'react'
import Account from './account'
import Privacy from './privacy'
import Notification from './notification'
import Integrations from './integration'
import Appearance from './appearance'

// Images
import avatarMale1 from '../Components/assets/img/avatars/avatar-male-1.jpg'

export class settings extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <>
            <div className="settings tab-pane fade" id="settings" role="tabpanel">
            <div className="user">
              <label>
                <input type="file" />
                <img src={avatarMale1} alt="avatar" />
              </label>
              <div className="content">
                <h5>Ham Chuwon</h5>
                <span>Florida, US</span>
              </div>
            </div>
            <h4>Settings</h4>
            <ul id="preferences">
              {/* Start of Account */}
                <Account />
              {/* End of Account */}
              {/* Start of Privacy & Safety */}
                <Privacy />
              {/* End of Privacy & Safety */}
              {/* Start of Notifications */}
                <Notification />
              {/* End of Notifications */}
              {/* Start of Integrations */}
                <Integrations />
              {/* End of Integrations */}
              {/* Start of Appearance */}
                <Appearance />
              {/* End of Appearance */}
            </ul>
          </div>
          
            </>
        )
    }
}

export default settings
