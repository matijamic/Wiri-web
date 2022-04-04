import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  DealsImg,
  MenuImg,
  QuestionImg,
  ReviewImg,
} from "../../utils/imgImport"

const HomeHero = () => {
  const { allPrismicHomeHero } = useStaticQuery(graphql`
    query {
      allPrismicHomeHero {
        nodes {
          data {
            title
            subtitle
            hero_image {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)
  const homeData = allPrismicHomeHero.nodes[0].data
  const heroImg = getImage(homeData.hero_image)

  return (
    <section className="container">
      <div className="home-hero">
        <div className="row align-items-center">
          <div className="col-lg-6 left-side">
            <h1 className="title">
              {homeData.title}
              {/* <span className="blue-line">business app</span> */}
              <span className="txt-green">.</span>
            </h1>
            <p className="subtitle mb-5">{homeData.subtitle}</p>
            <button className="btn-blue">Try for FREE</button>
            <p className="bottom-text">No credit card required</p>
          </div>
          <div className="col-lg-6 right-side">
            <GatsbyImage image={heroImg} alt="hero img" />
            <img
              className="float review-img"
              src={ReviewImg}
              alt="review img"
            />
            <img className="float menu-img" src={MenuImg} alt="review img" />
            <img className="float deals-img" src={DealsImg} alt="review img" />
            <img
              className="float question-img"
              src={QuestionImg}
              alt="review img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
