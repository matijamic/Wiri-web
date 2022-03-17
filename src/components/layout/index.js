import * as React from "react"
import { ThemeProvider } from "styled-components"

import Header from "./header"
import Footer from "./footer"
import { theme } from "../styled"

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
