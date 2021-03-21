import React from 'react'
import style from './Hexagon.module.css'
import PropTypes from 'prop-types'
import { store } from '../store'

const DIV_WIDTH = 550

const Hexagon = ({ x, y, z, value }) => {

  let hexagonAmount = store.getState().info.radius * 2 - 1

  const hexagonWidth = Math.round(DIV_WIDTH / hexagonAmount)
  const hexagonHeight = Math.round(hexagonWidth * 0.865) //865
  const AREA_WIDTH = Math.round(DIV_WIDTH / 2 - hexagonWidth / 2)
  const AREA_HEIGHT = Math.round(DIV_WIDTH / 2 - hexagonHeight / 2)

  return (
    <div className={style.hexagon}
      style={{
        height: `${hexagonHeight}px`,
        width: `${hexagonWidth}px`,
        left: Math.round(x * (DIV_WIDTH / (DIV_WIDTH / hexagonWidth) - hexagonWidth / 4) + AREA_WIDTH),
        top: Math.round((-y + z) * ((hexagonHeight) / 2) + AREA_HEIGHT)
      }}
      data-x={`${x}`}
      data-y={y}
      data-z={z}
      data-value={value}>
      {value ? value : ''}
    </div>
  )
}

Hexagon.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  z: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

export default Hexagon