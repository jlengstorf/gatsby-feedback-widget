import React from "react"
import WidgetWrapper from "./widget-wrapper"
import { CloseButton } from "./buttons"
import ScreenReaderText from "./screen-reader-text"

const SubmitError = ({ handleClose }) => (
  <WidgetWrapper className="feedback-success" handleClose={handleClose}>
    <p>Something went wrong. Please try again.</p>
    <CloseButton onClick={handleClose}>
      Close <ScreenReaderText className="sr-only">this widget</ScreenReaderText>
    </CloseButton>
  </WidgetWrapper>
)

export default SubmitError
