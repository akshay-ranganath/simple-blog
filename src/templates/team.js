import React from 'react'
import { graphql } from 'gatsby'

const Team = ({ data }) => {
  return (
    <div>
      <h1>{data.team.teamInfo.name}</h1>
      <p>{data.team.teamInfo.sport}</p>
      <div>
        {data.team.coaches.map(coach => <p>{coach}</p>)}
      </div>
      <div>
        {data.team.photos.map(photo => <img src={photo.secure_url} alt='Summer vacation' />)}
      </div>
      <p>TeamID: {data.team.teamInfo.teamid}</p>
    </div>
  )
}

export default Team
export const pageQuery = graphql`
  query($slug: String!){
    team: contentfulTeam(slug: {eq: $slug}){
      slug
      teeball
      coed
      coaches
      teamInfo {
        teamid
        name
        sport
      }
      photos {
        secure_url
      }
    }
  }
`
