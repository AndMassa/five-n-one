import {SET_STARWARS, CHG_STARWARS_CHARACTER} from '../constants'
import {merge} from 'ramda'

export const starWarsCharacters = (state=[], action) => {
  switch (action.type) {
    case SET_STARWARS:
      return action.payload
    default:
      return state
  }
}

export const currentStarWarsCharacter = (state={}, action) => {
  switch (action.type) {
    case CHG_STARWARS_CHARACTER:
      return merge(state, action.payload)
    default:
      return state
  }
}
