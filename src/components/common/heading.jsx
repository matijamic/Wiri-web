import React from "react"
import { down } from "styled-breakpoints"
import styled from "styled-components"

const Title = styled.h2`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 55px;
    height: 7px;
    border-radius: 4px;
    background-color: #4478db;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    ${down("md")} {
      bottom: -7px;
    }
    ${down("sm")} {
      width: 32px;
      border-radius: 2px;
      height: 4px;
    }
  }
`
const Subtitle = styled.p`
  font-size: 30px;
  line-height: 41px;
  ${down("md")} {
    font-size: 25px;
    line-height: 33px;
  }
`
const Headline = styled.div`
  text-align: center;
  z-index: 1;
`

const Heading = ({ title, subtitle }) => {
  return (
    <Headline>
      <Title className="title">
        {title}
        <span className="txt-green">.</span>
      </Title>
      <Subtitle className="subtitle">{subtitle}</Subtitle>
    </Headline>
  )
}
export default Heading
