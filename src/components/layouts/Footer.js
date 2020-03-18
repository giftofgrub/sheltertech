import React from 'react'

export default () =>
  <footer className="site--footer">
    <nav className='site--footer--nav'>
      <ul>
        <li><a href='/'>Programs</a></li>
        <li><a href='/annual-report-2018'>Impact</a></li>
        <li><a href='/events'>Events</a></li>
        <li><a href='/get-involved'>Get Involved</a></li>
        <li><a href='/team'>Team</a></li>
        <li><a href='mailto:info@sheltertech.org'>Contact Us</a></li>
        <li><a className='donate-button' href='/donate'>Donate</a></li>
      </ul>
    </nav>
    <div className='site--footer--legal'>
      <ul>
        <li>ShelterTech is a 501 (c)(3)</li>
        <li>ein: 38-3984099</li>
        <li>made in san francisco</li>
        <li>© 2018 All Rights Reserved</li>
        <li><a href='https://www.facebook.com/ShelterTechOrg/'>facebook</a></li>
      </ul>
    </div>
  </footer>
