import React from 'react'

const renderPositionListItem = (position) => {
  return (
    <li className='positions-list--item'>
      <a href="/">
        <p>Position</p>
        <p>Description</p>
      </a> 
    </li>
  )
}


const PositionsList = ({ positions }) => (
  <div className='positions'>
    <h3>Open Roles</h3>

    <ul className='positions-list'>

      <li className='positions-list--legend'>
        <p>Positions</p>
        <p>Description</p>
      </li>
      { positions ?
        positions.map( position => renderPositionListItem(position)) :
        ""
      }
      <li className='positions-list--item'>
        <a className='positions-list--item--title' href='mailto:jasmine@sheltertech.org?subject=People Ops Volunteer' >People Ops</a>
        <a href='mailto:jasmine@sheltertech.org?subject=People Ops Volunteer' className='positions-list--item--desc'>Recruit more people to the cause and help manage our growing team</a>
      </li>
    </ul>

    <p className='volunteer--contact'>Don't see your skillset here? Don't worry, there are plenty of other areas where we need help. Just message <a href='mailto:jasmine@sheltertech.org'>Jasmine</a> and ask about volunteering.</p>
  </div>
)

export default PositionsList