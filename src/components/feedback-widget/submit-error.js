import React from "react"
import WidgetWrapper from "./widget-wrapper"
import { CloseButton } from "./buttons"
import { Actions, ScreenReaderText, Title } from "./styled-elements"
import { SubmitButton } from "./buttons"
import MdArrowForward from "react-icons/lib/md/arrow-forward"

const SubmitError = ({ handleClose, handleOpen }) => (
  <WidgetWrapper className="feedback-success" handleClose={handleClose}>
    <Title>Ups!</Title>
    <p>Something went wrong. Please try again.</p>
    <Actions>
      <CloseButton onClick={handleClose}>
        Cancel{" "}
        <ScreenReaderText className="sr-only">this widget</ScreenReaderText>
      </CloseButton>
      <SubmitButton onClick={handleOpen}>
        Try Again <MdArrowForward />
      </SubmitButton>
    </Actions>
  </WidgetWrapper>
)

export default SubmitError
