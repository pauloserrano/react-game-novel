import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { HUD } from 'components'
import { useAudioContext } from 'hooks'

export function NavLayout({background, track, children}) {
  const { dispatch, ACTIONS } = useAudioContext()

  useEffect(() => {
    dispatch({ type: ACTIONS.SET_MUSIC, payload: track })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Wrapper background={background}>
      <HUD />
      {children}
    </Wrapper>
  )
}

NavLayout.Menu = ({ children }) => {
  return (
    <MenuWrapper>
      {children}
    </MenuWrapper>
  )
}

NavLayout.MenuItem = ({...props }) => <MenuItem {...props} />

function MenuItem({ icon: Icon, name, ...otherProps }) {
  const itemRef = useRef()

  return (
    <li ref={itemRef}>
      <button {...otherProps}>
        <Icon style={{}}/>
        <span>{name}</span>
      </button>
    </li>
  )
}

const Wrapper = styled.div`
  background: url(${props => props.background}) no-repeat center;
  background-size: cover;
`

const MenuWrapper = styled.ul`
  display: grid;
  gap: min(1.5vw, 0.5rem);
  width: min(350px, 25vw);
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2vw;

  button{
    display: flex;
    align-items: center;
    height: min(2.5rem, 3.5vw);
    width: 100%;
    outline: transparent;
    border: none;
    background: none;
    cursor: pointer;
  
    svg {
      height: 100%;
      aspect-ratio: 1 / 1;
      padding: 2px;
      border: 1px solid var(--color-primary);
      background-color: black;

      path{
        fill: var(--color-primary);
      }
    }

    span{
      display: flex;
      align-items: center;
      flex-grow: 1;
      font-family: "Comfortaa", sans-serif;
      font-size: min(1rem, 1.75vw);
      text-align: left;
      white-space: nowrap;
      color: white;
      height: 100%;
      padding-block: 0.25em;
      padding-inline-start: 1.25em;
      padding-inline-end: 2em;
      margin-inline-start: 0.5rem;
      border-radius: 1.5rem 0 0 1.5rem;
      background: linear-gradient(to right, black 50%, rgba(0, 0, 0, 0.1));
    }

    svg, span {
      transition: all 0.1s ease-out;
      pointer-events: none;
    }
  }


  li:hover, li button:focus-visible{
    svg{
      filter: drop-shadow(0 0 1em var(--color-primary))
    }

    span{
      color: black;
      font-weight: 700;
      padding-inline-start: 1.75em;
      background: linear-gradient(to right, var(--color-primary) 50%, rgba(0, 0, 0, 0.1));
    }
  }
`