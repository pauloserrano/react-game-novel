import styled from 'styled-components'
import { TimeWheel } from 'components'
import bg from "assets/images/background/human-city.jpg"
import { ReactComponent as SunCloud } from "assets/icons/sun-cloud.svg"


export function NavLayout() {
  return (
    <Wrapper>
      <TimeWheel />
      <NavLayout.Menu />
    </Wrapper>
  )
}

NavLayout.Menu = () => {
  return (
    <MenuWrapper>
      <li>
        <SunCloud style={{}}/>
        <span>Lorem Ipsum</span>
      </li>
      <li>
        <SunCloud style={{}}/>
        <span>Lorem Ipsum</span>
      </li>
      <li>
        <SunCloud style={{}}/>
        <span>Lorem Ipsum</span>
      </li>
      <li>
        <SunCloud style={{}}/>
        <span>Lorem Ipsum</span>
      </li>
    </MenuWrapper>
  )
}

const Wrapper = styled.div`
  background: url(${bg}) no-repeat center;
  background-size: cover;
`

const MenuWrapper = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  position: absolute;
  bottom: 3rem;
  left: 3rem;

  li{
    display: flex;
    align-items: center;
    height: 2.5rem;
    cursor: pointer;
    
    svg{
      height: 100%;
      border: 1px solid var(--color-primary);
      background-color: black;

      path{
        fill: var(--color-primary);
      }
    }

    span{
      color: white;
      min-width: 250px;
      padding: 0.75rem 1rem;
      margin-left: 0.5rem;
      border-radius: 1.5rem 0 0 1.5rem;
      background: linear-gradient(to right, black, rgba(0, 0, 0, 0.1));
    }
    
    &:hover{
      span{
        color: black;
        background: linear-gradient(to right, var(--color-primary), rgba(0, 0, 0, 0.1));
      }
    }

    &:not(:last-of-type){
      margin-block-end: 0.75rem;
    }
    
    * {
      transition: all 0.1s ease-out;
      pointer-events: none;
    }
  }
`