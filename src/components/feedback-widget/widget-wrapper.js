/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"

const WrapperDiv = styled(`div`)`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  bottom: 4rem;
  font-family: sans-serif;
  padding: 1rem;
  position: fixed;
  right: 1rem;
  width: 300px;
  z-index: 2;

  [tabindex="-1"]:focus {
    outline: none;
  }
`

const WidgetWrapper = ({ children, handleClose = () => {} }) => {
  const handleEscapeKey = event => {
    if (event.keyCode === 27) {
      handleClose()
    }
  }

  return (
    <WrapperDiv onKeyDown={handleEscapeKey}>
      {children}
    </WrapperDiv>
  )
}

export default WidgetWrapper
