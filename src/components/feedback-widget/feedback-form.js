import React, { Fragment } from "react"
// import { keyframes } from "@emotion/core"
import styled from "@emotion/styled"
import WidgetWrapper from "./widget-wrapper"
import { SubmitButton, CloseButton, focusStyle } from "./buttons"
import { Actions, Title, ScreenReaderText } from "./styled-elements"
import RatingOption from "./rating-option"
import {
  MdSentimentDissatisfied,
  MdSentimentNeutral,
  MdSentimentVerySatisfied,
  MdSend,
  MdRefresh,
} from "react-icons/md"

// const loading = keyframes`
//   from {
//     opacity: 1;
//     transform: scale(0.01);
//   }

//   30% {
//     opacity: 1;
//   }

//   to {
//     opacity: 0;
//     transform: scale(1);
//   }
// `

const Form = styled("form")`
  margin-bottom: 0;

  ${"" /* &.submitting {
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
  } */}
`

const Fieldset = styled("fieldset")`
  border: 0;
  margin: 0 0 1rem;
  padding: 0;
`

const Legend = styled(`legend`)`
  display: inline-block;
  font-size: 0.875rem;
  margin-bottom: 1em;
  padding: 0.1em 0.5em;
  text-align: center;
`

const Rating = styled(`div`)`
  align-content: stretch;
  border: 3px solid #8a4baf;
  border-radius: 8px;
  display: flex;
  flex: 1 1 auto;
  justify-content: stretch;
  overflow: hidden;
  transition: 0.5s;
  width: 99.99%;

  &:focus-within {
    ${focusStyle}
  }

  [disabled] & {
    opacity: 0.5;
  }
`

const TextareaLabel = styled("label")`
  font-size: 0.875rem;
  font-weight: bold;

  span {
    font-weight: normal;
  }
`

const Textarea = styled("textarea")`
  border: 1px solid #999;
  border-radius: 4px;
  color: #333;
  display: block;
  font-weight: normal;
  height: 100px;
  margin: 0.25rem 0 1rem;
  padding: 0.25rem 0.5rem;
  transition: 0.5s;
  width: 99%;

  &:focus {
    ${focusStyle}
  }

  &:disabled {
    cursor: not-allowed;
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
}) => {
  return (
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
              iconLabel="frowning face"
              icon={MdSentimentDissatisfied}
              ratingText="poor"
              ratingValue="1"
              checked={rating === 1}
              handleChange={handleChange}
            />
            <RatingOption
              iconLabel="neutral face"
              icon={MdSentimentNeutral}
              ratingText="fine"
              ratingValue="2"
              checked={rating === 2}
              handleChange={handleChange}
            />
            <RatingOption
              iconLabel="smiling face"
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
            Cancel{" "}
            <ScreenReaderText className="sr-only">this widget</ScreenReaderText>
          </CloseButton>
          <SubmitButton
            type="submit"
            className={submitting && "submitting"}
            disabled={submitting}
          >
            {submitting ? (
              <Fragment>
                Sending, wait <MdRefresh />
              </Fragment>
            ) : (
              <Fragment>
                Send feedback
                <MdSend />
              </Fragment>
            )}
          </SubmitButton>
        </Actions>
      </Form>
    </WidgetWrapper>
  )
}

export default FeedbackForm
