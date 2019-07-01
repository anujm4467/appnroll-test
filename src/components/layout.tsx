/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactChild } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"

import Header from "./header"
import theme from "../theme"

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const Layout = ({ children }: { children: ReactChild | ReactChild[] }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <ContentWrapper>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Made by
            {` `}
            <a href="https://www.appnroll.com/">App'n'roll</a>
          </footer>
        </ContentWrapper>
      </>
    </ThemeProvider>
  )
}

export default Layout