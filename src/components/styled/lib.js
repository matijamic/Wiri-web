import styled from "styled-components"
import { up } from "styled-breakpoints"

export const Wrapper = styled.div`
  position: relative;
  ${up("xxl")} {
    max-width: calc(100% - 250px) !important;
  }
`
