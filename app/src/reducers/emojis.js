import { SET_EMOJIS } from '../constants'

export const setEmojis = (state=[], action) => {
  switch (action.type) {
    case SET_EMOJIS:
      return action.payload
    default:
      return state
  }
}
