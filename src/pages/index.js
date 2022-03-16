import * as React from "react"

import Seo from "../components/seo"
import Layout from "../components/layout"
import HomeHero from "../components/home/home-hero"

const HomePage = () => (
  <Layout>
    <Seo title="Home" />
    <HomeHero/>
  </Layout>
)

export default HomePage
