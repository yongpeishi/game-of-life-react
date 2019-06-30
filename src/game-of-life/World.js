import React from 'react'
import { List, Range } from 'immutable'

import Cell from './Cell'
import './World.css'

const World = ({rows, columns, aliveCells}) => {
  const cellsStatus = (aliveCells, rows, columns) => {
    return Range(0, rows).flatMap(r => {
      return Range(0, columns).map(c => {
        return aliveCells.includes(List([r, c])) ? true : false
      })
    })
  }

  return (
    <div className='world'>
      {
        cellsStatus(aliveCells, rows, columns).map( (status, index) => {
          return <Cell isAlive={status} key={index}></Cell>
        })
      }
    </div>
  )
}

export default World