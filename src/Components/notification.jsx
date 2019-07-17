import React, { Component } from 'react'
import './scss/settings.scss'

export class notification extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <>
            <li>
            <a href="#link" className="headline" data-toggle="collapse" aria-expanded="false" data-target="#alerts" aria-controls="alerts">
              <div className="title">
                <h5>Notifications</h5>
                <p>Turn notifications on or off</p>
              </div>
              <i data-eva="arrow-ios-forward" />
              <i data-eva="arrow-ios-downward" />
            </a>
            <div className="content collapse" id="alerts" data-parent="#preferences">
              <div className="inside">
                <ul className="options">
                  <li>
                    <div className="headline">
                      <h5>Pop-up</h5>
                      <label className="switch">
                        <input type="checkbox" defaultChecked />
                        <span className="slider round" />
                      </label>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </li>
                  <li>
                    <div className="headline">
                      <h5>Vibrate</h5>
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round" />
                      </label>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </li>
                  <li>
                    <div className="headline">
                      <h5>Sound</h5>
                      <label className="switch">
                        <input type="checkbox" defaultChecked />
                        <span className="slider round" />
                      </label>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </li>
                  <li>
                    <div className="headline">
                      <h5>Lights</h5>
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round" />
                      </label>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          
            </>
        )
    }
}

export default notification
