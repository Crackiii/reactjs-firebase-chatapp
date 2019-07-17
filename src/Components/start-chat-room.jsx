import React, { Component } from 'react'

export class StartChatRoom extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <>
            <div className="tab-pane fade" id="chat2" role="tabpanel">
            <div className="item">
              <div className="content">
                <div className="container">
                  <div className="top">
                    <div className="headline">
                      <img src="dist/img/avatars/avatar-group-1.jpg" alt="avatar" />
                      <div className="content">
                        <h5>The Musketeers</h5>
                        <span>Group discussion</span>
                      </div>
                    </div>
                    <ul>
                      <li><button type="button" className="btn"><i data-eva="video" data-eva-animation="pulse" /></button></li>
                      <li><button type="button" className="btn"><i data-eva="phone" data-eva-animation="pulse" /></button></li>
                      <li><button type="button" className="btn" data-toggle="modal" data-target="#compose"><i data-eva="person-add" data-eva-animation="pulse" /></button></li>
                      <li><button type="button" className="btn" data-utility="open"><i data-eva="info" data-eva-animation="pulse" /></button></li>
                      <li><button type="button" className="btn round" data-chat="open"><i data-eva="arrow-ios-back" /></button></li>
                      <li><button type="button" className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-eva="more-vertical" data-eva-animation="pulse" /></button>
                        <div className="dropdown-menu">
                          <button type="button" className="dropdown-item"><i data-eva="video" />Video call</button>
                          <button type="button" className="dropdown-item"><i data-eva="phone" />Voice call</button>
                          <button type="button" className="dropdown-item" data-toggle="modal" data-target="#compose"><i data-eva="person-add" />Add people</button>
                          <button type="button" className="dropdown-item" data-utility="open"><i data-eva="info" />Information</button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="middle">
                  <div className="container">
                    <ul>
                      <li>
                        <img src="dist/img/avatars/avatar-male-3.jpg" alt="avatar" />
                        <div className="content">
                          <div className="message">
                            <div className="bubble">
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                          </div>
                          <span>07:30am</span>
                        </div>
                      </li>
                      <li>
                        <img src="dist/img/avatars/avatar-male-5.jpg" alt="avatar" />
                        <div className="content">
                          <div className="message">
                            <div className="bubble">
                              <p>Many desktop publishing packages.</p>
                            </div>
                          </div>
                          <span>11:56am</span>
                        </div>
                      </li>
                      <li>
                        <img src="dist/img/avatars/avatar-male-3.jpg" alt="avatar" />
                        <div className="content">
                          <div className="message">
                            <div className="bubble">
                              <p>It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                            </div>
                          </div>
                          <span>01:03pm</span>
                        </div>
                      </li>
                      <li>
                        <img src="dist/img/avatars/avatar-male-5.jpg" alt="avatar" />
                        <div className="content">
                          <div className="message">
                            <div className="bubble">
                              <p>It was popularised in the 1960s.</p>
                            </div>
                          </div>
                          <span>05:42pm</span>
                        </div>
                      </li>
                      <li>
                        <img src="dist/img/avatars/avatar-male-3.jpg" alt="avatar" />
                        <div className="content">
                          <div className="message">
                            <div className="bubble">
                              <p>It is a long established fact that a reader will be distracted.</p>
                            </div>
                          </div>
                          <span>08:20pm</span>
                        </div>
                      </li>
                      <li>
                        <img src="dist/img/avatars/avatar-male-5.jpg" alt="avatar" />
                        <div className="content">
                          <div className="message">
                            <div className="bubble">
                              <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                            </div>
                          </div>
                          <span>10:15pm <i data-eva="done-all" /></span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="container">
                  <div className="bottom">
                    <form>
                      <textarea className="form-control" placeholder="Type message..." rows={1} defaultValue={""} />
                      <button type="submit" className="btn prepend"><i data-eva="paper-plane" /></button>
                    </form>
                  </div>
                </div>
              </div>
              {/* Start of Utility */}
              {/* End of Utility */}
            </div>
          </div>
           
            </>
        )
    }
}

export default StartChatRoom
