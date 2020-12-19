import React from 'react';
import Avatar from 'react-avatar';
import {NavLink, Link} from 'react-router-dom';
import {connect } from 'react-redux';
import { Redirect } from "react-router-dom"
import { signOut } from "../store/action/authAction";

const Navbar = (props) => {

  const { firebase, logout }  = props


  const handleClick = () => {
    console.log('handle Click');
    logout();
  }

  if(firebase.auth.isEmpty === true){
    return <Redirect to="/"/>
  }
  return (
    <div
      className='h-20 w-full bg-blue-300 flex flex-row justify-between items-center px-10'>
      <h1 className="text-2xl">Nadeem Khan</h1>
      <div className="">
        <NavLink to="/home" className="text-2xl mr-3">Home</NavLink>
        <NavLink to="/home/create_blog" className="text-2xl mr-3">
          Create Blogs</NavLink>
        <Link to="/">
          <button className="text-2xl mr-3" onClick={handleClick}>LogOut</button>
        </Link>
        <Avatar name="Foo" size="55px" round/>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    firebase: state.firebase
  }
}

const mapStateToDispatch = (dispatch) => {
  return{
    logout: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps,mapStateToDispatch)(Navbar)
