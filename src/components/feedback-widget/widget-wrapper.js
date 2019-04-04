/** @jsx jsx */
import { css, jsx } from "@emotion/core"

const wrapperStyles = css`
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
`

const WidgetWrapper = ({ children, handleClose = () => {} }) => {
  const handleEscapeKey = event => {
    if (event.keyCode === 27) {
      handleClose()
    }
  }

  return (
    <div css={wrapperStyles} onKeyDown={handleEscapeKey}>
      {children}
    </div>
  )
}

export default WidgetWrapper
