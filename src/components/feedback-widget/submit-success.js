import React from "react"
import WidgetWrapper from "./widget-wrapper"
import { CloseButton } from "./buttons"

const SubmitSuccess = ({ handleClose, titleRef }) => (
  <WidgetWrapper className="feedback-success" handleClose={handleClose}>
    <h2 ref={titleRef} tabIndex="-1">
      Thanks for your feedback!
    </h2>
    <p>Your ratings and comments can help make Gatsby even better.</p>
    <CloseButton className="dismiss" onClick={handleClose}>
      Dismiss
    </CloseButton>
  </WidgetWrapper>
)

export default SubmitSuccess
