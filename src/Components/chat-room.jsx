import React, { Component } from 'react'
import Utility from './utility'
import {app, Cookies} from '../Shared/Globals'
import { Redirect } from 'react-router-dom'
// Images
import NoChats from '../Components/assets/img/select-chat.svg'
import { connect } from 'react-redux'
import { db, rtdb, makeId } from '../Shared/Globals'
import { Time } from '../Shared/Time';

export class ChatRoom extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
            logout : false,
            toastText : '',
            displayToast : false,
            toastTimeOut : 5000,
            userHaveChats : false,
            chatSelected : false,
            chatUser : '',
            userMessages : '',
            typed_message : ''
        }
        this.signOutUser = this.signOutUser.bind(this)
        this.handleMessageSending = this.handleMessageSending.bind(this)
        this.handleTypedMessage = this.handleTypedMessage.bind(this)
    }

    signOutUser(){
      this.setState({
        displayToast : true,
        toastText : 'Signing Out, Please Wait...'
      })
      app.auth().signOut()
      .then( res => {
        new Cookies().deleteAllCookies();
        this.setState({
          logout : true
        })
      })

    }

    componentDidMount(){
      console.log("CHAT ROOM MOUNTED...")
      this.loadUserData()
      app.auth().onAuthStateChanged(user => {
        if(user){
          this.setState({
            displayToast : true,
            toastText : `Welcome, ${user.displayName}`
          })
        }
      })
    }

    loadUserData(cb, cb2){
      console.log("LOAD USER DATA MOUNTED...")
      if(!this.props.chatData.chatSelected){
        return
      }
      let d = this.props.chatData
      db.collection('Users').doc(d.to).get().then( user => {
        rtdb.ref(`Chats/${d.loc}`).orderByChild('timestamp').on('value', activeChatData => {
          cb()
          cb2(user, activeChatData.val())
        })
      })
    }

    handleTypedMessage(event){
      console.log("HANDLE TYPED MESSAGE MOUNTED...")
      this.setState({
        [event.target.name] : event.target.value
      })
    }
    
    handleMessageSending(event){
      console.log("HANDLE TYPED MESSAGE SENDING MOUNTED...")
      event.preventDefault()
      if(this.state.typed_message.length > 5){
        rtdb.ref(`Chats/${this.props.chatData.loc}/${new Date().getTime()}`).set({
          message : this.state.typed_message,
          timestamp : new Date().getTime(),
          isRead : false,
          createdBy : this.props.chatData.from
        }, (err => console.log(err))).then(()=>{
          document.querySelector("#scroll").scrollTo(0,document.querySelector("#scroll").scrollHeight);
        })
      }
    }


    
    render() {

      if(this.state.logout === true){
        return <Redirect to='/login' />
      }
      if(this.state.displayToast){
        let _this = this;
        setTimeout(function(){
          _this.setState({ displayToast : false })
        },5000)
      }
      if(this.props.chatData.chatSelected){
        console.log("CHAT DATA SELECTED WITHIN RENDERED MOUNTED...")
        this.loadUserData(this.props.loadingDataNow, (user, messages) => {
          this.setState({
            chatUser : user.data(),
            userMessages : Object.values(messages),
            chatSelected : true
          })
          document.querySelector("#scroll").scrollTo(0,document.querySelector("#scroll").scrollHeight);
        })
      }
      
      return(
        <>
        { 
          this.state.displayToast ?
            <div className='toast-center'> <div className='toaster' >{this.state.toastText}</div> </div>
          : ''
        }
        {
          this.state.chatSelected ?
          <div className="tab-pane fade show active" id="chat1" role="tabpanel" >

            <div className="item">
              <div className="content">
                <div className="container">
                  <div className="top">
                    <div className="headline">
                      <img src={this.state.chatUser.img} alt="avatar" />
                      <div className="content">
                        <h5>{this.state.chatUser.name}</h5>
                        <span>Away</span>
                      </div>
                    </div>
                    <ul>
                      <li>
                        <button type="button" className="btn">
                          <i data-eva="video" data-eva-animation="pulse" />
                        </button>
                      </li>
                      <li>
                        <button type="button" className="btn">
                          <i data-eva="phone" data-eva-animation="pulse" />
                        </button>
                      </li>
                      <li>
                        <button type="button" className="btn" data-toggle="modal" data-target="#compose" >
                          <i data-eva="person-add" data-eva-animation="pulse" />
                        </button>
                      </li>
                      <li>
                        <button type="button" className="btn" onClick={this.signOutUser}>
                          <i data-eva="log-out-outline" data-eva-animation="pulse" />
                        </button>
                      </li>
                      <li>
                        <button type="button" className="btn" data-utility="open">
                          <i data-eva="info" data-eva-animation="pulse" />
                        </button>
                      </li>
                      <li>
                        <button type="button" className="btn round" data-chat="open">
                          <i data-eva="arrow-ios-back" />
                        </button>
                      </li>
                      <li>
                        <button type="button" className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                          <i data-eva="more-vertical" data-eva-animation="pulse" />
                        </button>
                        <div className="dropdown-menu">
                          <button type="button" className="dropdown-item">
                            <i data-eva="video" />Video call
                          </button>
                          <button type="button" className="dropdown-item">
                            <i data-eva="phone" />Voice call
                          </button>
                          <button type="button" className="dropdown-item" data-toggle="modal" data-target="#compose" >
                            <i data-eva="person-add" />Add people
                          </button>
                          <button type="button" className="dropdown-item" onClick={this.signOutUser} >
                            <i data-eva="log-out-outline" />Logout
                          </button>
                          <button type="button" className="dropdown-item" data-utility="open" >
                            <i data-eva="info" />Information
                          </button>
                          
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="middle scrolling-container" id="scroll">
                  <div className="container">
                    <ul className=''>
                      {/* <li className='to-message'>
                        <div className="content">
                          <div className="message ">
                            <div className="bubble">
                              <p>Right MEssage</p>
                            </div>
                          </div>
                          <span>{new Time().formatAMPM(new Time().timeStampToTime(new Date().getTime()))}</span>
                        </div>
                      </li>
                      <li className='from-message'>
                        <img src={avatarMale3} alt="avatar" />
                        <div className="content">
                          <div className="message">
                            <div className="bubble">
                              <p>Left Message</p>
                            </div>
                          </div>
                          <span>{new Time().formatAMPM(new Time().timeStampToTime(new Date().getTime()))}</span>
                        </div>
                      </li> */}
                      {
                        this.state.userMessages.map( (message, idx) => {
                          if(message.createdBy === new Cookies().getCookie('uid')){
                            return (
                              <li key={idx} className='to-message'>
                                <div className="content">
                                  <div className="message">
                                    <div className="bubble">
                                      <p>{message.message}</p>
                                    </div>
                                  </div>
                                  <span>{new Time().formatAMPM(new Time().timeStampToTime(message.timestamp))}</span>
                                </div>
                              </li>
                            )
                          } else{
                            return (
                              <li key={idx} className='from-message'>
                                <img src={this.state.chatUser.img} alt="avatar" />
                                <div className="content">
                                  <div className="message">
                                    <div className="bubble">
                                      <p>{message.message}</p>
                                    </div>
                                  </div>
                                  <span>{new Time().formatAMPM(new Time().timeStampToTime(message.timestamp))}</span>
                                </div>
                              </li>
                            )
                          }
                        })
                      }
                    </ul>
                  </div>
                </div>
                <div className="container">
                  <div className="bottom">
                    <form onSubmit={this.handleMessageSending}>
                      <textarea className="form-control" placeholder="Type message..." rows={1} name='typed_message' value={this.state.typed_message} onChange={this.handleTypedMessage}/>
                      <button type="submit" className="btn prepend">
                        <i data-eva="paper-plane" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              {/* Start of Utility */}
                <Utility />
              {/* End of Utility */}
            </div>
          </div> : 
            <div className='no-chats'>
              <div className='nc-img'>
                <img src={NoChats} alt='no-chats' /> 
                <div className='nc-text'> Select a Chat </div>
              </div>
            </div>
        }
        </>
      )
    }
}

function mapToStateProps(state){
  console.log("REDUCER CALLED FROM CHAT ROOM 1")
  return({
    chatData : state.appReducer
  })
}
function mapToDispatchProps(dispatch){
  console.log("REDUCER CALLED FROM CHAT ROOM 2")

  return({
    loadingDataNow : function(){
      dispatch({
        type : 'GET_CHAT_DATA',
        payload : {
          chatSelected : false
        }
      })
    }
  })
}

export default connect(mapToStateProps, mapToDispatchProps)(ChatRoom)
