import React from "react"
import styled from "styled-components"
import { down } from "styled-breakpoints"

import { FaqImg } from "../../utils/imgImport"
import Heading from "../common/heading"
import { faqs } from "../../utils/staticData"
import Accordion from "../common/accordion"

const Inner = styled.div`
  max-width: 556px;
  margin-left: auto;
  margin-right: auto;
`
const Row = styled.div`
  ${down("lg")} {
    flex-direction: column-reverse;
  }
  ${down("md")} {
    h2 {
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      &::after {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  ${down("sm")} {
    h2 {
      max-width: 205px;
    }
  }
`

const Faq = () => (
  <section className="faq-container">
    <div className="container">
      <Row className="row justify-content-around">
        <div className="col-lg-6 mt-5 mt-lg-none text-center">
          <img className="w-75" src={FaqImg} alt="faq img" />
        </div>
        <div className="col-lg-6">
          <Inner>
            <Heading title="Frequently Asked Question " align="left" />
            <div className="mt-4 mt-md-5">
              {faqs.map((item, idx) => (
                <Accordion key={idx} {...item} />
              ))}
            </div>
          </Inner>
        </div>
      </Row>
    </div>
  </section>
)

export default Faq
