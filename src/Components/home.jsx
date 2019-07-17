import React, { Component } from 'react'
import {app, Cookies } from '../Shared/Globals';
import {Redirect} from 'react-router-dom';
import laoder from './assets/img/loader.svg';
import './scss/home.scss'

export class home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             authenticated : null
        }
    }

    componentDidMount(){
        app.auth().onAuthStateChanged( user => {
            if(user){
                console.log(user);
                this.setState({
                    authenticated : true
                })
                new Cookies().createCookie('uid', user.uid, '10 minutes');
            } else{
                this.setState({
                    authenticated : false
                })
            }
        })
    }
    
    render() {
        if(this.state.authenticated){
            return <Redirect to='/app' />
        } else if(this.state.authenticated === false){
            return <Redirect to='/login' />
        }
        return (
            <>
                <div className='loader-img'>
                    <img src={laoder} alt='img' />
                </div>
                <div className='loader-text'>
                    Loading, Please Wait...
                </div>
            </>
        )
    }
}

export default home
