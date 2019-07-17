import React, { Component } from 'react'
import './scss/modal.scss'
import {db, Cookies} from '../Shared/Globals'
//Redux Store Connection
import { connect } from 'react-redux'


export class CmParticipants extends Component {


    users = [];

    constructor(props) {
        super(props)
    
        this.state = {
             userRetreived : false,
             selectedUsers : []
        }

        this.participantSelected = this.participantSelected.bind(this)
        
    }

    componentDidMount(){
      db.collection('Users').get().then( res => {
        res.docs.map( doc => {
          this.users.push(doc.data());
          this.setState({
            userRetreived : true
          })
        });
      })
    }

    participantSelected(event){
      if(this.state.selectedUsers.length > 0){
        for (let i = 0; i < this.state.selectedUsers.length; i++) {
          if(event.target.id === this.state.selectedUsers[i].userId  && event.target.checked === false){
            this.state.selectedUsers.splice(
              this.state.selectedUsers.indexOf(this.state.selectedUsers[i]),1
            ); 
            break;
          } else if(event.target.id !== this.state.selectedUsers[i].userId  && event.target.checked === true){
            this.state.selectedUsers.push({
              userId : event.target.id,
              isUserSelected : event.target.checked
            })
            break;
          }
        }
      } else{
        this.state.selectedUsers.push({
          userId : event.target.id,
          isUserSelected : event.target.checked
        })
      }
      this.props.storeSelectedPeople(this.state.selectedUsers)
    }
    
    render() {
      if(this.state.userRetreived){
        return (
            <>
            <div className="participants tab-pane fade" id="participants" role="tabpanel">
            <div className="search">
              <form>
                <input type="search" className="form-control" placeholder="Search" />
                <button type="submit" className="btn prepend">
                  <i data-eva="search" />
                </button>
              </form>
            </div>
            <h4>Users</h4>
            <hr />
            <ul className="users">
            {
              this.users.map( (e, i) => {
                let loc = e.address.split(',');
                let len = loc.length;
                let add = `${loc[len - 2]}, ${loc[len - 1]}`
                if(e.id === new Cookies().getCookie('uid')){
                  return;
                }
              return <li key={e.id}>
                <div className="status online">
                  <img src={e.img} alt="avatar" />
                  <i data-eva="radio-button-on" />
                </div>
                <div className="content">
                  <h5>{e.name}</h5>
                  <span>{add}</span>
                </div>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id={e.id} onChange={this.participantSelected} />
                  <label className="custom-control-label" htmlFor={e.id} />
                </div>
              </li>
              })
            }
            </ul>
          </div>
        
            </>
        )
        } else{
          return "Retrieving Please Wait..."
        }
    }
}
function mapStateToProps(state){
	return({
		payload : state
	})
}

function mapDispatchToProps(dispatch){
	return({
		storeSelectedPeople : (data) =>{
			dispatch({
        type : 'SELECTED_PEOPLE',
        payload : data
			})
		}
	})
}
export default connect(mapStateToProps, mapDispatchToProps)(CmParticipants)
