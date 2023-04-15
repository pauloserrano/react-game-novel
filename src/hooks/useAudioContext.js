import { useContext, useReducer } from 'react'
import { AudioContext } from 'context'

const initialState = {
  musicSrc: "",
  sfxSrc: "",
  muted: true,
  paused: true
}

const ACTIONS = Object.freeze({
  PLAY_SFX: "playSFX",
  SET_MUSIC: "setMusic",
  TOGGLE_MUTE: "toggleMute",
  TOGGLE_PLAY: "togglePlay",
})

const reducer = (state, action) => {
  //console.log({ state, action })
  switch (action.type) {
    case ACTIONS.PLAY_SFX:
      state.sfxSrc = action.payload
      break

    case ACTIONS.SET_MUSIC:
      state.musicSrc = action.payload
      break

    case ACTIONS.TOGGLE_MUTE:
      return {
        ...state,
        muted: !state.muted,
      }

    case ACTIONS.TOGGLE_PLAY:
      return {
        ...state,
        paused: !state.paused
      }
  
    default:
      return state;
  }

  return state
}

export function AudioProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AudioContext.Provider value={{ state, dispatch, ACTIONS }}>
      <audio className="music-player"
        src={state.musicSrc ? state.musicSrc : ""}
        paused={state.paused}
        autoPlay={true}
        muted={state.muted}
        loop={true}
      />
      
      <audio className="sfx-player"
        src={state.sfxSrc ? state.sfxSrc : ""}
        paused={state.paused}
        muted={state.muted}
        autoPlay={true}
      />
      
      { children }
    </AudioContext.Provider>
  )
}

export function useAudioContext() {
  return useContext(AudioContext)
}