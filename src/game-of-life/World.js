import React from 'react'

import Cell from './Cell'

function World(props) {
  return (
    <div>
      <h1>Hello cat </h1>
      <Cell isAlive={true}></Cell>
      <Cell isAlive={false}></Cell>
      <h1>end</h1>
    </div>
  )
}

export default World