import React from 'react'
import { useState } from 'react'

function App() {
  var [a,b]= useState(42)
  return (
    <> <div className='bg-red-800 mb-3 text-green-400 px-5'>{a}</div>
    <button onClick={()=>b(a+1)} className='bg-green-500 p-1 pt-0 m-2 rounded-md text-xs'>count</button>
    </>
   
  )
}

export default App

hfhg