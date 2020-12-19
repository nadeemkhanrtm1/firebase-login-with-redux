const initState = {}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log('login success')
      return state;
    case 'LOGIN_FAILED':
      console.log('login failed')
      return state;
    case 'SIGN_OUT':
      console.log('sign out success')
      return state;
    case 'SIGN_OUT_FAILED':
      console.log('sign out failed');
      return state;
    case 'SIGN_UP':
      console.log('sign up success');
      return state;
    case 'SIGN_UP_ERROR':
      console.log('sign up error')
      return state;
    default:
      return state;
  }
}

export default authReducer;