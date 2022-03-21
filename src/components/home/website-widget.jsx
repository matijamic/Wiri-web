import React, { useState, useRef } from "react"
import Slider from "react-slick"
import styled from "styled-components"
import { down } from "styled-breakpoints"

import { SlickArrows } from "../styled/lib"
import { WidgetBack, LeftArrow, RightArrow } from "../../utils/imgImport"
import { widgets } from "../../utils/staticData"

const Section = styled.section`
  margin-top: 400px;
  ${down("sm")} {
    margin-top: 350px;
  }
`
const Title = styled.h2`
  text-align: center;
`
const WidgetItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 45px;
  cursor: pointer;
  .widget-name {
    color: ${props => (props.active ? "#5c7eff" : "#303030")};
    font-size: 26px;
    font-weight: 500;
    line-height: 31px;
    letter-spacing: -0.78px;
    white-space: pre-line;
    ${down("xxl")} {
      font-size: 20px;
      line-height: 20px;
      letter-spacing: -1.02px;
    }
  }
  .widget-img {
    position: relative;
    width: 90px;
    height: 90px;
    box-shadow: 0 18px 54px rgba(50, 69, 101, 0.11);
    background-color: ${props => (props.active ? "#5c7eff" : "#ffffff")};
    border-radius: 50%;
    flex-shrink: 0;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    ${down("xxl")} {
      width: 53px;
      height: 53px;
      img {
        width: 23px;
        height: 23px;
      }
    }
  }
  ${down("sm")} {
    margin-bottom: 0;
  }
`
const WidgetImg = styled.div`
  background-image: url(${WidgetBack});
  background-repeat: no-repeat;
  background-size: contain;
  text-align: center;
  img {
    ${down("xxl")} {
      width: 100%;
    }
  }
`
const WidgetSlide = styled.div`
  max-width: 230px;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.09);
`

const WebsiteWidget = () => {
  const widgets1 = []
  const widgets2 = []
  for (let i = 0; i < widgets.length; i++)
    i > 4 ? widgets1.push(widgets[i]) : widgets2.push(widgets[i])

  const [selected, setSelect] = useState(0)
  const slider = useRef()

  const next = () => {
    slider.current.slickNext()
  }
  const previous = () => {
    slider.current.slickPrev()
  }
  const nextClick = e => {
    setSelect(e)
  }
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    afterChange: nextClick,
  }
  return (
    <Section>
      <div className="container">
        <Title>
          Use as a <span className="blue-line">website widget</span>
          <span className="txt-green">.</span>
        </Title>
        <div className="row align-items-center mt-3 d-none d-md-flex">
          <div className="col-4 d-flex justify-content-end">
            <ul className="d-flex flex-column align-items-end">
              {widgets1?.map((item, idx) => (
                <WidgetItem
                  key={idx}
                  onClick={() => setSelect(idx + 5)}
                  active={idx === selected ? true : false}
                >
                  <p className="widget-name me-3 text-end">{item.name}</p>
                  <div className="widget-img">
                    <img src={item.icon} alt="widget img" />
                  </div>
                </WidgetItem>
              ))}
            </ul>
          </div>
          <WidgetImg className="col-4">
            <img src={widgets[selected].img} alt="widget img" />
          </WidgetImg>
          <div className="col-4 ">
            <ul className=" ">
              {widgets2?.map((item, idx) => (
                <WidgetItem
                  key={idx}
                  onClick={() => setSelect(idx)}
                  active={idx === selected ? true : false}
                >
                  <div className="widget-img">
                    <img src={item.icon} alt="widget img" />
                  </div>
                  <p className="widget-name ms-3">{item.name}</p>
                </WidgetItem>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="d-md-none mt-5">
        <Slider
          className="widget-slider"
          ref={c => (slider.current = c)}
          {...settings}
        >
          {widgets.map((item, idx) => (
            <div
              className="d-flex flex-column align-items-center justify-content-center"
              key={idx}
            >
              <WidgetSlide>
                <img className="w-100" src={item.img} alt="widget img" />
              </WidgetSlide>
              <WidgetItem
                className="mt-3"
                active={idx === selected ? true : false}
              >
                <div className="widget-img">
                  <img src={item.icon} alt="widget img" />
                </div>
                <p className="widget-name ms-2">{item.name}</p>
              </WidgetItem>
            </div>
          ))}
        </Slider>
        <SlickArrows>
          <button onClick={previous}>
            <LeftArrow />
          </button>
          <button onClick={next}>
            <RightArrow />
          </button>
        </SlickArrows>
      </div>
    </Section>
  )
}

export default WebsiteWidget
