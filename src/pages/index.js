import * as React from "react"

import Seo from "../components/seo"
import Layout from "../components/layout"
import HomeHero from "../components/home/home-hero"
import WowClients from "../components/home/wow-clients"
import AppIntro from "../components/home/app-intro"
import WebsiteWidget from "../components/home/website-widget"

const HomePage = () => (
  <Layout>
    <Seo title="Home" />
    <HomeHero />
    <WowClients />
    <AppIntro />
    <WebsiteWidget />
    <div className="py-5"></div>
    <div className="py-5"></div>
    <div className="py-5"></div>
    <div className="py-5"></div>
  </Layout>
)

export default HomePage
