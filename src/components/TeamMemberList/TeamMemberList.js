import React from 'react'

const TeamMemberList = ({ name, members }) => {
  
  const memberList = members.map( member => {
    const {first_name, last_name, email, image} = member.team_member
    const imageSrc = image.url
    return (
      <li className={`team-list--item`}>
        <div className='team-list--item--details'>
          <p className='team-list--item--name'>
            <a href={`mailto:${email}`}>
              {`${first_name} ${last_name}`}
            </a>
          </p>
          <p className='team-list--item--title'>
            {member.role}
          </p>
        </div>
      </li>
    )
  })
  
  return (
    <ul className='team-list'>
      <h4 className='team-list-header'>{name}</h4>
      {memberList}
    </ul>
  )
}

export default TeamMemberList