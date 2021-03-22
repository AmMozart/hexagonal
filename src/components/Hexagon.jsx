import React from 'react'
import style from './Hexagon.module.css'
import PropTypes from 'prop-types'
import { store } from '../store'

const DIV_WIDTH = 550

const Hexagon = ({ x, y, z, value }) => {

  let hexagonAmount = store.getState().info.radius * 2 - 1

  const hexagonWidth = Math.round(DIV_WIDTH / hexagonAmount)
  const hexagonHeight = Math.round(hexagonWidth * 0.865)
  const AREA_WIDTH = Math.round(DIV_WIDTH / 2 - hexagonWidth / 2)
  const AREA_HEIGHT = Math.round(DIV_WIDTH / 2 - hexagonHeight / 2)

  const [r, g, b] = [0xEC << 16, 0xE4 << 8, 0xDB]
  const color = `#${((r | g | b) - 520 * value).toString(16)}`

  const [width, height, left, top] = [
    `${hexagonWidth}px`,
    `${hexagonHeight}px`,
    Math.round(x * (hexagonWidth - hexagonWidth / 4) + AREA_WIDTH),
    Math.round((-y + z) * ((hexagonHeight) / 2) + AREA_HEIGHT)
  ]
  return (
    <>
      <div className={style.hexagon}
        style={{ height, width, left, top }}
        data-x={x}
        data-y={y}
        data-z={z}
        data-value={value}>
        {value ? value : ''}
      </div>

      <div className={style.activeHexagon}
        style={{
          height, width, left, top,
          display: `${value > 0 ? 'block' : 'none'}`
        }}>
        <svg fill="none" viewBox="0 0 190 164" xmlns="http://www.w3.org/2000/svg">
          <path d="M47.3255 163.2L0 81.836L46.3707 0H142.802L190 82.3093L143.757 163.2H47.3255Z" fill={color}></path>
        </svg>
      </div>
    </>
  )
}

Hexagon.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  z: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

export default Hexagon