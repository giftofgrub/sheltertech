import React from 'react'

const PositionsList = ({ events }) => (
  <div className='positions'>
    <h3>Open Roles</h3>

    <ul className='positions-list'>

      <li className='positions-list--legend'>
        <p>Positions</p>
        <p>Description</p>
      </li>
      <li className='positions-list--item'>
        <a className='positions-list--item--title' href='https://docs.google.com/document/d/10PhfYLb28PqIc2Ef6gwhlStujzP8BPBmvnjcf3W2-3U/edit?usp=sharing' >Chief Financial Officer</a>
        <a href='https://docs.google.com/document/d/10PhfYLb28PqIc2Ef6gwhlStujzP8BPBmvnjcf3W2-3U/edit?usp=sharing' className='positions-list--item--desc'>Lead ShelterTech's financial strategy and manage our financial operations</a>
      </li>
      <li className='positions-list--item'>
        <a className='positions-list--item--title' href='mailto:jasmine@sheltertech.org?subject=Growth Volunteer' >Growth</a>
        <a href='mailto:jasmine@sheltertech.org?subject=Business Development Volunteer' className='positions-list--item--desc'>Help us get our products adopted by service providers and people experiencing homlessness</a>
      </li>
      <li className='positions-list--item'>
        <a className='positions-list--item--title' href='mailto:jasmine@sheltertech.org?subject=Development Volunteer' >Development</a>
        <a href='mailto:jasmine@sheltertech.org?subject=Development Volunteer' className='positions-list--item--desc'>Full stack, Front End, and Dev Ops opportunities</a>
      </li>
      <li className='positions-list--item'>
        <a className='positions-list--item--title' href='https://sheltertech.quip.com/cUa8Ay9ui5Ds' >Product</a>
        <a href='https://sheltertech.quip.com/cUa8Ay9ui5Ds' className='positions-list--item--desc'>Create products for some of the most vulnerable communities</a>
      </li>
      <li className='positions-list--item'>
        <a className='positions-list--item--title' href='mailto:jasmine@sheltertech.org?subject=Analytics Manager Volunteer' >Analytics Analyst</a>
        <a href='mailto:jasmine@sheltertech.org?subject=Analytics Manager Volunteer' className='positions-list--item--desc'>Help define and report on organizational metrics as well as assist with city-wide research</a>
      </li>
      <li className='positions-list--item'>
        <a className='positions-list--item--title' href='mailto:jasmine@sheltertech.org?subject=Legal Volunteer' >Legal</a>
        <a href='mailto:jasmine@sheltertech.org?subject=Legal Volunteer' className='positions-list--item--desc'>Help us confidently manage our legal requirements</a>
      </li>
      <li className='positions-list--item'>
        <a className='positions-list--item--title' href='https://sheltertech.quip.com/tXtfAnNkubu1' >Events</a>
        <a href='https://sheltertech.quip.com/tXtfAnNkubu1' className='positions-list--item--desc'>Run a variety of events aimed at bringing together the tech and homeless communities</a>
      </li>
      <li className='positions-list--item'>
        <a className='positions-list--item--title' href='mailto:jasmine@sheltertech.org?subject=People Ops Volunteer' >People Ops</a>
        <a href='mailto:jasmine@sheltertech.org?subject=People Ops Volunteer' className='positions-list--item--desc'>Recruit more people to the cause and help manage our growing team</a>
      </li>
    </ul>

    <p className='volunteer--contact'>Don't see your skillset here? Don't worry, there are plenty of other areas where we need help. Just message <a href='mailto:jasmine@sheltertech.org'>Jasmine</a> and ask about volunteering.</p>
  </div>
)

export default PositionsList