import styled from "styled-components"

export const Button = ({ children, ...props}) => {
  return (
    <Wrapper {...props}>
      <span>{children}</span>
    </Wrapper>
  )
}

const Wrapper = styled.button`
  position: relative;
  min-height: 60px;
  font-size: 1.5rem;
  font-family: 'Georgia', sans-serif;
  color: #D4D4D4;
  padding: 1rem 4rem;
  outline: transparent;
  border: 1px solid #D4D4D4;
  border-radius: 0.75rem;
  background-color: #262626;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transform: translateY(0);
  cursor: pointer;

  &:hover, &:focus{
    border: 1px solid transparent;
    background:
      linear-gradient(#262626, #262626) padding-box,
      linear-gradient(to right, var(--color-primary) 30%, var(--color-secondary)) border-box
    ;
    background-origin: border-box;
    transform: translateY(-2px);
    transition: all 0.2s ease-out;

    span{
      color: transparent;
      background: linear-gradient(to bottom, var(--color-primary) 30%, var(--color-secondary)) text;
    }
  }


  &:not(:last-of-type){
    margin-bottom: 1rem;
  }
`