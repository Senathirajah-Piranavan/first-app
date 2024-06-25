import React from 'react'

const heading = {
    color : 'blue'   
}

function InLine() {
  return (
    <div style={heading}>
        <h1 className='error'>Error</h1>
        <h1>Inline</h1>
    </div>
  )
}

export default InLine