import React from 'react'

const renderEventCard = (evt) => {
  const {title, description, cost, location_address, imagesource} = evt.node
  const event_link = evt.node.event_link.url
  const date = new Date(evt.node.datetime)
  const formattedDate = `${date.toDateString()} ${date.toLocaleTimeString('en-US')}`
  return (
    <li key={evt.node.id} className='event-card' onClick={() => window.open(event_link, '_blank')}>
      <p className='event-card--cost'>{cost}</p>
      <img className='event-card--image' src={imagesource.url} alt={imagesource.alt}/>
      <div className='event-card--details'>
        <div>
          <p className='event-card--details--date'>{formattedDate}</p>
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