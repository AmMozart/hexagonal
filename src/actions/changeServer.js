import { SET_SERVER } from './types'

export const changeServer = (server) => ({
  type: SET_SERVER,
  payload: server
})