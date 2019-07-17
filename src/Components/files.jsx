import React, { Component } from 'react'
import './scss/files.scss'
// Images
import avatarMale1 from '../Components/assets/img/avatars/avatar-male-1.jpg'
import avatarMale2 from '../Components/assets/img/avatars/avatar-male-2.jpg'
import avatarMale3 from '../Components/assets/img/avatars/avatar-male-3.jpg'
import avatarMale4 from '../Components/assets/img/avatars/avatar-male-4.jpg'
import avatarMale5 from '../Components/assets/img/avatars/avatar-male-5.jpg'
import avatarMale6 from '../Components/assets/img/avatars/avatar-male-6.jpg'

export class files extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <>
            <div className="tab-pane fade" id="files" role="tabpanel">
            <h4>Files</h4>
            <div className="upload">
              <label>
                <input type="file" />
                <span>Drag &amp; drop files here</span>
              </label>
            </div>
            <ul className="files">
              <li>
                <ul className="avatars">
                  <li><button className="btn round"><i data-eva="file-text" /></button></li>
                  <li><a href="#Link"><img src={avatarMale1} alt="avatar" /></a></li>
                </ul>
                <div className="meta">
                  <a href="#Link"><h5>workbox.js</h5></a>
                  <span>2kb</span>
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
                <ul className="avatars">
                  <li><button className="btn round"><i data-eva="folder" /></button></li>
                  <li><a href="#Link"><img src={avatarMale2} alt="avatar" /></a></li>
                </ul>
                <div className="meta">
                  <a href="#Link"><h5>bug_report</h5></a>
                  <span>1kb</span>
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
                <ul className="avatars">
                  <li><button className="btn round"><i data-eva="briefcase" /></button></li>
                  <li><a href="#Link"><img src={avatarMale3} alt="avatar" /></a></li>
                </ul>
                <div className="meta">
                  <a href="#Link"><h5>nuget.zip</h5></a>
                  <span>7mb</span>
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
                <ul className="avatars">
                  <li><button className="btn round"><i data-eva="image-2" /></button></li>
                  <li><a href="#Link"><img src={avatarMale4} alt="avatar" /></a></li>
                </ul>
                <div className="meta">
                  <a href="#Link"><h5>clearfix.jpg</h5></a>
                  <span>1kb</span>
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
                <ul className="avatars">
                  <li><button className="btn round"><i data-eva="folder" /></button></li>
                  <li><a href="#Link"><img src={avatarMale5} alt="avatar" /></a></li>
                </ul>
                <div className="meta">
                  <a href="#Link"><h5>package</h5></a>
                  <span>4mb</span>
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
                <ul className="avatars">
                  <li><button className="btn round"><i data-eva="file-text" /></button></li>
                  <li><a href="#Link"><img src={avatarMale6} alt="avatar" /></a></li>
                </ul>
                <div className="meta">
                  <a href="#Link"><h5>plugins.js</h5></a>
                  <span>3kb</span>
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

export default files
