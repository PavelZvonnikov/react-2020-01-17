import React from 'react'
import Menu from '../menu'
import {Reviews} from '../reviews/reviews'
import {Rating} from '../rate'

export const Restaurant = ({restaurant}) => {
  return (
    <div className="restaurant-wrapper">
      <Menu restaurant={restaurant} />
      <Reviews restaurant={restaurant} />
      <Rating restaurant={restaurant} />
    </div>
  )
}
