import React, { Component } from 'react';
import api from '../services/api';
import auth from '../services/auth';

export default class Login extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  handleSubmit = (event) => {
    api.post('/auth/login', this.state)
    .then(response => {
      auth.login(() => {
        console.log('Hurrra!');
      });
    })
  }
  render() {
    return(
      <div>
        <input name="email" onChange={this.handleChange} placeholder="E-mail" />
        <input type="password" name="password" onChange={this.handleChange} placeholder="Password" />
        <button onClick={this.handleSubmit}>Login</button>
      </div>
    );
  }
}