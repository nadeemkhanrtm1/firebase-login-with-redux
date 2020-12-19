//These page appears when site is started
import React from 'react'
import { Link} from 'react-router-dom'

const Start = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <div className='mb-10'>
        <Link to='/register'>
          <button className='bg-green-500 px-4 py-2 text-white w-96 text-2xl h-20 block'>
            Register</button>
        </Link>
      </div>
      <div>
        <Link to='/login'>
          <button className='bg-red-500 px-4 py-2 text-white w-96 text-2xl h-20 block'>Login</button>
        </Link>
      </div>
    </div>
  )
}

export default Start
