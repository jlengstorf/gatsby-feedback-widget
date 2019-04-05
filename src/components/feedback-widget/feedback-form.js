import React from "react"
import { keyframes } from "@emotion/core"
import styled from "@emotion/styled"
import WidgetWrapper from "./widget-wrapper"
import { SubmitButton, CloseButton } from "./buttons"
import ScreenReaderText from "./screen-reader-text"
import RatingOption from "./rating-option"

const loading = keyframes`
  from {
    opacity: 1;
    transform: scale(0.01);
  }

  30% {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: scale(1);
  }
`

const Form = styled("form")`
  &.submitting {
    position: relative;

    ::before,
    ::after {
      background: radial-gradient(#66339900, rebeccapurple);
      border: 2px solid rebeccapurple;
      border-radius: 50%;
      content: " ";
      height: 5rem;
      left: calc(50% - 2.5rem);
      position: absolute;
      top: calc(50% - 2.5rem);
      width: 5rem;
      animation: ${loading} 1s ease-in infinite;
    }
    ::after {
      animation-delay: -500ms;
    }
  }
  @media screen and (prefers-reduced-motion: reduce) {
    &.submitting::before,
    &.submitting::after {
      display: none;
    }
  }
`

const Fieldset = styled("fieldset")`
  border: 0;
  margin: 0 0 1rem;
  padding: 0;

  &:disabled {
    opacity: 0.5;
  }
`

const TextareaLabel = styled("label")`
  font-size: 0.875rem;
  font-weight: bold;

  &.disabled {
    opacity: 0.5;
  }
`

const Textarea = styled("textarea")`
  border: 1px solid #ddd;
  display: block;
  font-weight: normal;
  margin: 0 0 1rem;
  width: 100%;

  &:disabled {
    opacity: 0.5;
  }
`

const FeedbackForm = ({
  handleSubmit,
  handleClose,
  handleChange,
  handleCommentChange,
  titleRef,
  rating,
  comment,
  submitting,
}) => (
  <WidgetWrapper id="feedback-widget" handleClose={handleClose}>
    <Form
      onSubmit={handleSubmit}
      className={`${submitting ? "submitting" : ""}`}
    >
      <Fieldset className="ratings" disabled={submitting}>
        <legend>
          <h2 ref={titleRef} tabIndex="-1">
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
      <TextareaLabel className={`textarea ${submitting ? "disabled" : ""}`}>
        Your comments (optional):
        <Textarea
          value={comment}
          onChange={handleCommentChange}
          disabled={submitting}
        />
      </TextareaLabel>
      <SubmitButton type="submit" disabled={submitting}>
        Submit
      </SubmitButton>
      <CloseButton onClick={handleClose} disabled={submitting}>
        Close{" "}
        <ScreenReaderText className="sr-only">this widget</ScreenReaderText>
      </CloseButton>
    </Form>
  </WidgetWrapper>
)

export default FeedbackForm
