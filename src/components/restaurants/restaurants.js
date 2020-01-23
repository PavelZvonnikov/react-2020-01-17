import React, {useMemo, useState} from 'react'
import RestaurantsNavigation from './restaurants-navigation'
import {Restaurant} from './restaurant'

function Restaurants({restaurants}) {
  const [activeRestaurantId, setActiveRestaurant] = useState(restaurants[0].id)
  const activeRestaurant = useMemo(() => {
    return restaurants.find(restaurant => restaurant.id === activeRestaurantId)
  }, [activeRestaurantId, restaurants])
  return (
    <div>
      <RestaurantsNavigation
        restaurants={restaurants}
        onRestaurantChange={id => setActiveRestaurant(id)}
      />
      <Restaurant restaurant={activeRestaurant} />
    </div>
  )
}

export default Restaurants
