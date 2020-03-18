import React from 'react'

const Header = () => (
  <header className='site--header'>
    <div className='site--header--wrapper'>
      <h1 className='site--header--logo'><a href='/' >ShelterTech</a></h1>
      <nav className='site--header--nav'>
        {/* <SlideMenu /> */}
        <ul>
          <li><a href='/'>Programs</a></li>
          <li><a href='/annual-report-2018'>Impact</a></li>
          <li><a href='/events'>Events</a></li>
          <li><a href='/get-involved'>Get Involved</a></li>
          <li><a href='/team'>Team</a></li>
          <li><a href='mailto:info@sheltertech.org'>Contact Us</a></li>
          <li><a href='https://medium.com/shelter-tech' target='_blank' rel='noopener'>Blog</a></li>
          <li><a className='donate-button' href='/donate'>Donate</a></li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header