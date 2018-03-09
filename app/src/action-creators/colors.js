import fetch from 'isomorphic-fetch'
import {

  SET_COLORS,
  CLEAR_COLOR_FORMDATA,
  CHG_CURRENT_COLOR,
  SET_ERROR_MSG

 } from '../constants'

const url = 'http://localhost:5000/colors'

export const setColors = async (dispatch, getState) => {
  const colors = await fetch(url)
  .then(res => res.json())
  dispatch({type: SET_COLORS, payload: colors})
}

export const addColor = (color, history) => async (dispatch, getState) => {

  const url = 'http://localhost:5000/colors'
  const method = 'POST'
  const headers = {
    'Content-Type': 'application/json'
  }

  const body = JSON.stringify(color)

  const result = await fetch(url, {headers,method, body})
  .then(httpResponse => httpResponse.json())

  if(result.ok) {
    dispatch(setColors)
    history.push('/colors')
  } else {

  console.log('Error adding color.')
  }
}

export const chgColor = (field, value) => (dispatch, getState) => {
  dispatch({type: CHG_CURRENT_COLOR, payload: {[field]: value}})
}
