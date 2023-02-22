import { useContext, useReducer, useRef } from 'react'
import { AudioContext } from 'context'
import harp from "assets/music/harp.mp3"

const initialState = {
  name: "",
  source: "",
  muted: true,
  paused: true,
}

const ACTIONS = Object.freeze({
  TOGGLE_MUTE: "toggleMute",
  TOGGLE_PLAY: "togglePlay"
})

const reducer = (state, action) => {
  const audio = state.ref.current
  console.log(action)
  switch (action.type) {
    case ACTIONS.TOGGLE_MUTE:
      audio.muted = !state.muted

      return {
        ...state,
        muted: !state.muted,
      }

    case ACTIONS.TOGGLE_PLAY:
      state.paused ? audio.play() : audio.pause()

      return {
        ...state,
        paused: !state.paused
      }
  
    default:
      return state;
  }
}

export function AudioProvider({ children }) {
  const musicRef = useRef()
  const [state, dispatch] = useReducer(reducer, { ...initialState, ref: musicRef })

  return (
    <AudioContext.Provider value={{ state, dispatch, ACTIONS }}>
      <audio className="music-player"
        ref={musicRef}
        src={harp}
        paused={state.paused}
        loop={true}
      />
      
      { children }
    </AudioContext.Provider>
  )
}

export function useAudioContext() {
  return useContext(AudioContext)
}