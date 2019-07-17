import React, { Component } from 'react'
import './assets/css/bootstrap.css'
import './scss/auth.scss'
import AuthImage from './assets/img/chat-bg.jpg'
import Profile from './assets/img/avatars/avatar-male-1.jpg'
import { Link, Redirect } from 'react-router-dom';
import {app, db, rtdb,  Cookies} from '../Shared/Globals'
import { Maps } from '../Shared/Maps'
import FileUploader from './file-uploader'
import {connect} from 'react-redux'

export class register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fname:'',
             lname:'',
             email:'',
             pass:'',
             pass2:'',
             username : '',
             place : '',
             bio : '',
             imgURL : null,
             user : null,
             isRegFormValid : false,
             isInfoFormValid : false,
             regFormBtn : 'Join Now',
             userInfoBtn : 'Finish Now',
             regFormError : {
                 error : false,
                 data : null
             }, 
             registered : false,
             userInfoGot : false,
             authenticated : null,
             closeFileUploader : false
        }

        this.handleRegisterForm = this.handleRegisterForm.bind(this)
        this.registerUser = this.registerUser.bind(this)
        this.toggleFileUploader = this.toggleFileUploader.bind(this)
        this.submitUserInfo = this.submitUserInfo.bind(this)
        this.handleUserInfoForm = this.handleUserInfoForm.bind(this)
    }

    componentDidMount(){
		if(new Cookies().getCookie('uid')){
			this.setState({
				authenticated : true
			})
        }
	}

    handleRegisterForm(event){
        this.setState({
            [event.target.name]:event.target.value
        })
        if(this.state.fname !== '' &&
           this.state.lname !== '' &&
           this.state.email !== '' &&
           this.state.pass  !== '' &&
           this.state.pass2 !== '' 
          ){
            this.setState({
                isRegFormValid : true
            })
          } else{
            this.setState({
                isRegFormValid : false
            })
        }
    }

    registerUser(event){
        event.preventDefault();
        
        if(this.state.isRegFormValid){
            this.setState({
                regFormBtn : 'Joining ...',
                isRegFormValid : false
            })
            app.auth().createUserWithEmailAndPassword(this.state.email, this.state.pass)
            .then( res => {
                new Maps().fromLatLong( geo => {
                    this.setState({
                        user : res.user,
                        registered : true,
                        place : geo
                    })
                })
            })
            .catch( error =>{
                this.setState({
                    isRegFormValid : true,
                    regFormBtn : 'Try Again'
                })
                let err = {...this.state}
                err.regFormError.error = true
                this.setState({
                    err
                })
                switch(error.code){
                    case 'auth/email-already-in-use':
                    case 'auth/weak-password':
                    case 'auth/network-request-failed':
                        {
                            let err = {...this.state}
                            err.regFormError.data = error.message
                            this.setState({
                                err
                            })
                            break;
                        } 
                        default:
                }
            })
        } else{
        }

    }

    handleUserInfoForm(event){
        this.setState({
            [event.target.name]:event.target.value
        })
        if(this.state.username !== '' &&
           this.state.loc !== '' &&
           this.state.bio !== '' 
          ){
            this.setState({
                isInfoFormValid : true
            })
          } else{
            this.setState({
                isInfoFormValid : false
            })
        }
    }

    submitUserInfo(event){
        event.preventDefault()
        if(this.state.isInfoFormValid){
            this.setState({
                userInfoBtn : 'Finishing ...',
                isInfoFormValid : false
            })
                    this.setState({
                        imgURL : this.props.data
                    })
                    
                    this.state.user.updateProfile({
                        displayName :  `${this.state.fname} ${this.state.lname}`,
                        photoURL : this.state.imgURL
                    })
                    .then( () => {
                        db.collection('Users').doc(this.state.user.uid).set({
                            name : `${this.state.fname} ${this.state.lname}`,
                            email : this.state.email,
                            time : new Date().getTime(),
                            id : this.state.user.uid,
                            address : this.state.place,
                            username : this.state.username,
                            bio : this.state.bio,
                            img : this.state.imgURL,
                            chats : []
                        }).then( () => {
                            rtdb.ref(`Users/${this.state.user.uid}`).set({
                                name : `${this.state.fname} ${this.state.lname}`,
                                email : this.state.email,
                                time : new Date().getTime(),
                                id : this.state.user.uid,
                                address : this.state.place,
                                username : this.state.username,
                                bio : this.state.bio,
                                img : this.state.imgURL,
                                chats : []
                            }).then( () => {
                                new Cookies().createCookie("uid", this.state.user.uid, '10 days');
                                this.setState({
                                    userInfoBtn : 'Success !',
                                    userInfoGot : true
                                })
                            })
                        }).catch( error =>  {
                        })
                    })
        }
    }
    
    toggleFileUploader(){
        if(this.state.closeFileUploader){
            this.setState({ closeFileUploader : false })
        } else{
            this.setState({ closeFileUploader : true })
        }
    }
    
    render() {
        let e = ''
        if(this.state.regFormError.error){
           e =  <div className='error'>{this.state.regFormError.data}</div>
        } else{ e = '' }
        if(this.state.userInfoGot){
            return <Redirect to='/app' />
        }
        if(this.state.authenticated === true){
            return <Redirect to='/app' />
        }
        return (
            <>  
                {
                    this.state.closeFileUploader ? 
                    <div className='modal-bg'>
                        <span className='mbg-close' onClick={this.toggleFileUploader} > × </span>
                        <FileUploader ></FileUploader>
                    </div> : ''
                }
                <div className='container auth-row'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='auth-img'>
                                <img src={AuthImage} alt='auth' />
                            </div>
                        </div>
                        { !this.state.registered ?
                            <div className='col-6' >
                                <div className='auth'>
                                    <div className='auth-head'> Join Our Chat Community Now !</div>
                                    <div className='auth-form'>

                                        <form className='row' method='POST' onSubmit={this.registerUser}>
                                            <div className='col-12'> {e} </div>
                                            <div className='rcaInput col-6'>
                                                <input type='text' placeholder='First Name' name='fname' onChange={this.handleRegisterForm} />
                                            </div>
                                            <div className='rcaInput col-6'>
                                                <input type='text' placeholder='Last Name' name='lname' onChange={this.handleRegisterForm} />
                                            </div>
                                            <div className='rcaInput col-12'>
                                                <input type='email' placeholder='Email Address' name='email' onChange={this.handleRegisterForm} />
                                            </div>
                                            <div className='rcaInput col-12'>
                                                <input type='Password' placeholder='Password' name='pass' onChange={this.handleRegisterForm} />
                                            </div>
                                            <div className='rcaInput col-12'>
                                                <input type='Password' placeholder='Repeat Password' name='pass2' onChange={this.handleRegisterForm} />
                                            </div>
                                            <div className='btn-space col-12'>
                                                <button className='rcaBtn' type='submit' disabled={!this.state.isRegFormValid}> {this.state.regFormBtn} </button>
                                                <div className='small-font' style={{paddingTop:'10px'}}> Already have an account ? <Link to={'/login'} > Login Now</Link> </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div> : ''
                        }
                        {this.state.registered ? 
                            <div className='col-6' >
                                <div className='auth'>
                                    <div className='auth-form'>
                                        <div className='user-profile'>
                                            <div className='up-img-sec'>
                                                {
                                                    this.props.data === undefined ? <img src={Profile} alt='profile' /> : <img src={this.props.data} alt='profile' />
                                                }
                                                
                                                <div className='rcaInput'>
                                                    <button  className='profile-change' onClick={this.toggleFileUploader}> Upload New </button>
                                                </div>
                                            </div>
                                        </div>
                                        <form className='row' method='POST' onSubmit={this.submitUserInfo}>
                                            <div className='rcaInput col-12'>
                                                <input type='text' name='username' value={this.state.username} onChange={this.handleUserInfoForm} placeholder='Username @nadykhan'/>
                                            </div>
                                            <div className='rcaInput col-12'>
                                                <input type='text' name='place' value={this.state.place} onChange={this.handleUserInfoForm} placeholder='Location - Pakistan'/>
                                            </div>
                                            <div className='rcaInput col-12'>
                                                <textarea type='text' name='bio' value={this.state.bio} onChange={this.handleUserInfoForm} placeholder='Bio' rows='3'></textarea>
                                            </div>
                                            <div className='btn-left col-12'>
                                                <button className='rcaBtn' type='submit' disabled={!this.state.isInfoFormValid}> {this.state.userInfoBtn} </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div> : ''
                        }
                    </div>
                </div>
            </>
        )
    }
}

function mapToStateProps(state){
    return({
        data : state.appReducer.img
    })
}
function mapToDispatchProps(){
    return({})
}

export default connect(mapToStateProps, mapToDispatchProps)(register) 
