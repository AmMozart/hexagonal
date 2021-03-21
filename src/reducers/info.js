import { SET_RADIUS, SET_STATUS, SET_SERVER } from '../actions/types'
import { serverURL } from '../config'

const initialState = {
  radius: 2,
  status: 'playing',
  server: serverURL.local
}

const info = (state = initialState, action) => {
  switch (action.type) {
    case SET_RADIUS: {
      return { ...state, radius: action.payload }
    }
    case SET_STATUS: {
      return { ...state, status: action.payload }
    }
    case SET_SERVER: {
      return { ...state, server: action.payload }
    }
    default:
      return state
  }
}

export { info }