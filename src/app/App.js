import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import AppHeader from '../common/AppHeader';
import Home from '../home/Home';
import Login from '../user/login/Login';
import Signup from '../user/signup/Signup';
import Profile from '../user/profile/Profile';
import EditProfile from '../user/editprofile/EditProfile';
import OAuth2RedirectHandler from '../user/oauth2/OAuth2RedirectHandler';
import NotFound from '../common/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';
import { getCurrentUser } from '../util/APIUtils';
import { ACCESS_TOKEN } from '../constants';
import PrivateRoute from '../common/PrivateRoute';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './App.css';
import Group from "../user/group/Group";
import UserGroup from "../user/group/UserGroup";
import UserGroupEdit from "../user/group/UserGroupEdit";
import AppSidebar from "../common/AppSidebar";
import profile from "../user/profile/Profile";

const nonSiderPages = ["/", "/login", "/signup", "/profile"]



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: true
    }

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  loadCurrentlyLoggedInUser() {
    getCurrentUser()
    .then(response => {
      this.setState({
        currentUser: response,
        authenticated: true,
        loading: false
      });
    }).catch(error => {
      this.setState({
        loading: false
      });
    });
  }

  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null
    });
    Alert.success("You're safely logged out!");
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }

  SidebarCondit() {
    if(!nonSiderPages.includes(window.location.pathname))
      return <AppSidebar authenticated={this.props.authenticated} onLogout={this.props.handleLogout}/>
    }

  HeaderCondit() {
    if(nonSiderPages.includes(window.location.pathname))
      return <AppHeader authenticated={this.props.authenticated} onLogout={this.props.handleLogout}/>
  }



  render() {
    if(this.state.loading) {
      return <LoadingIndicator />
    }




    return (
        <div className="App">

          {/*{this.SidebarCondit()}*/}
          {/*{this.HeaderCondit()}*/}
          <AppHeader authenticated={this.state.authenticated} onLogout={this.handleLogout}/>
          {/*<AppSidebar authenticated={this.state.authenticated} onLogout={this.handleLogout}/>*/}
          <div className="main-content">
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <PrivateRoute path="/profile" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
                component={Profile}></PrivateRoute>
              <PrivateRoute path="/editprofile" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
                component={EditProfile}></PrivateRoute>
              <PrivateRoute path="/group" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
                component={Group}></PrivateRoute>
              <PrivateRoute path="/usergroup" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
                component={UserGroup}></PrivateRoute>
              <PrivateRoute path="/usergroupedit" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
                component={UserGroupEdit}></PrivateRoute>
              <Route path="/login"
                render={(props) => <Login authenticated={this.state.authenticated} {...props} />}></Route>
              <Route path="/signup"
                render={(props) => <Signup authenticated={this.state.authenticated} {...props} />}></Route>
              <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </div>


        // <p>test</p>
      // <div className="app">
      //   <div className="app-top-box">
      //     <AppHeader authenticated={this.state.authenticated} onLogout={this.handleLogout} />
      //   </div>
      //   <div className="app-body">
      //     <Switch>
      //       <Route exact path="/" component={Home}></Route>
      //       <PrivateRoute path="/profile" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
      //         component={Profile}></PrivateRoute>
      //       <PrivateRoute path="/group" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
      //         component={Group}></PrivateRoute>
      //       <Route path="/login"
      //         render={(props) => <Login authenticated={this.state.authenticated} {...props} />}></Route>
      //       <Route path="/signup"
      //         render={(props) => <Signup authenticated={this.state.authenticated} {...props} />}></Route>
      //       <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>
      //       <Route component={NotFound}></Route>
      //     </Switch>
      //   </div>
      //   <Alert stack={{limit: 3}}
      //     timeout = {3000}
      //     position='top-right' effect='slide' offset={65} />
      // </div>
    );
  }
}

export default App;
