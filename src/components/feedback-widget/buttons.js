import { css } from "@emotion/core"
import styled from "@emotion/styled"

export const focusStyle = css`
  box-shadow: 0 0 0 0.12rem #ffb238;
  outline: none;
`

const buttonStyles = css`
  align-items: center;
  background: rebeccapurple;
  border: none;
  border-radius: 2px;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 0.875rem;
  font-family: sans-serif;
  padding: 0.3rem 0.75rem;
  z-index: 1;
  -webkit-appearance: none;

  svg {
    margin-left: 0.5rem;
  }

  &:focus {
    ${focusStyle}
  }

  &:disabled {
    opacity: 0.5;
  }
`

export const OpenButton = styled("button")`
  ${buttonStyles};
  display: block;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
`

export const SubmitButton = styled("button")`
  ${buttonStyles};
`

export const CloseButton = styled("button")`
  ${buttonStyles};
  background: #fff;
  border: 1px solid rebeccapurple;
  color: rebeccapurple;
`
