import React, { Component } from 'react'
import './scss/discussion.scss'

// Images
import Loader from '../Components/assets/img/loader.svg'
import Info from '../Components/assets/img/info.png'
import {db, rtdb, Cookies} from '../Shared/Globals'
import {Time} from '../Shared/Time'
import { connect } from 'react-redux'

export class discussion extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             indChats : [],
             onceAdded : false,
             indChatsRecieved : false
        }

        this.getChatData = this.getChatData.bind(this)

    }

    componentDidMount(){

      rtdb.ref(`Chats`).on('value', ()=>{
        this.getUsers()
      })

    }

    getUsers(){
      this.setState({
        indChats : []
      })
      rtdb.ref(`Users/${new Cookies().getCookie('uid')}`).once('value').then( e => {
        if(e.val().chats === undefined){
          this.setState({
            indChatsRecieved : true
          })
          return
        }
        let promises = e.val().chats.map( chatLoc => {
          return db.collection('Individuals').where('chatLocation', '==', chatLoc).get()
        });
        Promise.all(promises).then( d => {
          let chats = d.map( k => {
            return k.docs.map( doc => {
              return doc.data()
            })[0]
          })
          this.populateUsers(chats)
        })
      })
    }

    populateUsers(directChats){
      let l = 0;
      if(directChats.length === 0){
        this.setState({
          indChatsRecieved : true
        })
        return
      }

      directChats.map( (doc, idx) => {
        l = directChats.length;
        let id = '';

        if(new Cookies().getCookie('uid') === doc.createdBy){
          id = doc.participant
        } else{
          id = doc.createdBy
        }
        this.getUserInfo(id, res => {
          this.getIndividualsLastMessages(doc.chatLocation,r => {
            this.state.indChats.push({
              p : id,
              l : doc.chatLocation,
              img : res.img,
              name : res.name,
              lastMessage : r.m,
              lastMessageTime : new Time().formatAMPM(new Time().timeStampToTime(r.t)) 
            })
            if(idx === l-1){
              this.setState({
                indChatsRecieved : true,
                onceAdded : true
              })
            }
          })
        })
        return 0;
      });

    }

    getUserInfo(user, cb){
      db.collection("Users").where('id','==', user).get().then( e => {
        e.docs.map( u => {
          cb(u.data())
        })
      })
    }

    getIndividualsLastMessages(loc,cb){
        rtdb.ref(`Chats/${loc}`).orderByChild('timestamp').once('value').then( e => {
          let lm = Object.values(e.val())
          if(lm.length === 0){
            return;
          }
          cb({
            m : lm[lm.length-1].message,
            t : lm[lm.length-1].timestamp
          })
        })
    }

    getChatData(event){
      this.props.getChatData(
        new Cookies().getCookie('uid'),
        event.currentTarget.getAttribute('data-id'),
        event.currentTarget.getAttribute('data-loc')
      )
    }

    
    render() {
        return (
            <>
              <div className="tab-pane fade show active" id="conversations" role="tabpanel" >
                <div className="top">
                  <form>
                    <input type="search" className="form-control" placeholder="Search" />
                    <button type="submit" className="btn prepend">
                      <i data-eva="search" />
                    </button>
                  </form>
                  <ul className="nav" role="tablist">
                    <li>
                      <a href="#direct" className="filter-btn active" data-toggle="tab" data-filter="direct" >
                        Direct
                      </a>
                    </li>
                    <li>
                      <a href="#groups" className="filter-btn" data-toggle="tab" data-filter="groups">
                        Groups
                      </a>
                    </li>
                  </ul>
                </div>
              <div className="middle">
                <h4>Discussions</h4>
                <button type="button" className="btn round" data-toggle="modal" data-target="#compose" >
                  <i data-eva="edit-2" />
                </button>
                <hr />
                <ul className="nav discussions" role="tablist">
                  {
                    this.state.indChatsRecieved ?
                      (this.state.indChats.length === 0) && (this.state.onceAdded === false)? 
                      <div className='chatList-loader'> 
                          <div>
                            <img src={Info} alt='l' />
                            <p>No Chats found, Compose One...</p>
                          </div>
                      </div> :
                      this.state.indChats.reverse().map( e => {
                          return(
                            <li data-loc={e.l} data-id={e.p} key={e.p} onClick={this.getChatData}>
                              <a href="#Link" className="filter direct">
                                <div className="status online">
                                  <img src={e.img} alt="avatar" />
                                  <i data-eva="radio-button-on" />
                                </div>
                                <div className="content">
                                  <div className="headline">
                                    <h5>{e.name}</h5>
                                    <span>{e.lastMessageTime}</span>
                                  </div>
                                  <p>{e.lastMessage}</p>
                                </div>
                              </a>
                            </li>
                          )
                      }) 
                      
                      : <div className='chatList-loader'> 
                          <div>
                            <img src={Loader} alt='l' />
                            <p>Loading Chats, Please Wait...</p>
                          </div>
                        </div>
                  }

                </ul>
              </div>
            </div>
          
          </>
        )
    }
}

function mapToStateProps(state){
  return({})
}
function mapToDispatchProps(dispatch){
  return({
    getChatData : function(from, to, loc){
      
      dispatch({
        type : "GET_CHAT_DATA",
        payload : {
          from : from,
          to : to,
          loc : loc,
          chatSelected : true
        }
      })
    }
  })
}

export default connect(mapToStateProps, mapToDispatchProps)(discussion)
