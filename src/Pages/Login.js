import React, { Component } from 'react'

export class Login extends Component {
  render() {
    return (
      <h1>Login</h1>
    )
  }
}

export default Login

/*
POST: http://localhost:3004/login
Body: 
- email
- password
Response: 
accessToken

Save accessToken to sessionStorage
*/