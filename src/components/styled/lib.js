import styled from "styled-components"
import { up, down } from "styled-breakpoints"

export const Wrapper = styled.div`
  position: relative;
  ${up("xxl")} {
    max-width: calc(100% - 250px) !important;
  }
`
export const SlickArrows = styled.div`
  display: none;
  text-align: center;
  button {
    border: none;
    background-color: unset;
    padding: 0 20px;
    svg {
      &:hover {
        g {
          path {
            fill: #4478db;
            transition: all ease-in-out 0.2s;
          }
        }
      }
      ${down("sm")} {
        width: 11px;
        height: 17px;
      }
    }
  }
`
