import {
  LOAD_HEXAGON_SUCCESS,
  LOAD_HEXAGON_FAILURE,
  LOAD_HEXAGON_STARTED,
  INIT_HEXAGON,
  CLEAR_FIELD,
} from '../actions/types'

const initialState = {
  loading: false,
  hexagon: [],
  error: null
}

export default function hexagonReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_HEXAGON_STARTED:
      return {
        ...state,
        loading: true
      }
    case LOAD_HEXAGON_SUCCESS:

      const newhexagons = state.hexagon.map(h => {
        const elem = action.payload.filter(o =>
          h.x === o.x &&
          h.y === o.y &&
          h.z === o.z
        )
        return elem.length ? elem.shift() : h
      })
      return {
        ...state,
        loading: false,
        error: null,
        hexagon: [...newhexagons]
      }
    case LOAD_HEXAGON_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    case INIT_HEXAGON:
      return {
        ...state,
        hexagon: [...state.hexagon, action.payload]
      }
    case CLEAR_FIELD:
      return {
        ...state,
        hexagon: [],
      }
    default:
      return state
  }
}