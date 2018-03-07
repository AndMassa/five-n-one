import {setFortuneCookies} from './fortune-cookies'
import {SET_FORTUNECOOKIES} from '../constants'

test('testing SET_FORTUNECOOKIES', () => {

  function mockDispatch(action) {

    expect(action.type).toBe(SET_FORTUNECOOKIES)
    expect(action.payload.length).toBeGreaterThan(0)
  }

  setFortuneCookies(mockDispatch)
})
