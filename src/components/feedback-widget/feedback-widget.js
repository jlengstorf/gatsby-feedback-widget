import React, { useRef, useEffect, useState } from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import RatingOption from "./rating-option"

const buttonStyles = css`
  background: rebeccapurple;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 6px #33333344;
  color: white;
  font-size: 14px;
  font-family: sans-serif;
  padding: 0.25rem 0.5rem;
  z-index: 1;
  -webkit-appearance: none;
`

const OpenButton = styled("button")`
  display: block;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  ${buttonStyles};
`

const WidgetWrapper = styled("div")`
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

const Fieldset = styled("fieldset")`
  border: 0;
  margin: 0 0 1rem;
  padding: 0;
`

const TextareaLabel = styled("label")`
  font-size: 0.875rem;
  font-weight: bold;
`

const Textarea = styled("textarea")`
  border: 1px solid #ddd;
  display: block;
  font-weight: normal;
  margin: 0 0 1rem;
  width: 100%;
`

const SubmitButton = styled("button")`
  ${buttonStyles};
  margin-right: 0.5rem;
`

const srOnly = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  -webkit-clip: rect(0, 0, 0, 0);
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`

const CloseButton = styled("button")`
  ${buttonStyles};
  background: #ddd;
  box-shadow: none;
  color: inherit;
  margin: 0.5rem 0;
`
const ScreenReaderText = styled("span")`
  ${srOnly};
`

const FeedbackWidget = () => {
  // We’re not going to show this widget if JS is disabled
  if (typeof window === "undefined") {
    return null
  }

  const widgetTitle = useRef(null)
  const successTitle = useRef(null)
  const openButton = useRef(null)
  const [hideWidget, setHideWidget] = useState(true)
  const [rating, setRating] = useState(2)
  const [comment, setComment] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = event => {
    setRating(Number(event.target.value))
  }

  const handleCommentChange = event => {
    // TODO is this actually safe?
    const safeComment = event.target.value.replace(/(<([^>]+)>)/gi, "")
    setComment(safeComment)
  }

  const handleSubmit = event => {
    event.preventDefault()

    console.log({
      rating,
      comment,
      originUrl: window.location.href,
    })

    // TODO actually submit form

    setHideWidget(true)
    setIsSubmitted(true)
  }

  const handleOpen = event => {
    event.preventDefault()
    setHideWidget(false)
  }

  const handleClose = event => {
    event.preventDefault()

    setHideWidget(true)
    setIsSubmitted(false)
  }

  const handleEscapeKey = event => {
    const isEscape = event.keyCode === 27

    if (isEscape) {
      handleClose(event)
    }
  }

  useEffect(() => {
    if (hideWidget === false) {
      widgetTitle.current.focus()
    } else {
      openButton.current.focus()
    }
  }, [hideWidget])

  useEffect(() => {
    if (isSubmitted === true) {
      successTitle.current.focus()
    } else {
      openButton.current.focus()
    }
  }, [isSubmitted])

  return (
    <React.Fragment>
      <OpenButton
        ref={openButton}
        className="feedback-trigger"
        aria-haspopup="true"
        aria-controls="feedback-widget"
        onClick={handleOpen}
      >
        Was this doc helpful to you?
      </OpenButton>
      <WidgetWrapper
        className="feedback-widget"
        hidden={hideWidget}
        onKeyDown={handleEscapeKey}
      >
        <form onSubmit={handleSubmit}>
          <Fieldset className="ratings">
            <legend>
              <h2 ref={widgetTitle} tabIndex="-1">
                Rate your experience
              </h2>
            </legend>
            <RatingOption
              emojiLabel="frowning face"
              emoji="🙁"
              ratingText="poor"
              ratingValue="1"
              checked={rating === 1}
              handleChange={handleChange}
            />
            <RatingOption
              emojiLabel="neutral face"
              emoji="😐"
              ratingText="fine"
              ratingValue="2"
              checked={rating === 2}
              handleChange={handleChange}
            />
            <RatingOption
              emojiLabel="smiling face"
              emoji="😄"
              ratingText="great"
              ratingValue="3"
              checked={rating === 3}
              handleChange={handleChange}
            />
          </Fieldset>
          <TextareaLabel className="textarea">
            Your comments (optional):
            <Textarea value={comment} onChange={handleCommentChange} />
          </TextareaLabel>
          <SubmitButton type="submit">Submit</SubmitButton>
          <CloseButton onClick={handleClose}>
              Close <ScreenReaderText className="sr-only">this widget</ScreenReaderText>
          </CloseButton>
        </form>
      </WidgetWrapper>
      <WidgetWrapper
        className="feedback-success"
        hidden={isSubmitted === false}
        onKeyDown={handleEscapeKey}
      >
        <h2 ref={successTitle} tabIndex="-1">
          Thanks for your feedback!
        </h2>
        <p>Your ratings and comments can help make Gatsby even better.</p>
        <CloseButton className="dismiss">Dismiss</CloseButton>
      </WidgetWrapper>
    </React.Fragment>
  )
}

export default FeedbackWidget
