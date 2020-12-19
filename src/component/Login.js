import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { signIn } from '../store/action/authAction';
import {connect } from 'react-redux';
import { Redirect } from "react-router-dom"

const Login = (props) => {
    //state of user
  const [user,
    setUser] = useState({Email: '', Password: ''})
    //handle change
  const handleChange = (e) => {
    setUser({
      ...user,[e.target.name]: e.target.value
    })
  }
  //handle focus
  const handleFocus = (e) => {
    e.target.placeholder = ''
  }
  //handle blur
  const handleBlur = (e) => {
    if (Email === '' || Password === '') {
      e.target.placeholder = e.target.name
    }
  }
  //form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(user)

  }
  //destruction
  const {Email, Password} = user;

  const {firebase} = props;
  if(firebase.auth.isEmpty === false){
    return <Redirect to="/home"/>
  }
  return (
    <div className="h-screen">
      <Link to="/">
        <button className="bg-blue-500 px-4 py-2 text-white mt-10 ml-80">Back</button>
      </Link>
      <h1 className='text-center text-5xl mt-20 mb-10'>Login</h1>
      <form onSubmit={handleSubmit}>
      <div className='flex flex-col justify-center items-center'>
        
          <input
            type="email"
            name="Email"
            value={Email}
            className='register-input'
            placeholder="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}/>
          <input
            type="password"
            name="Password"
            value={Password}
            className='register-input'
            placeholder="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}/>
          <button
            type="submit"
            className='bg-green-500 px-4 py-2 text-xl w-96 text-white rounded'>Login</button>
      </div>
      </form>
    </div>
  )
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    firebase:state.firebase
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => dispatch(signIn(credentials))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)
