import { SET_RADIUS } from "../actions/types"

export const changeRadius = radius => ({
  type: SET_RADIUS,
  payload: radius
})