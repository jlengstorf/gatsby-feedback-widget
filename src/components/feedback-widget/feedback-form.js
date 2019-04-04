import React from "react"
import styled from "@emotion/styled"
import WidgetWrapper from "./widget-wrapper"
import { SubmitButton, CloseButton } from "./buttons"
import ScreenReaderText from "./screen-reader-text"
import RatingOption from "./rating-option"

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

const FeedbackForm = ({
  handleSubmit,
  handleClose,
  handleChange,
  handleCommentChange,
  titleRef,
  rating,
  comment,
}) => (
  <WidgetWrapper id="feedback-widget" handleClose={handleClose}>
    <form onSubmit={handleSubmit}>
      <Fieldset className="ratings">
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
      <TextareaLabel className="textarea">
        Your comments (optional):
        <Textarea value={comment} onChange={handleCommentChange} />
      </TextareaLabel>
      <SubmitButton type="submit">Submit</SubmitButton>
      <CloseButton onClick={handleClose}>
        Close{" "}
        <ScreenReaderText className="sr-only">this widget</ScreenReaderText>
      </CloseButton>
    </form>
  </WidgetWrapper>
)

export default FeedbackForm
