import React from 'react'

const renderEventCard = (evt) => {
  const {title, description, datetime, cost, location_address} = evt.node
  return (
    <li key={evt.node.id} className='event-card' onClick={() => window.open(evt.node.link, '_blank')}>
      <p className='event-card--cost'>{cost}</p>
      <img className='event-card--image' src={evt.node.img} />
      <div className='event-card--details'>
        <div>
          <p className='event-card--details--date'>{datetime}</p>
          <h4>{title}</h4>
          <p className='event-card--details--description'>{description}</p>
        </div>
        <small>{location_address}</small>
      </div>
    </li>
  )
}

const EventsList = ({ events }) => (
  <ul className='events-list'>
    {events.map(evt => renderEventCard(evt))}
  </ul>
)

export default EventsList