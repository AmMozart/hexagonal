import { INIT_HEXAGON } from './types'
import { store } from '../store'

export const createField = () => {
  let radius = store.getState().info.radius

  return dispatch => {
    getFieldPoints(radius)
      .forEach(x => dispatch(
        {
          type: INIT_HEXAGON,
          payload: { ...x, value: 0 }
        }))
  }
}

const minusToPlusN = (n, f) => {
  Array.from({ length: n * 2 + 1 }, (_, x) => n - x).forEach(f)
}

const getFieldPoints = radius => {
  let points = []
  minusToPlusN(radius - 1, x =>
    minusToPlusN(radius - 1, y => minusToPlusN(radius - 1, z => x + y + z === 0 && points.push({ x, y, z })))
  )
  return points
}