import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Nav from "./Navbar"
import Dashboard from './Dashboard'
import CreateBlog from './CreateBlog'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"

const Home = (props) => {
  const { firebase } = props;
  if(firebase.auth.isEmpty === true){
    return <Redirect to="/"/>
  }
  return (
    <>
      {/* One nav bar */}
      <Nav/> {/* Personal Details to show on dashboard */}
        <Switch>
        <Route  exact path="/home" component={Dashboard}/>
        <Route path="/home/create_blog" component={CreateBlog}/>
        </Switch>
    </>
  )
}

const mapStateToProps = (state) => {
  return{
    firebase : state.firebase
  }
}
export default connect(mapStateToProps)(Home)
