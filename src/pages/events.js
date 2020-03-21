import React from 'react'
import Events from './pageComponents/Events'
import Layout from '../components/layouts'
import { graphql } from 'gatsby'

export const query = graphql`
{
  prismic{
    allEvents {
      edges {
        node {
          title
          description
          datetime
          cost
          
          location_coordinates
          
          imagesource
          _linkType
        }
      } 
    }
  }
}
`

export default (props) => {
  const events = props.data.prismic.allEvents.edges

  return(
    <Layout>
      <Events events={events}/>
    </Layout>
  )
}