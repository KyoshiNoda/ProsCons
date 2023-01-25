import React from 'react'
import ConsList from './ConsList';
import EditIcon from '../../Icons/EditIcon'
function ConBox() {
  return (
    <div className='flex flex-col bg-red-500 h-full w-1/2 rounded p-5 gap-y-5'>
      <div className="flex justify-center items-center gap-4">
        <h1 className="text-4xl text-white items-start">Cons</h1>
        <EditIcon clicked={() => { console.log('con edit') }} />
      </div>
      <div className="bg-slate-100 h-full w-full rounded flex justify-center">
        <ConsList />
      </div>
    </div>
  )
}

export default ConBox