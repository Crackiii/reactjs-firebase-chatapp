import React, { Component } from 'react'
import './scss/utility.scss'

import Users from './users'
import Files from './files'

export class utility extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <>
            <div className="utility">
            <div className="container">
              <button type="button" className="close" data-utility="open"><i data-eva="close" /></button>
              <button type="button" className="btn primary" data-toggle="modal" data-target="#compose">Add people</button>
              <ul className="nav" role="tablist">
                <li><a href="#users" className="active" data-toggle="tab" role="tab" aria-controls="users" aria-selected="true">Users</a></li>
                <li><a href="#files" data-toggle="tab" role="tab" aria-controls="files" aria-selected="false">Files</a></li>
              </ul>
              <div className="tab-content">
                {/* Start of Users */}
                  <Users />
                {/* End of Users */}
                {/* Start of Files */}
                  <Files />
                {/* End of Files */}
              </div>
            </div>
          </div>
           
            </>
        )
    }
}

export default utility
