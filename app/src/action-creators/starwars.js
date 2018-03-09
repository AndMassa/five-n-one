import fetch from 'isomorphic-fetch'
import { SET_STARWARS, CHG_STARWARS_CHARACTER } from '../constants'

const url = 'http://localhost:5000/starwars'

export const setStarWars = async (dispatch, getState) => {
  const starwars = await fetch(url)
  .then(res => res.json())
  dispatch({type: SET_STARWARS, payload: starwars})
}


export const chgStarWarsCharacter = (field, value) => (dispatch, setState) => {

  dispatch({type: CHG_STARWARS_CHARACTER, payload:{[field]: value} })
}

export const addStarWarsCharacter = (character, history) => async (dispatch, getState) => {

  const method = 'POST'
  const headers = {'Content-Type': 'application/json'}
  const body = JSON.stringify(character)

  const result =
  await fetch(url, {method, headers, body})
  .then(res => res.json())
  .catch(err => console.log('Awoooooga, WARNING WARNING, addStarWarsCharacter error', err))


  if(result.ok) {
    dispatch(setStarWars)
    history.push('/starwars')
  } else {
    console.log('Awoooooga, WARNING WARNING, addStarWarsCharacter error')
  }
}
