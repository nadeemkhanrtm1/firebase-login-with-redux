import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from "react-redux"
import { createBlog } from '../store/action/blogAction'

const CreateBlog = (props) => {
  //states
  const [bloges,
    setBloges] = useState({Title: '', Blog: ''})
  //destruction
  const {Blog, Title} = bloges;
  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    props.createBlog(bloges)
    setBloges({Title: '', Blog: ''})
  }
  //handle change
  const handleChange = (e) => {
    setBloges({
      ...bloges,
      [e.target.name]: e.target.value
    })
  }
  //handle focus
  const handleFocus = (e) => {
    e.target.placeholder = ''
  }
  //handle focus
  const handleBlur = (e) => {
    if (e.target.name === 'Title' || e.target.name === 'Blog') {
      e.target.placeholder = e.target.name
    }
  }
  return (
    <div>
      <Link to="/home">
        <button className="bg-blue-500 px-4 py-2 text-white mt-10 ml-80 rounded">Back</button>
      </Link>
      <h1 className="text-center text-5xl mt-4">Create Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col justify-start items-start px-80 mt-24'>
          <input
            type="text"
            name="Title"
            value={Title}
            onChange={handleChange}
            placeholder="Title"
            onBlur={handleBlur}
            onFocus={handleFocus}
            className="w-8/12 register-input"/>
          <textarea
            name="Blog"
            value={Blog}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            placeholder="Blog"
            rows="10"
            className="w-8/12 textarea"/>
          <button type="submit" className="bg-blue-700 px-8 py-2 rounded text-wgite" disabled={false}>Post</button>
        </div>
      </form>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => {
  return{
    createBlog:(bloges)=>dispatch(createBlog(bloges))
  }
}
export default connect(null,  mapDispatchToProps)(CreateBlog)
