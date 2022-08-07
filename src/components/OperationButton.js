import { Button } from "../styles/stylesComponents"
import { ACTIONS } from "../App"

const OperationButton = ({ dispatch, operation }) => {
  return (
    <Button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </Button>
  )
}

export default OperationButton
