import React from 'react'

function Dropdown({options}) {
    const renderOptions = options.map( op => {
        return <div key={op.value}>{op.label}</div>
    })
  return (
    <div>
        <div>Select...</div>
        <div>{renderOptions}</div>
    </div>
  )
}

export default Dropdown