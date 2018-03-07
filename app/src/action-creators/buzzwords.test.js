import {setBuzzWords} from './buzzwords'
import {SET_BUZZWORDS} from '../constants'

test('testing SET_BUZZWORDS', () => {

  function mockDispatch(action) {

    expect(action.type).toBe(SET_BUZZWORDS)
    expect(action.payload.length).toBeGreaterThan(0)
  }

  setBuzzWords(mockDispatch)
})
