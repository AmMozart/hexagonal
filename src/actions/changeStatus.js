import { SET_STATUS } from '../actions/types'

export const changeStatus = (status) => ({
  type: SET_STATUS,
  payload: status
})