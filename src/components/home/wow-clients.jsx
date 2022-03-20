import React from "react"
import styled from "styled-components"
import { down } from "styled-breakpoints"

import Heading from "../common/heading"

import { WowImg } from "../../utils/imgImport"
import { benefits } from "../../utils/staticData"

const Benfit = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 50px;
  ${down("sm")} {
    margin-bottom: 20px;
  }
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
  ${down("sm")} {
    width: 60px;
    height: 60px;
    img {
      width: 24px;
    }
  }
`
const Content = styled.p`
  font-size: 21px;
  font-weight: 300;
  line-height: 29px;
  letter-spacing: -0.21px;
  color: #636363;
  ${down("sm")} {
    font-size: 13px;
    line-height: 19px;
  }
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
            <div className="mt-4 mt-md-5">
              {benefits.map((item, idx) => (
                <Benfit key={idx}>
                  <Icon>
                    <img src={item.icon} alt="icon" />
                  </Icon>
                  <div>
                    <h3>{item.caption}</h3>
                    <Content>{item.content}</Content>
                  </div>
                </Benfit>
              ))}
            </div>
          </Inner>
        </div>
      </Row>
    </div>
  </section>
)

export default WowClients
