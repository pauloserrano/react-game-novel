import styled from "styled-components"

export function Modal() {
  return (
    <Wrapper>
      <header>
        <h2>Lorem Ipsum</h2>
      </header>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: absolute;
  inset: 10vh 3vw 2vw auto;
  width: 50vw;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  border: 2px solid black;

  header{
    position: absolute;
    min-width: 30%;
    text-align: center;
    padding-block: 0.5em;
    padding-inline: 1.5em;
    inset: -1em auto auto 50%;
    transform: translateX(-50%);
    background-color: black;
    border-radius: 10px;
    font-size: 1.5rem;

  }

  h2{
    color: transparent;
    font-size: inherit;
    font-family: "Amita", cursive;
    font-weight: 700;
    background: linear-gradient(to bottom, var(--color-primary) 30%, var(--color-secondary)) text;
  }
`
