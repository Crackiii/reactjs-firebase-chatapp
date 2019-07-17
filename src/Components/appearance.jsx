import React, { Component } from 'react'
import './scss/settings.scss'

export class appearance extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <>
            <li>
            <a
              href="#Link"
              className="headline"
              data-toggle="collapse"
              aria-expanded="false"
              data-target="#appearance"
              aria-controls="appearance"
            >
              <div className="title">
                <h5>Appearance</h5>
                <p>Customize the look of Swipe</p>
              </div>
              <i data-eva="arrow-ios-forward" />
              <i data-eva="arrow-ios-downward" />
            </a>
            <div
              className="content collapse"
              id="appearance"
              data-parent="#preferences"
            >
              <div className="inside">
                <ul className="options">
                  <li>
                    <div className="headline">
                      <h5>Lights</h5>
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round mode" />
                      </label>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          
            </>
        )
    }
}

export default appearance
