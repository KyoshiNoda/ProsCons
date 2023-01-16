import React from 'react'
import Logo from '../Logo'
function Card(props) {
  return (
    <>
      <Logo />
      <div className="flex justify-center bg-blue-100 w-screen h-screen">
        {props.children}
      </div>
    </>
  )
}

export default Card