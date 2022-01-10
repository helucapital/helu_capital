import React from 'react'

import ReviewCard from './ReviewCard'
import ProjectCard from './ProjectCard'
const Card = (data) => {
  const { _type } = data

  if (_type === 'property') {
    return <ProjectCard {...data} />
  } else if (_type === 'review') {
    return <ReviewCard {...data} />
  } else {
    return <div>Error loading Data..</div>
  }
}



export default Card

