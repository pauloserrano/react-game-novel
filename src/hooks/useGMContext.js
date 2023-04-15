import { useContext, useReducer } from 'react'
import { GMContext } from 'context'
import { MAPS } from 'data'

const initialState = {
  currentMap: MAPS[0]
}

const ACTIONS = Object.freeze({
})

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }

  //return state
}

export function GMProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <GMContext.Provider value={{ state, dispatch, ACTIONS }}>
      { children }
    </GMContext.Provider>
  )
}

export function useGMContext() {
  return useContext(GMContext)
}