import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useHistory, Redirect } from "react-router-dom";
import Home from './components/HomePage';
import EditProfilePage from './components/EditProfilePage';
import ProfilePage from './components/ProfilePage';
import ErrorPage from './components/ErrorPage';
import {Profile} from './store/types/types';
import {RootState} from './store';
import {addProfile} from './store/actions/actions';
import {connect} from 'react-redux';
import About from './components/EditProfilePage';
import LogOut from './components/subcomponents/LogOut';

export interface IAppProps{
  loggedIn: boolean,
  profiles: Profile[]
}


export class App extends React.Component<IAppProps> {

  public render(){
    let { profiles } = this.props;

    if (sessionStorage.getItem('loggedIn') === 'true'){
      const uName = sessionStorage.getItem('userName')
      
      return (

        <>
        <Router>
          <Switch>
          <Route exact path="/" component={Home}/>

            <Route path='/profile'>
          <Link to="" component={ProfilePage}/>
        <Redirect to={`/profile/${uName}`}/>
        </Route>
        <Route path="/edit-profile/" component={EditProfilePage}/>
        </Switch>
      </Router>
      </>

      )
    }
  
  return (
    <>
    <Router>
     
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/ProfilePage" component={ProfilePage}/>
          <Route component={About}/>
          <Route component={ErrorPage}/>
        </Switch>

      </Router>
    </>
    
  );
  }
}

const mapStateToProps = (state : RootState) => {
  return {
    loggedIn: state.profile.loggedIn,
    profiles: state.profile.profiles
  };
}

export default connect (
  mapStateToProps,
  {addProfile},
)(App);
