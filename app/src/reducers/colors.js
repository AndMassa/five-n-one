import {
  SET_COLORS,
  CHG_CURRENT_COLOR,
  CLEAR_COLOR_FORMDATA
} from '../constants'
import { merge } from 'ramda'

export const setColors = (state=[], action) => {
  switch (action.type) {
    case SET_COLORS:
      return action.payload
    default:
      return state
  }
}

export const currentColor = (state = {}, action) => {
  switch (action.type) {
    case CHG_CURRENT_COLOR:
      return merge(state, action.payload)
    case CLEAR_COLOR_FORMDATA:
      return {}
    default:
      return state
  }
}
