import React from "react"
import styled from "styled-components"
import { down } from "styled-breakpoints"

import Heading from "../common/heading"

import { WowImg } from "../../utils/imgImport"
import { provides } from "../../utils/staticData"

const Provider = styled.div`
  display: flex;
  align-items: center;
`
const Icon = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  box-shadow: 0 18px 54px rgba(50, 69, 101, 0.11);
  background-color: #ffffff;
  margin-right: 30px;
  border-radius: 50%;
  flex-shrink: 0;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
const Caption = styled.h3`
  font-size: 35px;
  font-weight: 700;
  line-height: 45px;
  letter-spacing: -1.05px;
`
const Content = styled.p`
  font-size: 21px;
  font-weight: 300;
  line-height: 29px;
  letter-spacing: -0.21px;
  color: #636363;
`
const Inner = styled.div`
  max-width: 556px;
  margin-left: auto;
  margin-right: auto;
`
const Row = styled.div`
  ${down("lg")} {
    flex-direction: column-reverse;
  }
`

const WowClients = () => (
  <section className="wow-clients">
    <div className="container">
      <Row className="row align-items-center justify-content-around">
        <div className="col-lg-6 mt-5 mt-lg-none">
          <img className="w-100" src={WowImg} alt="wow img" />
        </div>
        <div className="col-lg-6">
          <Inner>
            <Heading
              title="Wow your clients"
              subtitle={`Provide an overview of this product's
secondary benefits.`}
              align="left"
            />
            {provides.map((item, idx) => (
              <Provider key={idx}>
                <Icon>
                  <img src={item.icon} alt="icon" />
                </Icon>
                <div>
                  <Caption>{item.caption}</Caption>
                  <Content>{item.content}</Content>
                </div>
              </Provider>
            ))}
          </Inner>
        </div>
      </Row>
    </div>
  </section>
)

export default WowClients
