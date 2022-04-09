import React, { useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import styled from "styled-components"
import { down, up } from "styled-breakpoints"

import Heading from "../common/heading"

import { Wrapper, SlickArrows } from "../styled/lib"
import { AppBack, LeftArrow, RightArrow } from "../../utils/imgImport"
// import { appImgs } from "../../utils/staticData"

const Section = styled.section`
  margin-bottom: 300px;
  ${up("sm")} {
    margin-bottom: 470px;
  }
  ${up("md")} {
    margin-bottom: 250px;
  }
  ${up("xxl")} {
    margin-bottom: 350px;
  }
  ${down("md")} {
    .app-arrows {
      display: block;
    }
  }
`
const Inner = styled.div`
  position: relative;
  padding: 50px 38px 215px;
  background-color: #f0fbf8;
  border-radius: 20px;
  z-index: 1;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 90px;
    height: 104px;
    background-image: url(${AppBack});
    background-repeat: no-repeat;
    background-size: contain;
    z-index: -1;
    ${up("sm")} {
      width: 187px;
      height: 214px;
    }
    ${up("md")} {
      width: 202px;
      height: 180px;
    }
    ${up("lg")} {
      width: 243px;
      height: 215px;
    }
    ${up("xl")} {
      width: 290px;
      height: 258px;
    }
    ${up("xxl")} {
      width: 360px;
      height: 320px;
    }
  }
  ${up("sm")} {
    padding: 102px 77px 364px;
    border-radius: 36px;
  }
  ${up("md")} {
    padding-top: 83px;
    padding-bottom: 256px;
    border-radius: 40px;
  }
  ${up("lg")} {
    padding-top: 103px;
    padding-bottom: 308px;
  }
  ${up("xl")} {
    padding-top: 122px;
    padding-bottom: 367px;
  }
  ${up("xxl")} {
    padding-top: 156px;
    padding-bottom: 452px;
  }
`
const AppSlider = styled.div`
  position: absolute;
  top: 180px;
  width: 100%;
  ${up("sm")} {
    top: 389px;
  }
  ${up("md")} {
    top: 204px;
  }
  ${up("lg")} {
    top: 244px;
  }
  ${up("xl")} {
    top: 292px;
  }
  ${up("xxl")} {
    top: 363px;
  }
`
const AppSlide = styled.div`
  width: 178px;
  height: 363px;
  box-shadow: 0 12px 43px rgba(83, 96, 129, 0.17);
  border-radius: 15px;
  background-color: #ffffff;
  margin: 0 20px;
  padding: 7px;
  ${up("sm")} {
    width: 301px;
    height: 616px;
    box-shadow: 0 20px 73px rgba(83, 96, 129, 0.17);
    border-radius: 25px;
    padding: 12px;
  }
  ${up("md")} {
    width: 168px;
    height: 345px;
    box-shadow: 0 10px 38px rgba(83, 96, 129, 0.17);
    border-radius: 20px;
    padding: 6px;
  }
  ${up("lg")} {
    width: 203px;
    height: 416px;
    box-shadow: 0 13px 46px rgba(83, 96, 129, 0.17);
    border-radius: 16px;
    padding: 8px;
  }
  ${up("xl")} {
    width: 242px;
    height: 496px;
    box-shadow: 0 15px 53px rgba(83, 96, 129, 0.17);
    border-radius: 20px;
    padding: 9px;
  }
  ${up("xxl")} {
    width: 301px;
    height: 616px;
    box-shadow: 0 20px 73px rgba(83, 96, 129, 0.17);
    border-radius: 25px;
    padding: 12px;
  }
`

const AppIntro = () => {
  const { allPrismicAppScreenshots } = useStaticQuery(graphql`
    query {
      allPrismicAppScreenshots {
        nodes {
          data {
            title
            subtitle
            screenshots {
              name
              image {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)
  const appData = allPrismicAppScreenshots.nodes[0].data

  const slider = useRef()
  const next = () => {
    slider.current.slickNext()
  }
  const previous = () => {
    slider.current.slickPrev()
  }
  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
    ],
  }

  return (
    <Section className="position-relative">
      <Wrapper className="container">
        <Inner>
          <Heading
            title={appData.title}
            subtitle={appData.subtitle}
            align="center"
          />
        </Inner>
      </Wrapper>
      <AppSlider>
        <Slider
          className="app-slider"
          ref={c => (slider.current = c)}
          {...settings}
        >
          {appData.screenshots.map((item, idx) => (
            <div className="d-flex justify-content-center" key={idx}>
              <AppSlide>
                <GatsbyImage image={getImage(item.image)} alt={item.name} />
                {/* <img className="w-100" src={item} alt={item.name} /> */}
              </AppSlide>
            </div>
          ))}
        </Slider>
        <SlickArrows className="app-arrows">
          <button onClick={previous}>
            <LeftArrow />
          </button>
          <button onClick={next}>
            <RightArrow />
          </button>
        </SlickArrows>
      </AppSlider>
    </Section>
  )
}
export default AppIntro
