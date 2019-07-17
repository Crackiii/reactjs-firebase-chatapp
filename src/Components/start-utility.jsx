import React, { Component } from 'react'

export class StartUtility extends Component {
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
                <li><a href="#users2" className="active" data-toggle="tab" role="tab" aria-controls="users2" aria-selected="true">Users</a></li>
                <li><a href="#files2" data-toggle="tab" role="tab" aria-controls="files2" aria-selected="false">Files</a></li>
              </ul>
              <div className="tab-content">
                {/* Start of Users */}
                {/* End of Users */}
                {/* Start of Files */}
                {/* End of Files */}
              </div>
            </div>
          </div>
          
            </>
        )
    }
}

export default StartUtility
