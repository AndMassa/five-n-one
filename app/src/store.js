import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { starWarsCharacters, currentStarWarsCharacter } from './reducers/starwars'
import { setColors, currentColor } from './reducers/colors'
import { setBuzzWords, currentBuzzword } from './reducers/buzzwords'
import { setEmojis } from './reducers/emojis'
import { setFortuneCookies } from './reducers/fortune-cookies'

export default createStore(
  combineReducers({
    starWarsCharacters,
    setColors,
    setBuzzWords,
    setEmojis,
    setFortuneCookies,
    currentBuzzword,
    currentColor,
    currentStarWarsCharacter
  }),
  applyMiddleware(thunk)
)
