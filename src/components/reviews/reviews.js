import React from 'react'
import {Comment} from './comment'

export const Reviews = ({restaurant: {reviews}}) => (
  <div className="reviews-wrapper">
    {reviews.map(review => (
      <Comment key={review.id} review={review} />
    ))}
  </div>
)
