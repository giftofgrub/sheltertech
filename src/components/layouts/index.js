import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Header from './Header'
import Footer from './Footer'
import Intercom from 'react-intercom'
import '../../stylesheets/main.scss'

export default props => (
  <StaticQuery
    query={graphql`
      query SiteQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={ data => <Layout data={ data } { ...props }/> }
  />
)

const Layout = ( props ) => {
  // Define the meta title and description
  const title = props.data.site.siteMetadata.title
  const description = props.data.site.siteMetadata.description

  // Load the Prismic edit button
  if(typeof window !== 'undefined' && window.prismic) {
    window.prismic.setupEditButton()
  }

	return(
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"/>
        
        <title>{ title }</title>
        <meta name="description" content={ description } />
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet" type="text/css"></link>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      </Helmet>
      <Header />
      <main>
        { props.children }
      </main>
      <Intercom appID="w50oz3tb"/>
      <Footer/>
    </Fragment>
	)
}
