import React, { useState } from "react"
import { down } from "styled-breakpoints"
import styled from "styled-components"

const Article = styled.div`
  padding: 1rem 1.5rem;
  box-shadow: 0 12px 49px rgba(48, 48, 48, 0.08);
  border-radius: 10px;
  background-color: #ffffff;
  margin-bottom: 1rem;
`
const Question = styled.h4`
  color: ${props => (props.active ? "#08b689" : "#303030")};
  font-weight: 700;
  font-size: 25px;
  letter-spacing: -0.75px;
  text-align: left;
  line-height: 35px;
  margin-bottom: 0;
  ${down("sm")} {
    font-size: 15px;
    line-height: 20.57px;
  }
`
const Content = styled.p`
  padding-right: 50px;
  color: #404040;
  font-size: 20px;
  font-weight: 300;
  line-height: 25px;
  ${down("sm")} {
    font-size: 12px;
    line-height: 14.7px;
  }
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

const Icon = styled.div`
  position: relative;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #eaf0fb;
  flex-shrink: 0;
  &::before {
    content: "+";
    position: absolute;
    top: 52%;
    left: 51%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    font-weight: 700;
    line-height: 0;
    color: #4478db;
  }
  &.active {
    background-color: #08b689;
    &::before {
      content: "-";
      top: 48%;
      color: #fff;
    }
  }
  ${down("sm")} {
    width: 26px;
    height: 26px;
    &::before {
      top: 50%;
      font-size: 18px;
    }
  }
`

const Accordion = ({ data }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Article>
      <Header onClick={() => setExpanded(!expanded)}>
        <Question active={expanded}>{data.question}</Question>
        <Icon active={expanded} className={expanded ? "active" : ""}></Icon>
      </Header>
      {expanded && <Content>{data.answer}</Content>}
    </Article>
  )
}

export default Accordion
