import React from 'react'

function ViewItem(props) {
  return (
    <a href="/ViewSingle" className="bg-cyan-500 w-40 h-40 flex justify-center items-center rounded-full overflow-hidden shadow-lg hover:bg-cyan-700">
      <h1 className='text-white font-bold'>{props.name}</h1>
    </a>
  )
}

export default ViewItem