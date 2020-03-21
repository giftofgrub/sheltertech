import React from 'react'
import EventsList from '../../components/EventsList'
import '../../stylesheets/pages/Events.scss'

const Events = (props) => {
  // const eventSample = new Date(props.events[0].node.event_datetime)
  const upcomingEvents = props.events.filter( evt => (new Date(evt.node.datetime)) > Date.now())
  const pastEvents = props.events.filter( evt => (new Date(evt.node.datetime)) < Date.now())
  
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

export default Events