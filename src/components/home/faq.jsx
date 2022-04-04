import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { down } from "styled-breakpoints"

import Heading from "../common/heading"
import Accordion from "../common/accordion"

// import { faqs } from "../../utils/staticData"

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
      max-width: 203px;
    }
  }
`

const Faq = () => {
  const { allPrismicFaqs } = useStaticQuery(graphql`
    query {
      allPrismicFaqs {
        nodes {
          data {
            title
            image {
              gatsbyImageData
            }
            questions {
              question
              answer
            }
          }
        }
      }
    }
  `)
  const faqData = allPrismicFaqs.nodes[0].data

  return (
    <section className="faq-container">
      <div className="container">
        <Row className="row justify-content-around">
          <div className="col-lg-6 mt-5 mt-lg-none text-center">
            <GatsbyImage image={getImage(faqData.image)} alt="hero img" />
          </div>
          <div className="col-lg-6">
            <Inner>
              <Heading title={faqData.title} align="left" />
              <div className="mt-4 mt-md-5">
                {faqData.questions.map((item, idx) => (
                  <Accordion key={idx} data={item} />
                ))}
              </div>
            </Inner>
          </div>
        </Row>
      </div>
    </section>
  )
}

export default Faq
