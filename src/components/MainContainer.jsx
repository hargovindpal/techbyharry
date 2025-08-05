import React from 'react'
import Home from '../pages/Home'

function MainContainer({ selected }) {
    if (!selected) return null;

  return (
    <>
     <div className="p-4 bg-white shadow rounded w-100">
      {selected.component}
    </div>

      
    </>
  )
}

export default MainContainer
