import React from 'react'
import EventsList from '../../components/EventsList'
import { StaticQuery, graphql } from 'gatsby'
import '../../stylesheets/pages/Events.scss'

const Events = (props) => {
  const upcomingEvents = props.data.prismic.allEvents.edges.filter( ({ node }) => (new Date(node.datetime)) > Date.now())
  const pastEvents = props.data.prismic.allEvents.edges.filter( ({ node }) => (new Date(node.datetime)) < Date.now())
  
  return (
    <div className='events'>
      <div className='content'>
        <div className='content-bg' />
        <div className='content--header'>
          <h2>Events</h2>
          <h3>Whether you're looking to volunteer, learn about homelessness, or just meet people from different walks of life—our events are all about bringing people together.</h3>
        </div>
        <EventsList events={upcomingEvents}/>
        <h3 className='events--past'>Past Events</h3>
        <EventsList events={pastEvents}/>
      </div>
    </div>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query EventQuery{
        prismic{
          allEvents {
            edges {
              node {
                title
                description
                datetime
                cost
                location_address
                location_coordinates
                imagesource
                event_link {
                  _linkType
                  ... on PRISMIC__ExternalLink {
                    _linkType
                    url
                  }
                }
                _linkType
              }
            } 
          }
        }
      }
    `}
    render={ data => <Events data={ data } { ...props }/> }
  />
)
