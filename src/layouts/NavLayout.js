import styled from 'styled-components'
import { TimeWheel } from 'components'
import bg from "assets/images/background/human-city.jpg"

export function NavLayout({children}) {
  return (
    <Wrapper>
      <TimeWheel />
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

NavLayout.MenuItem = ({ Icon, name, ...otherProps }) => {
  return (
    <li>
      <button {...otherProps}>
        <Icon style={{}}/>
        <span>{name}</span>
      </button>
    </li>
  )
}

const Wrapper = styled.div`
  background: url(${bg}) no-repeat center;
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
      background: linear-gradient(to right, black, rgba(0, 0, 0, 0.1));
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
      background: linear-gradient(to right, var(--color-primary), rgba(0, 0, 0, 0.1));
    }
  }
`