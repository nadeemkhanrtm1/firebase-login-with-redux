import React, {useState} from 'react';
import {Link} from "react-router-dom"
import {OldSocialLogin as SocialLogin} from 'react-social-login'
import { signUp } from "../store/action/authAction"
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"

const Register = (props) => {
  const [user,
    setUser] = useState({Name: '', Email: '', Password: ''});

  //handle CHnage
  const handleChange = (e) => {
    setUser({
      ...user,[e.target.name]: e.target.value
    })
  }

  //handle Fcous
  const handleFocus = (e) => {
    e.target.placeholder = ""
  }
  //handle Blur
  const handleBlur = (e) => {
    if (Name === '' || Email === '' || Password === '') {
      e.target.placeholder = e.target.name
    }
  }

  //social login hanlde

  const handleSocialLoginGoogle = (user, err) => {
    console.log('google user', user)
    console.log('google error', err)
  }
  const handleSocialLoginFb = (user, err) => {
    console.log('fb user', user._profile)
    console.log('fb error', err)
  }

    //destruction
    const {Name, Email, Password} = user;
    const { signUp, firebase } = props;

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(user)
  }

  if(firebase.auth.isEmpty === false){
    return <Redirect to="/home"/>
  }
  return (
    <div className="h-screen">
      <Link to="/">
        <button className="bg-blue-500 px-4 py-2 text-white mt-10 ml-80">Back</button>
      </Link>
      <h1 className='text-center text-5xl mt-20 mb-10'>Register Page</h1>
      <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center items-center">
        <input
          type="text"
          name='Name'
          value={Name}
          className='register-input'
          onChange={handleChange}
          placeholder="Name"
          onFocus={handleFocus}
          onBlur={handleBlur}/>
        <input
          type="email"
          name='Email'
          value={Email}
          className='register-input'
          onChange={handleChange}
          placeholder="Email"
          onFocus={handleFocus}
          onBlur={handleBlur}/>
        <input
          type="password"
          name='Password'
          value={Password}
          className='register-input'
          onChange={handleChange}
          placeholder="Password"
          onFocus={handleFocus}
          onBlur={handleBlur}/>
        
          <button
            type='submit'
            className='bg-green-500 px-4 py-2 text-xl w-96 text-white rounded'>Register</button>
      
        <p className='text-center text-xl my-5'>OR</p>

        <SocialLogin
          provider='google'
          appId='1079730454412-v0271fc8h2kstpkuesq1lah56vsf34nu.apps.googleusercontent.com'
          callback={handleSocialLoginGoogle}>
          <button className='bg-green-500 px-4 py-2 text-xl w-96 text-white rounded'>Login with Google</button>
        </SocialLogin>
        <br/>
        <SocialLogin
          provider='facebook'
          appId='3820491974630565'
          callback={handleSocialLoginFb}>
          <button className='bg-green-500 px-4 py-2 text-xl w-96 text-white rounded'>Login with Facebook</button>
        </SocialLogin>

      </div>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    firebase:state.firebase
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    signUp: (credential) => dispatch(signUp(credential))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Register)
