export const createBlog = (blog) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //make async call here
    const firestore = getFirestore();
    firestore
      .collection('bloges')
      .add({
        ...blog,
        time: new Date()
      })
      .then(() => dispatch({type: 'CREATED_BLOG', blog}))
      .catch((err) => dispatch({type: 'CREATE_BLOG_ERROR', err}))
  }
}