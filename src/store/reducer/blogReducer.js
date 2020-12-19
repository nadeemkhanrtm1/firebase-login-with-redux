const initState = {
  blogs: []
}

const blogReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATED_BLOG':
      console.log('created blog', action.blog)
      return state;
    case 'CREATE_BLOG_ERROR':
      console.log('create blog error', action.err)
      break;
    default:
      return state
  }
}

export default blogReducer;