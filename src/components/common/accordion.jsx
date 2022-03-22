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
  width: 45px;
  height: 45px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  text-align: center;
  background-color: ${props => (props.active ? "#08b689" : "#eaf0fb")};
  flex-shrink: 0;
  ${down("sm")} {
    width: 26px;
    height: 26px;
  }
`
const Mark = styled.p`
  width: 100%;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  line-height: 70px;
  color: ${props => (props.active ? "#fff" : "#4478db")};
  ${down("sm")} {
    font-size: 18px;
    line-height: 41.15px;
  }
`
const Accordion = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Article>
      <Header onClick={() => setExpanded(!expanded)}>
        <Question active={expanded ? true : false}>{title}</Question>
        <Icon active={expanded ? true : false}>
          {expanded ? (
            <Mark active={expanded ? true : false}>-</Mark>
          ) : (
            <Mark active={expanded ? true : false}>+</Mark>
          )}
        </Icon>
      </Header>
      {expanded && <Content>{content}</Content>}
    </Article>
  )
}

export default Accordion
