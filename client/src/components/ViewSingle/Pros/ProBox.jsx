import React from 'react'
import ProsList from './ProsList'
import EditIcon from '../../Icons/EditIcon'
function ProBox() {
  return (
    <div className='flex flex-col bg-green-500 h-full w-1/2 rounded p-5 gap-y-5'>
      <div className="flex justify-center gap-4 item-center">
        <h1 className="text-4xl text-white items-start">Pros</h1>
        <EditIcon clicked={() => { console.log('pro edit') }} />
      </div>
      <div className="bg-slate-100 h-full w-full rounded flex justify-center">
        <ProsList />
      </div>
    </div>
  )
}

export default ProBox