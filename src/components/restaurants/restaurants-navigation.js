import React from 'react'

function RestaurantsNavigation({restaurants, onRestaurantChange}) {
  return (
    <div>
      {restaurants.map(restaurant => (
        <button
          key={restaurant.id}
          onClick={() => {
            onRestaurantChange(restaurant.id)
          }}
        >
          {restaurant.name}
        </button>
      ))}
    </div>
  )
}

export default RestaurantsNavigation
