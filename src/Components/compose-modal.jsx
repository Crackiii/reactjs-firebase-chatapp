import React, { Component } from 'react'
import CMDetails from './cm-details'
import CMParticipants from './cm-participants'
import './scss/modal.scss'




export class ComposeModal extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <>
            <div
            className="modal fade"
            id="compose"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="compose"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5>Compose</h5>
                  <button
                    type="button"
                    className="btn round"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <i data-eva="close" />
                  </button>
                </div>
                <div className="modal-body">
                  <ul className="nav" role="tablist">
                    <li>
                      <a
                        href="#details"
                        className="active"
                        data-toggle="tab"
                        role="tab"
                        aria-controls="details"
                        aria-selected="true"
                      >
                        Details
                      </a>
                    </li>
                    <li>
                      <a
                        href="#participants"
                        data-toggle="tab"
                        role="tab"
                        aria-controls="participants"
                        aria-selected="false"
                      >
                        Participants
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    {/* Start of Details */}
                      <CMDetails />
                    {/* End of Details */}
                    {/* Start of Participants */}
                      <CMParticipants />
                    {/* End of Participants */}
                  </div>
                </div>

              </div>
            </div>
          </div>
          
            </>
        )
    }
}

export default ComposeModal
