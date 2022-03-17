import * as React from "react"

import Seo from "../components/seo"
import Layout from "../components/layout"
import HomeHero from "../components/home/home-hero"
import WowClients from "../components/home/wow-clients"

const HomePage = () => (
  <Layout>
    <Seo title="Home" />
    <HomeHero />
    <WowClients />
  </Layout>
)

export default HomePage
