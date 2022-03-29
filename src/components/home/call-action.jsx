import React from "react"
import styled from "styled-components"
import { down } from "styled-breakpoints"

import Heading from "../common/heading"

import { Wrapper } from "../styled/lib"
import { CTABack } from "../../utils/imgImport"

const Inner = styled.div`
  position: relative;
  margin: 100px 0;
  padding: 90px 25px;
  background: linear-gradient(0deg, #f7f9ff -25%, #f0f4ff 125%);
  border-radius: 60px;
  text-align: center;
  z-index: 0;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 391px;
    height: 351px;
    background-image: url(${CTABack});
    background-repeat: no-repeat;
    background-size: contain;
    z-index: -1;
    ${down("md")} {
      width: 104px;
      height: 90px;
    }
  }
  ${down("md")} {
    margin: 50px 0;
    padding-top: 30px;
    padding-bottom: 30px;
    border-radius: 20px;
  }
`

const CallToAction = () => (
  <Wrapper className="container">
    <Inner>
      <Heading
        title="Ready to get ahead of the competitors"
        subtitle="Instant sign up, no credit card required"
        align="center"
      />
      <button className="btn-blue mt-3 mt-sm-5">Try for FREE</button>
    </Inner>
  </Wrapper>
)

export default CallToAction
