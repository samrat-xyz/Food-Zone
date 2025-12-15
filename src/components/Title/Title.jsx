import React from 'react'

function Title({children}) {
  return (
    <div className='p-4'>
      <h1 className='text-4xl font-semibold text-center'>{children}</h1>
    </div>
  )
}

export default Title
