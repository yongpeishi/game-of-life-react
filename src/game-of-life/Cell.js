import React from 'react'

import './Cell.css'

function Cell({isAlive}) {
  const background = isAlive ? 'alive' : ''
  const className = 'cell '.concat(background)

  return (
    <div className={className}></div>
  )
}

export default Cell