import React from 'react'
import Events from './pageComponents/Events'
import Layout from '../components/layouts'

// export const query = graphql`
// {
//   prismic{
//     allEvents {
//       edges {
//         node {
//           title
//           description
//           datetime
//           cost
//           location_address
//           location_coordinates
//           imagesource
//           event_link {
//             _linkType
//             ... on PRISMIC__ExternalLink {
//               _linkType
//               url
//             }
//           }
//           _linkType
//         }
//       } 
//     }
//   }
// }
// `

export default (props) => {
  // const events = props.data.prismic.allEvents.edges

  return(
    <Layout>
      <Events />
    </Layout>
  )
}