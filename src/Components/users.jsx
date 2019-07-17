import React, { Component } from 'react'
import './scss/users.scss'
// Images
import avatarMale1 from '../Components/assets/img/avatars/avatar-male-1.jpg'
import avatarMale2 from '../Components/assets/img/avatars/avatar-male-2.jpg'
import avatarMale3 from '../Components/assets/img/avatars/avatar-male-3.jpg'
import avatarMale4 from '../Components/assets/img/avatars/avatar-male-4.jpg'
import avatarMale5 from '../Components/assets/img/avatars/avatar-male-5.jpg'
import avatarMale6 from '../Components/assets/img/avatars/avatar-male-6.jpg'

export class users extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <>
            <div className="tab-pane fade active show" id="users" role="tabpanel">
            <h4>Users</h4>
            <hr />
            <ul className="users">
              <li>
                <div className="status online"><img src={avatarMale1} alt="avatar" /><i data-eva="radio-button-on" /></div>
                <div className="content">
                  <h5>Ham Chuwon</h5>
                  <span>Florida, US</span>
                </div>
                <div className="dropdown">
                  <button type="button" className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-eva="more-vertical" /></button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <button type="button" className="dropdown-item">Edit</button>
                    <button type="button" className="dropdown-item">Share</button>
                    <button type="button" className="dropdown-item">Delete</button>
                  </div>
                </div>
              </li>
              <li>
                <div className="status offline"><img src={avatarMale2} alt="avatar" /><i data-eva="radio-button-on" /></div>
                <div className="content">
                  <h5>Quincy Hensen</h5>
                  <span>Shanghai, China</span>
                </div>
                <div className="dropdown">
                  <button type="button" className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-eva="more-vertical" /></button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <button type="button" className="dropdown-item">Edit</button>
                    <button type="button" className="dropdown-item">Share</button>
                    <button type="button" className="dropdown-item">Delete</button>
                  </div>
                </div>
              </li>
              <li>
                <div className="status online"><img src={avatarMale3} alt="avatar" /><i data-eva="radio-button-on" /></div>
                <div className="content">
                  <h5>Mark Hog</h5>
                  <span>Olso, Norway</span>
                </div>
                <div className="dropdown">
                  <button type="button" className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-eva="more-vertical" /></button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <button type="button" className="dropdown-item">Edit</button>
                    <button type="button" className="dropdown-item">Share</button>
                    <button type="button" className="dropdown-item">Delete</button>
                  </div>
                </div>
              </li>
              <li>
                <div className="status offline"><img src={avatarMale4} alt="avatar" /><i data-eva="radio-button-on" /></div>
                <div className="content">
                  <h5>Sanne Viscaal</h5>
                  <span>Helena, Montana</span>
                </div>
                <div className="dropdown">
                  <button type="button" className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-eva="more-vertical" /></button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <button type="button" className="dropdown-item">Edit</button>
                    <button type="button" className="dropdown-item">Share</button>
                    <button type="button" className="dropdown-item">Delete</button>
                  </div>
                </div>
              </li>
              <li>
                <div className="status offline"><img src={avatarMale5} alt="avatar" /><i data-eva="radio-button-on" /></div>
                <div className="content">
                  <h5>Alex Just</h5>
                  <span>London, UK</span>
                </div>
                <div className="dropdown">
                  <button type="button" className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-eva="more-vertical" /></button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <button type="button" className="dropdown-item">Edit</button>
                    <button type="button" className="dropdown-item">Share</button>
                    <button type="button" className="dropdown-item">Delete</button>
                  </div>
                </div>
              </li>
              <li>
                <div className="status online"><img src={avatarMale6} alt="avatar" /><i data-eva="radio-button-on" /></div>
                <div className="content">
                  <h5>Arturo Thomas</h5>
                  <span>Vienna, Austria</span>
                </div>
                <div className="dropdown">
                  <button type="button" className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-eva="more-vertical" /></button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <button type="button" className="dropdown-item">Edit</button>
                    <button type="button" className="dropdown-item">Share</button>
                    <button type="button" className="dropdown-item">Delete</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
           
            </>
        )
    }
}

export default users
