import styled from 'styled-components'
import Afternoon from "assets/images/daytime/afternoon.jpg"
import { ReactComponent as SunCloud } from "assets/icons/sun-cloud.svg"

export function TimeWheel() {
  return (
    <Wrapper>
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
  width: min(400px, 40vw);
  aspect-ratio: 1 / 1;
  top: 0;
  left: 0;
  border-radius: 50%;
  border: 12px solid transparent;
  padding: 12px;
  transform: translate(-50%, -50%);
  background:
    url(${Afternoon}) content-box,
    linear-gradient(black, black) padding-box,
    linear-gradient(180deg, #4F4F93, var(--color-primary)) border-box
  ;
  outline: 8px solid #717171;
  outline-offset: -30px;
  background-origin: border-box;
  
  span{
    position: relative;
    inset: calc(50% + 2em) 0 0 calc(100% - 2em);
  }

  h3{
    position: relative;
    right: 2.5em;
    width: fit-content;
    font-family: "Comfortaa", sans-serif;
    font-size: min(2.5rem, 4vw);
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
    font-size: min(1.125rem, 2vw);
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
    position: relative;
    inset: calc(80% - 10px) 0 0 55%;
    width: 18%;
    height: 18%;
    padding: 2px;
    border: min(1vw, 10px) solid var(--color-primary);
    background-color: black;
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    svg path{
      fill: var(--color-primary);
    }
  }
`