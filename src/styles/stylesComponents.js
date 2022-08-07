import styled from "styled-components"

export const MainWrapper = styled.div`
  justify-content: center;
  display: grid;
  margin-top: 2rem;
  grid-template-columns: repeat(4, 6rem);
  grid-template-rows: minmax(7rem, auto) repeat(5, 6rem);
`

export const CalculatorGrid = styled.div`
  grid-column: 1/-1;
  background-color: hsl(220, 13%, 38%);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  padding: 0.75rem;
  word-wrap: break-word;
  word-break: break-all;
`

export const Output = styled.div`
  display: grid;
  color: black;
`

export const PreviousOperand = styled.div`
  color: hsl(0, 0%, 100%, 0.55);
  font-size: 1.5rem;
`
export const CurrentOperand = styled.div`
  color: snow;
  font-size: 2.5rem;
`

export const Button = styled.button`
  background-color: hsl(38.8, 100%, 50%);
  grid-column: ${(x) => x.spanTwo && "span 2"};
  cursor: pointer;
  font-size: 2rem;
  border: 1px solid white;
  outline: none;

  &:hover,
  &:focus {
    background-color: hsl(38.8, 100%, 40%);
  }
`
