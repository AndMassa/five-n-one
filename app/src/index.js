import React from 'react'
import { render } from 'react-dom'
import 'tachyons'
import { Provider } from 'react-redux'
import store from './store'
import { setStarWars, addStarWarsCharacter, chgStarWarsCharacter } from './action-creators/starwars'
import { setColors, addColor, chgColor } from './action-creators/colors'
import { setBuzzwords, addBuzzword, chgBuzzword } from './action-creators/buzzwords'
import { setEmojis } from './action-creators/emojis'
import { setFortuneCookies } from './action-creators/fortune-cookies'


import App from './App'

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
)

store.dispatch(setStarWars)
store.dispatch(setColors)
store.dispatch(setBuzzwords)
store.dispatch(setEmojis)
store.dispatch(setFortuneCookies)
store.dispatch(addBuzzword)
store.dispatch(addStarWarsCharacter)
