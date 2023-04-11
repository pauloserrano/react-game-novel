import styled from 'styled-components'
import { SongMuted, SongPlaying } from 'components'
import { useAudioContext } from 'hooks'

export function Menu() {
  const { state, dispatch, ACTIONS } = useAudioContext()

  const toggleAudio = () => {
    dispatch({ type: ACTIONS.TOGGLE_MUTE })
    dispatch({ type: ACTIONS.TOGGLE_PLAY })
  }

  return (
    <Wrapper>
      <button onClick={toggleAudio}>
        {state.muted 
          ? <SongMuted className='muted' style={{}} /> 
          : <SongPlaying className='playing' style={{}} />
        }
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  inset: 1rem 1rem auto auto;

  button{
    background-color: transparent;
    border: none;
    outline: none;
  }
  
  &:hover, & button:focus{
    filter: drop-shadow(0 0 0.5rem var(--color-primary));
  }

  svg {
    background-color: transparent;
    border-radius: 50%;
    stroke: var(--color-primary);
    aspect-ratio: 1 / 1;
    cursor: pointer;
  }

  svg.playing{
    position: relative;
    inset-inline-start: 25%;
  }
`