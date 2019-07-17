import React, { Component } from 'react'
import './scss/modal.scss'
import {connect} from 'react-redux'
import { db, makeId, rtdb, Cookies } from '../Shared/Globals'

export class CmDetails extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
          compose_title : '',
          compose_message : '',
          formValid : false,
          compose_btn : 'Compose Now',
          chatsComposedLists : []
        }

        this.handleCompose = this.handleCompose.bind(this)
        this.HCInput = this.HCInput.bind(this)
    }
    
    HCInput(event){
      this.setState({
        [event.target.name] : event.target.value
      })
      if(this.state.compose_title !== '' && this.state.compose_message !== ''){
        this.setState({ formValid : true })
      } else{
        this.setState({ formValid : false })
      }
    }

    handleCompose(event){
      event.preventDefault()
      this.setState({ compose_btn : 'Composing, Please Wait...', formValid : false })
      if(Object.keys(this.props.data).length === 1){
        const loc = `${new Cookies().getCookie('uid')}_${new Date().getTime()}`

        //Get the Following Users through the specific document ID
        Promise.all([
          db.collection('Users').doc(new Cookies().getCookie('uid')).get(),
          db.collection('Users').doc(this.props.data['0'].userId).get()
        ]).then( e => {
          //Get the Chats array from the object
          let c = e.map( lists => lists.data().chats)
          //push new values which is 'loc' in my case to the Chats arrays
          c.forEach( e => { e.push(loc) })

          //Make two Other promises to update the chat arrays with the upated values.
          Promise.all([
            db.collection('Users').doc(new Cookies().getCookie('uid')).update({ chats : c[0] }),
            db.collection('Users').doc(this.props.data['0'].userId).update({ chats : c[1] }),
            rtdb.ref(`Users/${new Cookies().getCookie(`uid`)}`).update({ chats : c[0] }),
            rtdb.ref(`Users/${this.props.data[`0`].userId}`).update({ chats : c[1] }),
          ]).then( e => {
              
              console.log("Docments Updated")
              rtdb.ref(`Chats/${loc}/${new Date().getTime()}`).set({
                message : this.state.compose_message,
                timestamp : new Date().getTime(),
                isRead : false,
                createdBy : new Cookies().getCookie('uid')
              }, (err => console.log(err)) ).then(() => {
                db.collection(`Individuals`).add({
                  createdBy : new Cookies().getCookie('uid'),
                  createdAt : new Date().getTime(),
                  participant : this.props.data['0'].userId,
                  chatLocation : loc,
                })
                .then( e => {
                  this.setState({ compose_btn : 'Chat Composed Successfully...', formValid : true })
                  console.log(e.id);
                })
                .catch( er => console.log(er));
              })
          })
          
        })



      } else if(Object.keys(this.props.data).length > 1){
        const loc = `${new Cookies().getCookie('uid')}_${new Date().getTime()}`
        const p = Object.values(this.props.data).map( e => e.userId )
        rtdb.ref(`Chats/${loc}/${makeId()}`).set({
          message : this.state.compose_message,
          timestamp : new Date().getTime(),
          isRead : false,
          createdBy : new Cookies().getCookie('uid')
        }, (err => console.log(err)) ).then(() => {
          db.collection(`Groups`).add({
            createdBy : new Cookies().getCookie('uid'),
            createdAt : new Date().getTime(),
            participant : p,
            chatLocation : loc,
            groupName : this.state.compose_title
          })
          .then( e => {
            this.setState({ compose_btn : 'Chat Composed Successfully...', formValid : true })
            console.log(e.id);
          })
          .catch( er => console.log(er));
        })

      } else{
        this.setState({ compose_btn : 'Compose Now', formValid : false })
      }
    }

    render() {
        return (
            <>
            <div className="details tab-pane fade show active" id="details" role="tabpanel">
            <form onSubmit={this.handleCompose} method='POST'>
              <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control" placeholder="What's the topic / Group Title ?" name='compose_title' value={this.state.compose_title} onChange={this.HCInput} />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea className="form-control" placeholder="Hmm, are you friendly? Type Something..." name='compose_message' value={this.state.compose_message} onChange={this.HCInput}/>
              </div>
              <div className="modal-footer">
                  <button type="submit" className="rcaBtn" disabled={!this.state.formValid}>
                    {this.state.compose_btn}
                  </button>
              </div>
            </form>
          </div>
          
            </>
        )
    }
}

let mapStateToProps = (state) => {
  return({
    data : state.appReducer
  })
}
let mapDispatchToProps = () => { return({}) }

export default connect(mapStateToProps, mapDispatchToProps)(CmDetails)
