import React from "react"
import { HeroImg } from "../../utils/imgImport"

const HomeHero = () => (
  <section className="container">
    <div className="home-hero">
      <div className="row align-items-center">
        <div className="col-lg-6 left-side">
          <h1 className="title">
            Meet your new business app<span className="txt-green">.</span>
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
        </div>
      </div>
    </div>
  </section>
)

export default HomeHero
