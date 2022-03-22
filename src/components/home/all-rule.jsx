import React, { useRef } from "react"
import Slider from "react-slick"
import styled from "styled-components"
import { down } from "styled-breakpoints"

import Heading from "../common/heading"

import { Wrapper } from "../styled/lib"
import { LeftArrow, RightArrow } from "../../utils/imgImport"
import { rules } from "../../utils/staticData"

const SlickArrows = styled.div`
  position: relative !important;
  display: flex !important;
  bottom: 0 !important;
  justify-content: space-around;
  margin-top: 35px;
  text-align: center;
  button {
    border: none;
    background-color: unset;
    padding: 0 20px;
    svg {
      &:hover {
        g {
          path {
            fill: #4478db;
            transition: all ease-in-out 0.2s;
          }
        }
      }
      ${down("sm")} {
        width: 11px;
        height: 17px;
      }
    }
  }
`
const RuleSlide = styled.div`
  background-color: white;
  box-shadow: 0 20px 73px rgba(83, 96, 129, 0.17);
`
const RuleItem = styled.div`
  display: flex;
  align-items: center;
  p {
    color: "#5f5f5f";
    font-size: 25px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: -0.75px;
  }
  ${down("sm")} {
    p {
      font-size: 15px;
      font-weight: 500;
      text-align: left;
      letter-spacing: -0.77px;
    }
    img {
      width: 24px;
      height: 24px;
    }
  }
`
const RuleList = styled.ul`
  display: flex;
  align-items: center;
  li {
    width: auto !important;
    height: auto !important;
    margin: 0 1.5vw !important;
    flex-shrink: 0;
    &.slick-active {
      position: relative;
      padding: 20px 40px;
      background-color: #4478db;
      box-shadow: 0 10px 24px rgba(68, 120, 219, 0.27);
      border-radius: 10px;
      &::before {
        content: "";
        position: absolute;
        top: -11px;
        left: 50%;
        border-left: 16px solid transparent;
        border-right: 16px solid transparent;
        border-bottom: 11px solid #4478db;
        transform: translateX(-50%);
      }
      p {
        color: white;
      }
      ${down("sm")} {
        padding: 12px 20px;
        box-shadow: 0 6px 14px rgba(68, 120, 219, 0.27);
        border-radius: 5px;
        &::before {
          top: -8px;
          border-left: 9.5px solid transparent;
          border-right: 9.5px solid transparent;
          border-bottom: 8px solid #4478db;
        }
        p {
        }
      }
    }
  }
`

const AllRule = () => {
  const slider = useRef()
  const next = () => {
    slider.current.slickNext()
  }
  const previous = () => {
    slider.current.slickPrev()
  }

  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    appendDots: dots => (
      <SlickArrows>
        <button onClick={previous}>
          <LeftArrow />
        </button>
        <RuleList>{dots}</RuleList>
        <button onClick={next}>
          <RightArrow />
        </button>
      </SlickArrows>
    ),
    customPaging: i => (
      <RuleItem>
        <img className="me-1" src={rules[i].icon} alt="rule icon" />
        <p>{rules[i].name}</p>
      </RuleItem>
    ),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  }

  return (
    <Wrapper className="container">
      <Heading
        title="Rule it all"
        subtitle="Wiri’s automated functionality makes it easy to engage with clients that land on your website while driving them to place
table reservations and answering their questions."
        align="center"
      />
      <Slider
        className="app-slider"
        ref={c => (slider.current = c)}
        {...settings}
      >
        {rules.map((item, idx) => (
          <div className="d-flex justify-content-center" key={idx}>
            <RuleSlide>
              <img className="w-100" src={item.img} alt="app img" />
            </RuleSlide>
          </div>
        ))}
      </Slider>
    </Wrapper>
  )
}
export default AllRule
