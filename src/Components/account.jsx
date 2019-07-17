import React, { Component } from 'react'
import './scss/settings.scss'

export class account extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        
    }
    
    render() {
        return (
            <>
            <li>
            <a href='#link' className='headline' data-toggle='collapse' aria-expanded='false' data-target='#account' aria-controls='account'>
              <div className='title'>
                <h5>Account</h5>
                <p>Update your profile details</p>
              </div>
              <i data-eva='arrow-ios-forward' />
              <i data-eva='arrow-ios-downward' />
            </a>
            <div className='content collapse' id='account' data-parent='#preferences'>
              <div className='inside'>
                <form className='account'>
                  <div className='form-row'>
                    <div className='col-sm-6'>
                      <div className='form-group'>
                        <label>First Name</label>
                        <input type='text' className='form-control' placeholder='First name' defaultValue='Ham' />
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='form-group'>
                        <label>Last Name</label>
                        <input type='text' className='form-control' placeholder='Last name' defaultValue='Chuwon' />
                      </div>
                    </div>
                  </div>
                  <div className='form-group'>
                    <label>Email Address</label>
                    <input type='email' className='form-control' placeholder='Enter your email address' defaultValue='hamchuwon@gmail.com' />
                  </div>
                  <div className='form-group'>
                    <label>Password</label>
                    <input type='password' className='form-control' placeholder='Enter your password' defaultValue={123456} />
                  </div>
                  <div className='form-group'>
                    <label>Biography</label>
                    <textarea className='form-control' placeholder='Tell us a little about yourself' defaultValue={''} />
                  </div>
                  <button type='submit' className='btn primary'>Save settings</button>
                </form>
              </div>
            </div>
          </li>
          
            </>
        )
    }
}

export default account
