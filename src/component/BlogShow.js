import React from 'react'

const BlogShow = ({title,blog}) => {
  return (
    <div
      className="flex flex-col justify-center items-start mx-24 p-10 mt-24 bg-green-300 rounded-lg ">
      <h1 className="text-4xl">Title:<br/>
        <span className="text-red-600 mt-2 text-2xl">{title}</span>
      </h1>
      <p className="text-4xl mt-4">Blog:</p>
      <p className="text-2xl mt-2 text-red-600">{blog}</p>
    </div>
  )
}

export default BlogShow
