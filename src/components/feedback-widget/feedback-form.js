import React from "react"
import { keyframes } from "@emotion/core"
import styled from "@emotion/styled"
import WidgetWrapper from "./widget-wrapper"
import { SubmitButton, CloseButton, focusStyle } from "./buttons"
import ScreenReaderText from "./screen-reader-text"
import RatingOption from "./rating-option"
import {
  MdSentimentDissatisfied,
  MdSentimentNeutral,
  MdSentimentVerySatisfied,
} from "react-icons/md"

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
  margin-bottom: 0;

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
const Title = styled(`h2`)`
  display: block;
  font-size: 1.2rem;
  letter-spacing: -0.01em;
  line-height: 1.2;
  margin: 0;
  margin-bottom: 0.5rem;
  text-align: center;
`

const Fieldset = styled("fieldset")`
  border: 0;
  margin: 0 0 1rem;
  padding: 0;

  &:disabled {
    opacity: 0.5;
  }
`

const Legend = styled(`legend`)`
  display: inline-block;
  font-size: 0.875rem;
  margin-bottom: 1em;
  padding: 0.1em 0.5em;
  text-align: center;
`

const Rating = styled(`div`)`
  border: 3px solid #8a4baf;
  border-radius: 8px;
  display: flex;
  flex: 1 1 auto;
  justify-content: stretch;
  align-content: stretch;
  overflow: hidden;
  width: 99.99%;
  transition: 0.5s;
  background: red;

  &:focus-within {
    ${focusStyle}
  }
`

const TextareaLabel = styled("label")`
  font-size: 0.875rem;
  font-weight: bold;

  span {
    font-weight: normal;
  }

  &.disabled {
    opacity: 0.5;
  }
`

const Textarea = styled("textarea")`
  border: 1px solid #999;
  color: #333;
  display: block;
  font-weight: normal;
  height: 100px;
  margin: 0.25rem 0 1rem;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  width: 99%;

  &:focus {
    ${focusStyle}
  }

  &:disabled {
    opacity: 0.5;
  }
`

const Actions = styled(`div`)`
  align-items: center;
  display: flex;
  justify-content: space-between;
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
      <Title>Was this doc helpful to you?</Title>
      <Fieldset className="ratings" disabled={submitting}>
        <Legend ref={titleRef} tabIndex="-1">
          Rate your experience
        </Legend>
        <Rating>
          <RatingOption
            emojiLabel="frowning face"
            emoji="🙁"
            icon={MdSentimentDissatisfied}
            ratingText="poor"
            ratingValue="1"
            checked={rating === 1}
            handleChange={handleChange}
          />
          <RatingOption
            emojiLabel="neutral face"
            emoji="😐"
            icon={MdSentimentNeutral}
            ratingText="fine"
            ratingValue="2"
            checked={rating === 2}
            handleChange={handleChange}
          />
          <RatingOption
            emojiLabel="smiling face"
            emoji="😄"
            icon={MdSentimentVerySatisfied}
            ratingText="great"
            ratingValue="3"
            checked={rating === 3}
            handleChange={handleChange}
          />
        </Rating>
      </Fieldset>
      <TextareaLabel className={`textarea ${submitting ? "disabled" : ""}`}>
        Your comments <span>(optional):</span>
        <Textarea
          value={comment}
          onChange={handleCommentChange}
          disabled={submitting}
        />
      </TextareaLabel>
      <Actions>
        <CloseButton onClick={handleClose} disabled={submitting}>
          Close{" "}
          <ScreenReaderText className="sr-only">this widget</ScreenReaderText>
        </CloseButton>
        <SubmitButton type="submit" disabled={submitting}>
          Submit
        </SubmitButton>
      </Actions>
    </Form>
  </WidgetWrapper>
)

export default FeedbackForm
