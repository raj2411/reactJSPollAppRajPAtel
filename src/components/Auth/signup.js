import React, { Component } from 'react';
import { useState } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

class Signup extends Component{
    constructor(){
        super()
        this.state = {
            email:'',
            username:'',
            password:'',
        }
        this.changeEmail = this.changeEmail.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changePassword = this.changePassword.bind(this)
    }
    changeUsername = (e)=>{
        this.setState({
            username:e.target.value
        })    
    }

    changeEmail = (e)=>{
        this.setState({
            email:e.target.value
        })    
    }

    changePassword = (e)=>{
        this.setState({
            password:e.target.value
        })    
    }

    onSubmit = (e)=>{
        e.preventDefault() 

        const reg = {
            username : this.state.username,
            email : this.state.email,
            password:this.state.passwor       
        }

        axios.post('http://localhost:4000/api/signup',reg)
        .then(res=>console.log(res.data))

        this.setState({
            email:'',
            username:'',
            password:'',
        })
    }
    render(){
    return (

      <div className="Container">
          <div className='form-div'>
              <form onSubmit={this.onSubmit}>

                  <input type = 'text'
                  placeholder = 'username'
                  onChange={this.changeUsername}
                  value = {this.state.username}
                  className='form-control form-group'
                  />

                  <input type = 'text'
                  placeholder = 'email'
                  onChange={this.changeEmail}
                  value = {this.state.email}
                  className='form-control form-group'
                  />

                 <input type = 'text'
                  placeholder = 'password'
                  onChange={this.changePassword}
                  value = {this.state.password}
                  className='form-control form-group'
                  />

                  <input type='submit' className='btn btn-danger btn-block' value='submit'/>
              </form>
          </div>
      </div>

    );}
}
  export default Signup;