import React from 'react'

export const Comment = ({review}) => (
  <div className="comment-wrapper">
    <p>
      {review.text}. {review.user}
    </p>
  </div>
)
