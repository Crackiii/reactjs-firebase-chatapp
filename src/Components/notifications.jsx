import React, { Component } from 'react'

export class notifications extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <>
            <div className="tab-pane fade" id="notifications" role="tabpanel">
            <div className="top">
              <form>
                <input type="search" className="form-control" placeholder="Search" />
                <button type="submit" className="btn prepend"><i data-eva="search" /></button>
              </form>
            </div>
            <div className="middle">
              <h4>Notifications</h4>
              <hr />
              <ul className="notifications">
                <li>
                  <div className="round"><i data-eva="person-done" /></div>
                  <p>Quincy has joined to <strong>Squad Ghouls</strong> group.</p>
                </li>
                <li>
                  <div className="round"><i data-eva="lock" /></div>
                  <p>You need change your password for security reasons.</p>
                </li>
                <li>
                  <div className="round"><i data-eva="attach" /></div>
                  <p>Mark attached the file <strong>workbox.js</strong>.</p>
                </li>
                <li>
                  <div className="icon round"><i data-eva="gift" /></div>
                  <p>Sara has a birthday today. Wish her all the best.</p>
                </li>
                <li>
                  <div className="round"><i data-eva="person" /></div>
                  <p>Sanne has accepted your friend request.</p>
                </li>
              </ul>
            </div>
          </div>
          
            </>
        )
    }
}

export default notifications
