import React, { Component } from 'react'
import ChatRoom from './chat-room'
import './scss/chat.scss'

export class chat extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    componentDidMount(){
      require('../Components/assets/js/swipe.min')
    }
    
    render() {
        return (
            <>
            <div className="chat">
              <div className="tab-content">
                {/* Start of Chat Room */}
                  <ChatRoom />
                {/* End of Chat Room */}
              </div>
            </div>
            </>
        )
    }
}

export default chat
