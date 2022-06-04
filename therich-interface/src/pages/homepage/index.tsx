import React from 'react'
import { Link } from 'react-router-dom'

const Homepage: React.FC<any> = () => {
  return (
    <>
      <h1>Hello world!</h1>
      <Link to="/swap">
        <div>Launch</div>
      </Link>
    </>
  )
}

export default Homepage
