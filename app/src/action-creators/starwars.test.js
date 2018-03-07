import {setStarWars} from './starwars'
import {SET_STARWARS} from '../constants'

test('testing SET_STARWARS', () => {

  function mockDispatch(action) {

    expect(action.type).toBe(SET_STARWARS)
    expect(action.payload.length).toBeGreaterThan(0)
  }

  setStarWars(mockDispatch)
})
