import styled from 'styled-components'
import Afternoon from "assets/images/daytime/afternoon.jpg"
import { ReactComponent as SunCloud } from "assets/icons/sun-cloud.svg"

export function TimeWheel() {
  return (
    <Wrapper size={0.8}>
      <span>
        <h3>Morning</h3>
        <p>Wednesday</p>
      </span>
      <div className='daytime-icon-container'>
        <SunCloud style={{}} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  font-size: ${props => props.size && `${props.size}rem`};
  width: 25em;
  height: 25em;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 0.5em solid transparent;
  padding: 0.5em;

  outline: 0.25em solid #717171;
  outline-offset: -1.2em;
  background-origin: border-box;
  background:
    url(${Afternoon}) content-box,
    linear-gradient(black, black) padding-box,
    linear-gradient(180deg, #4F4F93, var(--color-primary)) border-box
  ;
  
  span{
    position: relative;
    inset: calc(50% + 2em) 0 0 calc(100% - 2em);
  }

  h3{
    position: relative;
    right: 2.5em;
    width: fit-content;
    font-family: "Comfortaa", sans-serif;
    font-size: 2.5em;
    font-weight: 700;
    text-shadow: 
      0px 4px 4px rgba(0, 0, 0, 0.25),
      -1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000
    ;
  }

  p{
    position: relative;
    inset: 1em 0 0 -4em;
    width: fit-content;
    font-size: 1.125em;
    font-family: "Verdana", sans-serif;
    padding: 0.125em 1.75em;
    background-color: black;
    background-position: center;
    border-radius: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  h3, p{
    color: white;
  }

  .daytime-icon-container{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    inset: 88% 0 0 60%;
    width: 15%;
    height: 15%;
    padding: 0.125em;
    border: 0.5em solid var(--color-primary);
    background-color: black;
    border-radius: 50%;
    box-shadow: 0 0.25em 0.25em rgba(0, 0, 0, 0.25);

    svg path{
      fill: var(--color-primary);
    }
  }
`