import * as React from "react"
import { ThemeProvider } from "styled-components"
import { createTheme } from "styled-breakpoints"

import Header from "./header"
import Footer from "./footer"
// import { theme } from "../styled"

const theme = createTheme({
  sm: "576px",
  md: "769px",
  lg: "993px",
  xl: "1201px",
  xxl: "1441px",
})

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
