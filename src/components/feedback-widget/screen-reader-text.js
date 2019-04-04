import styled from "@emotion/styled"

const ScreenReaderText = styled("span")`
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

export default ScreenReaderText
