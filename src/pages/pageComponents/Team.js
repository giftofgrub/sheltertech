import React from 'react'
import TeamMemberList from '../../components/TeamMemberList'
import { StaticQuery, graphql, Link } from 'gatsby'
import '../../stylesheets/pages/Team.scss'

const Team = (props) => {
  const allTeams = props.data.prismic.allTeams.edges
  const members = {
    ShelterTechLeadership: 
      allTeams.filter( 
        ({node}) => (node.name === "ShelterTech Leadership" ))[0],
    AskDarcelTeam: 
      allTeams.filter( 
        ({node}) => (node.name === "AskDarcel Team" ))[0],
    ShelterConnectTeam: 
      allTeams.filter( 
        ({node}) => (node.name === "ShelterConnect Team" ))[0],
    CommunityRepresentatives: 
      allTeams.filter( 
        ({node}) => (node.name === "Community Representatives" ))[0],
    ShelterTechVolunteers: 
      allTeams.filter( 
        ({node}) => (node.name === "ShelterTech Volunteers" ))[0],
    BoardOfDirectors: 
      allTeams.filter( 
        ({node}) => (node.name === "Board of Directors" ))[0],
  }
  const teamList = Object.values(members).map( val => {
    if (!val) { return }
    return (
      <TeamMemberList name={val.node.name} members={val.node.members}/>
    )
  })
  return (
    <div className='team'>
      <div className='content'>
        <div className='content-bg' />
        <div className='content--header'>
          <h2>Team</h2>
          <h3>Our award winning, all-volunteer team is redefining what it means to give back. Want to join? <Link to='/get-involved'>Learn more here.</Link></h3>
        </div>
        {teamList}
      </div>
    </div>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query TeamQuery{
        prismic {
          allTeams {
            edges {
              node {
                name
                members {
                  role
                  team_member {
                    ... on PRISMIC_Team_member {
                      first_name
                      last_name
                      email
                      image
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={ data => <Team data={ data } { ...props }/> }
  />
)
