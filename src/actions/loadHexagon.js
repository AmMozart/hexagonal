import {
  LOAD_HEXAGON_SUCCESS,
  LOAD_HEXAGON_FAILURE,
  LOAD_HEXAGON_STARTED
} from './types'
import { store } from '../store'

export const loadHexagon = () => {

  let radius = store.getState().info.radius
  let hexArray = store.getState().field.hexagon.filter(x => x.value > 0)
  let url = store.getState().info.server

  return dispatch => {
    dispatch(loadHexagonStarted())
    fetch(`${url}${radius}`, {
      method: 'POST',
      body: JSON.stringify(hexArray)
    })
      .then(res => res.json())
      .then(data => {
        dispatch(loadHexagonSuccess(data))
      })
      .catch(err => {
        dispatch(loadHexagonFailure(err.message))
      })
  }
}

const loadHexagonSuccess = Hexagons => ({
  type: LOAD_HEXAGON_SUCCESS,
  payload: [
    ...Hexagons
  ]
})

const loadHexagonStarted = isStart => ({
  type: LOAD_HEXAGON_STARTED,
  payload: true
})

const loadHexagonFailure = error => ({
  type: LOAD_HEXAGON_FAILURE,
  payload: {
    error
  }
})