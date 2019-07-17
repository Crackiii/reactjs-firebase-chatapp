import React, { Component } from 'react'
import './scss/settings.scss'

export class integration extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <>
            <li>
            <a href="#in" className="headline" data-toggle="collapse" aria-expanded="false" data-target="#integrations" aria-controls="integrations">
              <div className="title">
                <h5>Integrations</h5>
                <p>Sync your social accounts</p>
              </div>
              <i data-eva="arrow-ios-forward" />
              <i data-eva="arrow-ios-downward" />
            </a>
            <div className="content collapse" id="integrations" data-parent="#preferences">
              <div className="inside">
                <ul className="integrations">
                  <li>
                    <button className="btn round"><i data-eva="google" /></button>
                    <div className="content">
                      <div className="headline">
                        <h5>Google</h5>
                        <label className="switch">
                          <input type="checkbox" defaultChecked />
                          <span className="slider round" />
                        </label>
                      </div>
                      <span>Read, write, edit</span>
                    </div>
                  </li>
                  <li>
                    <button className="btn round"><i data-eva="facebook" /></button>
                    <div className="content">
                      <div className="headline">
                        <h5>Facebook</h5>
                        <label className="switch">
                          <input type="checkbox" defaultChecked />
                          <span className="slider round" />
                        </label>
                      </div>
                      <span>Read, write, edit</span>
                    </div>
                  </li>
                  <li>
                    <button className="btn round"><i data-eva="twitter" /></button>
                    <div className="content">
                      <div className="headline">
                        <h5>Twitter</h5>
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="slider round" />
                        </label>
                      </div>
                      <span>No permissions set</span>
                    </div>
                  </li>
                  <li>
                    <button className="btn round"><i data-eva="linkedin" /></button>
                    <div className="content">
                      <div className="headline">
                        <h5>LinkedIn</h5>
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="slider round" />
                        </label>
                      </div>
                      <span>No permissions set</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
           
            </>
        )
    }
}

export default integration
