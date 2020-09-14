import React from 'react';
import './App.css';
import Login from './Login';
import Home from './Home';
import firebase from './config/firebase';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null
    }

    this.authListener = this.authListener.bind(this);
  }

  authListener() {
    firebase.auth().onAuthStateChanged(email => {
      if(email) {
        this.setState({ email });
      }else {
        this.setState({ email: null});
      }
    })
  }

  componentDidMount() {
    this.authListener();
  }

  render() {
    return (
      <div>
        {this.state.email ? (<Home/>) : (<Login/>)}
      </div>
    );
  }
}
