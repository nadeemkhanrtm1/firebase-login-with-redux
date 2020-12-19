export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.Email, credentials.Password)
      .then(() => dispatch({type: 'LOGIN_SUCCESS'}))
      .catch((error) => dispatch({type: 'LOGIN_FAILED', error}))
  }
}

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => dispatch({type: 'SIGN_OUT'}))
      .catch((error) => dispatch({type: 'SIGN_OUT_FAILED', error}))
  }
}

export const signUp = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .createUserWithEmailAndPassword(credentials.Email,credentials.Password)
      .then(() => dispatch({type: 'SIGN_UP'}))
      .catch((error)=>dispatch({type:'SIGN_UP_ERROR'}))
  }
}