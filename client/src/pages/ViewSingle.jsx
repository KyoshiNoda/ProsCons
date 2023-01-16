import React from 'react'
import Card from '../components/Card';
function ViewSingle(props) {
  return (
    <Card>
      <div className="flex flex-col h-1/2 w-1/2 bg-slate-400 rounded items-center gap-y-5">
        <h1 className="text-4xl text-white ">Single Name</h1>

        <div className="flex h-3/4 w-3/4">
          <div className='flex flex-col bg-green-500 h-full w-1/2 rounded p-5 gap-y-5'>
            <div className="text-center">
              <h1 className="text-4xl text-white items-start">Pros</h1>
            </div>
            <div className="bg-slate-100 h-full w-full rounded flex justify-center">
              <ul>
                <li>test#1</li>
                <li>test#2</li>
                <li>test#3</li>
                <li>test#4</li>
                <li>test#5</li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col bg-red-500 h-full w-1/2 rounded p-5 gap-y-5'>
            <div className="text-center">
              <h1 className="text-4xl text-white items-start">Cons</h1>
            </div>
            <div className="bg-slate-100 h-full w-full rounded flex justify-center">
              <ul>
                <li>test#1</li>
                <li>test#2</li>
                <li>test#3</li>
                <li>test#4</li>
                <li>test#5</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ViewSingle;