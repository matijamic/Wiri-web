import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { down, up } from "styled-breakpoints"

import Heading from "../common/heading"

// import { WowImg } from "../../utils/imgImport"
// import { benefits } from "../../utils/staticData"

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
  width: 60px;
  height: 60px;
  box-shadow: 0 11px 32px rgba(50, 69, 101, 0.11);
  background-color: #ffffff;
  margin-right: 30px;
  border-radius: 50%;
  flex-shrink: 0;
  img {
    position: absolute;
    width: 24px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  ${up("sm")} {
    width: 121px;
    height: 122px;
    box-shadow: 0 21px 65px rgba(50, 69, 101, 0.11);
    img {
      width: 49px;
    }
  }
  ${up("md")} {
    width: 67px;
    height: 67px;
    box-shadow: 0 9px 28px rgba(50, 69, 101, 0.11);
    img {
      width: 27px;
    }
  }
  ${up("lg")} {
    width: 83px;
    height: 83px;
    box-shadow: 0 11px 34px rgba(50, 69, 101, 0.11);
    img {
      width: 34px;
    }
  }
  ${up("xl")} {
    width: 92px;
    height: 92px;
    box-shadow: 0 13px 39px rgba(50, 69, 101, 0.11);
    img {
      width: 37px;
    }
  }
  ${up("xxl")} {
    width: 100px;
    height: 100px;
    box-shadow: 0 18px 54px rgba(50, 69, 101, 0.11);
    img {
      width: 41px;
    }
  }
`
const Content = styled.p`
  font-size: 13px;
  font-weight: 300;
  line-height: 19px;
  letter-spacing: -0.22px;
  color: #636363;
  ${up("sm")} {
    font-size: 25px;
    line-height: 34px;
    letter-spacing: -0.21px;
  }
  ${up("md")} {
    font-size: 17px;
    line-height: 20px;
    letter-spacing: -0.26px;
  }
  ${up("lg")} {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.24px;
  }
  ${up("xl")} {
    font-size: 22px;
    line-height: 27px;
    letter-spacing: -0.24px;
  }
  ${up("xxl")} {
    font-size: 21px;
    line-height: 29px;
    letter-spacing: -0.21px;
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

const WowClients = () => {
  const { allPrismicWowClients } = useStaticQuery(graphql`
    query {
      allPrismicWowClients {
        nodes {
          data {
            title
            subtitle
            background {
              gatsbyImageData
            }
            benefits {
              title
              content
              icon {
                url
              }
            }
          }
        }
      }
    }
  `)
  const wowData = allPrismicWowClients.nodes[0].data
  const backImg = getImage(wowData.background)

  return (
    <section className="wow-clients">
      <div className="container">
        <Row className="row align-items-center justify-content-around">
          <div className="col-lg-6 mt-5 mt-lg-none">
            <GatsbyImage image={backImg} alt="wow img" />
          </div>
          <div className="col-lg-6">
            <Inner>
              <Heading
                title={wowData.title}
                subtitle={wowData.subtitle}
                align="left"
              />
              <div className="mt-4 mt-md-5">
                {wowData.benefits.map((item, idx) => (
                  <Benfit key={idx}>
                    <Icon>
                      <img src={item.icon.url} alt="icon" />
                    </Icon>
                    <div>
                      <h3>{item.title}</h3>
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
}
export default WowClients
