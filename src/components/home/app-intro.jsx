import React, { useRef } from "react"
import Slider from "react-slick"
import styled from "styled-components"
import { down } from "styled-breakpoints"

import Heading from "../common/heading"

import { Wrapper, SlickArrows } from "../styled/lib"
import { AppBack, LeftArrow, RightArrow } from "../../utils/imgImport"
import { appImgs } from "../../utils/staticData"

const Inner = styled.div`
  position: relative;
  padding: 150px 50px 400px;
  border-radius: 60px;
  background-color: #f0fbf8;
  z-index: 1;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 360px;
    height: 320px;
    background-image: url(${AppBack});
    background-repeat: no-repeat;
    background-size: contain;
    z-index: -1;
    ${down("md")} {
      width: 154px;
      height: 180px;
    }
  }
  ${down("sm")} {
    padding-top: 50px;
    padding-bottom: 350px;
    padding-left: 0;
    padding-right: 0;
  }
`
const AppSlider = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  ${down("sm")} {
    top: 40%;
  }
`
const AppSlide = styled.div`
  padding: 12px;
  border-radius: 25px;
  max-width: 300px;
  background-color: white;
  box-shadow: 0 20px 73px rgba(83, 96, 129, 0.17);
`

const AppIntro = () => {
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
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1025,
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
        },
      },
    ],
  }

  return (
    <div className="position-relative">
      <Wrapper className="container">
        <Inner>
          <Heading
            title="One app, so many possibilities"
            subtitle="Fully customize your app according to your brand and needs"
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
          {appImgs.map((item, idx) => (
            <div className="d-flex justify-content-center" key={idx}>
              <AppSlide>
                <img className="w-100" src={item} alt="app img" />
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
    </div>
  )
}
export default AppIntro
