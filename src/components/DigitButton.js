import React from "react"
import { Button } from "../styles/stylesComponents"
import { ACTIONS } from "../App"

const DigitButton = ({ dispatch, digit }) => {
  return (
    <Button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </Button>
  )
}

export default DigitButton
