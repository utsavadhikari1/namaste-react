import { useState } from "react";
import { restaurantList } from "./contants";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText, restaurant) {
  const filterData = restaurant.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );

  return filterData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <div className="search-container">
        <input
          types="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onclick={() => {
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
