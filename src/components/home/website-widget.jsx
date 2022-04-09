import React, { useState, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import styled from "styled-components"
import { down, up } from "styled-breakpoints"

import { SlickArrows } from "../styled/lib"
import { WidgetBack, LeftArrow, RightArrow } from "../../utils/imgImport"
// import { widgets } from "../../utils/staticData"

const Section = styled.section`
  /* margin-top: 400px; */
  ${down("sm")} {
    /* margin-top: 350px; */
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
    font-size: 20px;
    font-weight: 500;
    line-height: 20.57px;
    letter-spacing: -1.02px;
    white-space: pre-line;
    ${up("sm")} {
      font-size: 23px;
      line-height: 28px;
      letter-spacing: -0.74px;
    }
    ${up("md")} {
      font-size: 19px;
      line-height: 19.76px;
      letter-spacing: -0.89px;
    }
    ${up("lg")} {
      font-size: 22px;
      line-height: 25px;
      letter-spacing: -0.84px;
    }
    ${up("xl")} {
      font-size: 23px;
      line-height: 27px;
      letter-spacing: -0.77px;
    }
    ${up("xxl")} {
      font-size: 26px;
      line-height: 31px;
      letter-spacing: -0.78px;
    }
  }
  .widget-img {
    position: relative;
    width: 53px;
    height: 53px;
    box-shadow: 0 11px 32px rgba(50, 69, 101, 0.11);
    background-color: ${props => (props.active ? "#5c7eff" : "#ffffff")};
    border-radius: 50%;
    flex-shrink: 0;
    img {
      position: absolute;
      width: 27px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    ${up("sm")} {
      width: 85px;
      height: 85px;
      box-shadow: 0 18px 54px rgba(50, 69, 101, 0.11);
      img {
        width: 43px;
      }
    }
    ${up("md")} {
      width: 58px;
      height: 58px;
      box-shadow: 0 9px 28px rgba(50, 69, 101, 0.11);
      img {
        width: 30px;
      }
    }
    ${up("lg")} {
      width: 72px;
      height: 72px;
      box-shadow: 0 11px 34px rgba(50, 69, 101, 0.11);
      img {
        width: 36px;
      }
    }
    ${up("xl")} {
      width: 82px;
      height: 82px;
      box-shadow: 0 13px 39px rgba(50, 69, 101, 0.11);
      img {
        width: 43px;
      }
    }
    ${up("xxl")} {
      width: 90px;
      height: 90px;
      box-shadow: 0 18px 54px rgba(50, 69, 101, 0.11);
      img {
        width: 46px;
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

const ItemBox = ({ active, data, reverse }) => (
  <WidgetItem
    className={`mt-3 ${reverse ? "flex-row-reverse" : ""}`}
    active={active}
  >
    <div className="widget-img">
      <img src={data.icon.url} alt="icon" />
    </div>
    <p className={`widget-name ${reverse ? "text-end me-2" : "ms-2"}`}>
      {data.label}
    </p>
  </WidgetItem>
)

const WebsiteWidget = () => {
  const { allPrismicWebsiteWidgets } = useStaticQuery(graphql`
    query {
      allPrismicWebsiteWidgets {
        nodes {
          data {
            title
            widgets {
              label
              icon {
                url
              }
              screenshot {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)
  const widgetData = allPrismicWebsiteWidgets.nodes[0].data

  const widgets1 = []
  const widgets2 = []
  const widgets = widgetData.widgets
  const widgetLength = widgets.length
  for (let i = 0; i < widgetLength / 2; i++) widgets2.push(widgets[i])
  for (let i = widgetLength / 2; i < widgetLength; i++)
    widgets1.push(widgets[i])

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
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    afterChange: nextClick,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Section>
      <div className="container">
        <Title>
          {widgetData.title}
          <span className="txt-green">.</span>
        </Title>
        <div className="row align-items-center mt-3 d-none d-lg-flex">
          <div className="col-4 d-flex justify-content-end">
            <ul>
              {widgets1?.map((item, idx) => (
                <div
                  onClick={() => setSelect(idx + widgetLength / 2)}
                  onKeyDown={() => setSelect(idx + widgetLength / 2)}
                  role="presentation"
                  key={idx}
                >
                  <ItemBox
                    data={item}
                    active={idx + widgetLength / 2 === selected}
                    reverse
                  />
                </div>
              ))}
            </ul>
          </div>
          <WidgetImg className="col-4">
            <GatsbyImage
              image={getImage(widgets[selected].screenshot)}
              alt="widget img"
            />
          </WidgetImg>
          <div className="col-4 ">
            <ul>
              {widgets2?.map((item, idx) => (
                <div
                  onClick={() => setSelect(idx)}
                  onKeyDown={() => setSelect(idx)}
                  role="presentation"
                  key={idx}
                >
                  <ItemBox data={item} active={idx === selected} />
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="d-lg-none mt-5">
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
                <GatsbyImage
                  image={getImage(widgets[selected].screenshot)}
                  alt="widget img"
                />
              </WidgetSlide>
              <ItemBox data={item} active={idx === selected} />
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
