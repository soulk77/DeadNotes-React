import React, { Component } from 'react';
import { HashRouter as Router, Route,Redirect } from "react-router-dom";
import Nav from './Nav';
import Login from './login/Login';
import Register from './login/Register';
import Home from './home/Home';
import Logo from './Logo';
import Groups from './groups/Groups';
import Board from "./board/Board";
import { UserProvider } from './UserContext';


class App extends Component {

      constructor(props) {
        super(props);
        this.state = {
          token: props.userData.token,
          username: props.userData.username,
          setUserData: (token, username) => this.setState({
            token: token,
            username: username
          })
        };
      }

  renderProtectedComponent(ProtectedComponent) {
    if (this.state.username !== null) {
        return  (props) => <ProtectedComponent {...props} />;
    }
    else {
        return (props) => <Redirect to='/login' />;
    }
  }



  render() {
    return (
      <UserProvider value={this.state}>
      <Router>
        <Nav />
        <Route path = "/" exact component = {Home} />
        {/* <Route path = "/Home"  component = {Home} /> */}
        <Route path = {['/login', '/register']} component = {Logo} />
        <Route path = "/login"  component = {Login} />
        <Route path = "/register" component = {Register} />
        <Route path = '/groups' render={this.renderProtectedComponent(Groups)} />
        <Route path = "/board"  component = {Board} />
      </Router>
      </UserProvider>
    );
  }
}

export default App;
