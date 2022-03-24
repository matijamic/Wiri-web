import React from "react"
import {
  DealsImg,
  HeroImg,
  MenuImg,
  QrImg,
  QuestionImg,
  ReviewImg,
} from "../../utils/imgImport"

const HomeHero = () => (
  <section className="container">
    <div className="home-hero">
      <div className="row align-items-center">
        <div className="col-lg-6 left-side">
          <h1 className="title">
            Meet your new
            <br />
            <span className="blue-line">business app</span>
            <span className="txt-green">.</span>
          </h1>
          <p className="subtitle">
            Various, fully customizable, simple marketing tools that will help
            you convert your visitors into repeating clients.
          </p>
          <button className="btn-blue">Try for FREE</button>
          <p className="bottom-text">No credit card required</p>
        </div>
        <div className="col-lg-6 right-side">
          <img className="w-100" src={HeroImg} alt="hero img" />
          <img className="float review-img" src={ReviewImg} alt="review img" />
          <img className="float menu-img" src={MenuImg} alt="review img" />
          <img className="float deals-img" src={DealsImg} alt="review img" />
          <img
            className="float question-img"
            src={QuestionImg}
            alt="review img"
          />
          <img className="float qr-img" src={QrImg} alt="review img" />
        </div>
      </div>
    </div>
  </section>
)

export default HomeHero
