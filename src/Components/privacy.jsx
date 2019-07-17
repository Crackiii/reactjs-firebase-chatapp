import React, { Component } from 'react'
import './scss/settings.scss'

export class privacy extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <>
            <li>
            <a href="#Link" className="headline" data-toggle="collapse" aria-expanded="false" data-target="#privacy" aria-controls="privacy">
              <div className="title">
                <h5>Privacy &amp; Safety</h5>
                <p>Control your privacy settings</p>
              </div>
              <i data-eva="arrow-ios-forward" />
              <i data-eva="arrow-ios-downward" />
            </a>
            <div className="content collapse" id="privacy" data-parent="#preferences">
              <div className="inside">
                <ul className="options">
                  <li>
                    <div className="headline">
                      <h5>Safe Mode</h5>
                      <label className="switch">
                        <input type="checkbox" defaultChecked />
                        <span className="slider round" />
                      </label>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </li>
                  <li>
                    <div className="headline">
                      <h5>History</h5>
                      <label className="switch">
                        <input type="checkbox" defaultChecked />
                        <span className="slider round" />
                      </label>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </li>
                  <li>
                    <div className="headline">
                      <h5>Camera</h5>
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round" />
                      </label>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </li>
                  <li>
                    <div className="headline">
                      <h5>Microphone</h5>
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

export default privacy
