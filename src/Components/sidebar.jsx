import React, { Component } from 'react'
import Discussion from './discussion'
import Friends from './friends'
import Notifications from './notifications'
import Settings from './settings'

import './scss/side-bar.scss'
import './scss/discussion.scss'
import './scss/notifications.scss'
import './scss/settings.scss'

export class sidebar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <>
               {/* Start of Sidebar */}
                  <div className="sidebar">
                    <div className="container">
                        <div className="tab-content">
                           {/* Start of Discussions */}
                              <Discussion />
                           {/* End of Discussions */}
                           {/* Start of Friends */}
                              <Friends />
                           {/* End of Friends */}
                           {/* Start of Notifications */}
                              <Notifications />
                           {/* End of Notifications */}
                           {/* Start of Settings */}
                              <Settings />
                           {/* End of Settings */}
                        </div>
                    </div>
                  </div>
                {/* End of Sidebar */}
            </>
        )
    }
}

export default sidebar
