import React from "react"
import { up } from "styled-breakpoints"
import styled from "styled-components"

const Title = styled.h2`
  position: relative;
  margin-bottom: 26px;
  ${up("sm")} {
    margin-bottom: 55px;
  }
  ${up("md")} {
    margin-bottom: 14px;
  }
  ${up("lg")} {
    margin-bottom: 21px;
  }
  ${up("xl")} {
    margin-bottom: 23px;
  }
  ${up("xxl")} {
    margin-bottom: 30px;
  }
  &::after {
    content: "";
    position: absolute;
    width: 32px;
    height: 4px;
    border-radius: 2px;
    background-color: #4478db;
    bottom: -7px;
    left: ${props => (props.align === "left" ? "0" : "50%")};
    transform: ${props =>
      props.align === "left" ? "translateX(0)" : "translateX(-50%)"};
    ${up("sm")} {
      width: 66px;
      height: 8px;
      border-radius: 4px;
      bottom: -24px;
    }
    ${up("md")} {
      width: 30px;
      height: 3px;
      border-radius: 2px;
      bottom: 0px;
    }
    ${up("lg")} {
      width: 40px;
      height: 4px;
      border-radius: 2px;
      bottom: 5px;
    }
    ${up("xl")} {
      width: 43px;
      height: 5px;
      border-radius: 3px;
      bottom: -5px;
    }
    ${up("xxl")} {
      width: 55px;
      height: 7px;
      border-radius: 4px;
      bottom: -7px;
    }
  }
`
const Subtitle = styled.p`
  font-size: 18px;
  line-height: 22px;
  ${up("sm")} {
    font-size: 36px;
    line-height: 46px;
  }
  ${up("md")} {
    font-size: 20px;
    line-height: 26px;
  }
  ${up("lg")} {
    font-size: 25px;
    line-height: 32px;
  }
  ${up("xl")} {
    font-size: 27px;
    line-height: 37px;
  }
  ${up("xxl")} {
    font-size: 30px;
    line-height: 41px;
  }
`
const Headline = styled.div`
  text-align: ${props => props.align};
  z-index: 1;
`

const Heading = ({ title, subtitle, align }) => {
  return (
    <Headline align={align}>
      <Title className="title" align={align}>
        {title}
        <span className="txt-green">.</span>
      </Title>
      <Subtitle className="subtitle">{subtitle}</Subtitle>
    </Headline>
  )
}
export default Heading
