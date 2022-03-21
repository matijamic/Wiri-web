import * as React from "react"

import Seo from "../components/seo"
import Layout from "../components/layout"
import HomeHero from "../components/home/home-hero"
import WowClients from "../components/home/wow-clients"
import AppIntro from "../components/home/app-intro"
import WebsiteWidget from "../components/home/website-widget"
import CallToAction from "../components/home/call-action"
import AllRule from "../components/home/all-rule"

const HomePage = () => (
  <Layout>
    <Seo title="Home" />
    <HomeHero />
    <WowClients />
    <AppIntro />
    <WebsiteWidget />
    <CallToAction />
    <AllRule />
  </Layout>
)

export default HomePage
