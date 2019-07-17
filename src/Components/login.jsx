import React, { Component } from 'react'
import './scss/auth.scss'
import AuthImage from './assets/img/chat-bg.jpg'
import { Link, Redirect } from 'react-router-dom';
import {app, Cookies} from '../Shared/Globals';

export class login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user_email : '',
             user_password : '',
             formValid : false,
             loginBtn : 'Login Now',
             formError : {
                error : false,
                data : null
            }, 
            loggedIn : false,
            authenticated : null
        }

        this.loginUser = this.loginUser.bind(this)
        this.handleLoginChange = this.handleLoginChange.bind(this)
    }
    componentDidMount(){
        if(new Cookies().getCookie('uid')){
            this.setState({
                authenticated : true
            })
        }
    }
    handleLoginChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
        if(this.state.user_email !== '' && this.state.user_password !== ''){
            this.setState({
                formValid : true
            })
        } else{
            this.setState({
                formValid : true
            })
        }
    }
    loginUser(event){
        event.preventDefault()

        if(this.state.formValid){
            this.setState({
                loginBtn : 'Getting In ...',
                formValid : false
            })
            app.auth().signInWithEmailAndPassword(this.state.user_email, this.state.user_password)
            .then( res  => {
                new Cookies().createCookie("uid", res.user.uid, '10 days');
                this.setState({
                    loggedIn : true
                })
            })
            .catch( error => {
                console.log(error.code);
                this.setState({
                    formValid : true,
                    loginBtn : 'Try Again'
                })
                let err = {...this.state}
                err.formError.error = true
                this.setState({
                    err
                })
                switch(error.code){
                    case 'auth/network-request-failed':
                    case 'auth/invalid-email':
                    case 'auth/user-not-found':
                    case 'auth/wrong-password':
                        {
                            let err = {...this.state}
                            err.formError.data = error.message
                            this.setState({
                                err
                            })
                            break;
                        } 
                        default:
                }
            })
        }

    }
    render() {

        let e = '';
        if(this.state.formError.error){
           e =  <div className='error'>{this.state.formError.data}</div>
        } else{ e = '' }
        if(this.state.loggedIn || this.state.authenticated === true){
            return <Redirect to='/app' />
        }

        return (
            <>
            <div className='container auth-row'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='auth-img'>
                                <img src={AuthImage} alt='auth' />
                            </div>
                        </div>

                        <div className='col-6' >
            <div className='auth'>
                <div className='auth-head'>Login Now</div>
                <div className='auth-form'>
                    <form className='row' method='POST' onSubmit={this.loginUser} >
                        <div className='col-12'> {e} </div>
                        <div className='rcaInput col-12'>
                            <input type='email' placeholder='Email Address' name='user_email' value={this.state.user_email} onChange={this.handleLoginChange} />
                        </div>
                        <div className='rcaInput col-12'>
                            <input type='password' placeholder='Password' name='user_password' value={this.state.user_password} onChange={this.handleLoginChange}  />
                        </div>
                        <div className='btn-space col-12'>
                            <button className='rcaBtn' type='submit' disabled={!this.state.formValid} > {this.state.loginBtn} </button>
                            <div className='small-font' style={{paddingTop:'10px'}}> Don't have an account ? <Link to={'/register'} > Join Now</Link> </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>


                    </div>
                </div>
            </>
        )
    }
}

export default login
