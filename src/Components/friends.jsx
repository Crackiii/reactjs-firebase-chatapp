import React, { Component } from 'react'
import './scss/users.scss'
// Images
import avatarMale1 from '../Components/assets/img/avatars/avatar-male-1.jpg'



export class friends extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <>
            <div className="tab-pane fade" id="friends" role="tabpanel">
            <div className="top">
              <form>
                <input type="search" className="form-control" placeholder="Search" />
                <button type="submit" className="btn prepend"><i data-eva="search" /></button>
              </form>
            </div>
            <div className="middle">
              <h4>Friends</h4>
              <hr />
              <ul className="users">
                <li>
                  <a href="#Link">
                    <div className="status online"><img src={avatarMale1} alt="avatar" /><i data-eva="radio-button-on" /></div>
                    <div className="content">
                      <h5>Ham Chuwon</h5>
                      <span>Florida, US</span>
                    </div>
                    <div className="icon"><i data-eva="person" /></div>
                  </a>
                </li>
           </ul>
            </div>
          </div>
          
            </>
        )
    }
}

export default friends
