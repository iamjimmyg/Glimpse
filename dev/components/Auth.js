import React, { Component } from 'react'
import { connect } from 'react-redux';
import { login, logout } from '../actions/authActionCreators';

class Auth extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('auth props:', this.props)
    return (
      <div style={{ marginTop: '10px' }}>
        { !this.props.auth.isAuthenticated ? (
          <ul className="list-inline">
            <li><button className="btn btn-primary" onClick={this.props.login}>Login</button></li>
          </ul>
        ) : (
          <span>
            <img src={this.props.auth.profile.profPic} height="40px" />
            <span>Welcome, {this.props.auth.profile.username} </span>
            <button className="btn btn-primary" onClick={this.props.logout}>Logout</button>
          </span>
        )}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    auth: state.auth
  };
}

var authentication = connect(mapStateToProps, {
  login: login,
  logout: logout
})(Auth);
export default authentication;
