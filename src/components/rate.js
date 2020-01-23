import React, {useState, useEffect} from 'react'
import {Rate} from 'antd'

export const Rating = ({restaurant}) => {
  const [rating, setRating] = useState(0)

  useEffect(() => {
    let sumOfRating = 0

    restaurant.reviews.forEach(obj => (sumOfRating = sumOfRating + obj.rating))

    const averageRating = sumOfRating / restaurant.reviews.length

    setRating(averageRating)
  }, [rating, restaurant.reviews])
  return (
    <div className="rate-wrapper">
      <span>Restaurant rating: </span>
      <Rate disabled value={rating} defaultValue={0} />
    </div>
  )
}
