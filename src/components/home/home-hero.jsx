import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { HeroBack } from "../../utils/imgImport"
import styled from "styled-components"

const BackImg = styled.img`
  position: absolute;
  width: calc(100% - 40px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

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
            menu_image {
              gatsbyImageData
            }
            promotion_image {
              gatsbyImageData
            }
            qr_image {
              gatsbyImageData
            }
            question_image {
              gatsbyImageData
            }
            rating_image {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)
  const homeData = allPrismicHomeHero.nodes[0].data

  return (
    <section className="container">
      <div className="home-hero">
        <div className="row align-items-center">
          <div className="col-lg-6 left-side">
            <h1 className="title">
              <span className="blue-line">{homeData.title}</span>
              <span className="txt-green">.</span>
            </h1>
            <p className="subtitle mb-5">{homeData.subtitle}</p>
            <button className="btn-blue">Try for FREE</button>
            <p className="bottom-text">No credit card required</p>
          </div>
          <div className="col-lg-6 right-side">
            {/* <BackImg src={HeroBack} alt="back img" /> */}
            <GatsbyImage
              image={getImage(homeData.hero_image)}
              alt="hero img"
              className="hero-img"
            />
            <GatsbyImage
              className="float review-img"
              image={getImage(homeData.rating_image)}
              alt="rating img"
            />
            <GatsbyImage
              className="float menu-img"
              image={getImage(homeData.menu_image)}
              alt="menu img"
            />
            <GatsbyImage
              className="float deals-img"
              image={getImage(homeData.promotion_image)}
              alt="promotion img"
            />
            <GatsbyImage
              className="float question-img"
              image={getImage(homeData.question_image)}
              alt="question img"
            />
            <GatsbyImage
              className="qr-img"
              image={getImage(homeData.qr_image)}
              alt="qr img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
