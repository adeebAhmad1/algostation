import React, { Component, createContext } from "react";

import firebase from "../config/Firebase";

export const AuthContext = createContext();

export default class AuthContextProvider extends Component {
  state = {
    isAuth: false,
    user: {}
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      user
       ? this.setState({ isAuth: true, user }) 
       : this.setState({ isAuth: false, user: {} });
    });
  };
  render() {
    return (
      <AuthContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
