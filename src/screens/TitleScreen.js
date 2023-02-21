import styled from "styled-components"
import { Button } from "components"
import image from "assets/images/background/title.jpg"

export function TitleScreen() {
  return (
    <Wrapper>
      <h1>Title</h1>
      <nav>
        <Button>New Game</Button>
        <Button>Load Game</Button>
        <Button>Settings</Button>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.main`  
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding: 15vh 0 25vh;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center right;

  h1{
    font-size: 6rem;
    font-family: 'Julee', cursive;
    margin-bottom: 1em;
    color: black;
    -webkit-text-fill-color: white;
    -webkit-text-stroke-width: 1.25px;
    -webkit-text-stroke-color: black;
  }

  nav{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: auto;

    > * {
      width: fit-content;
    }
  }
`