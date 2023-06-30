import React, { useEffect } from 'react'
import restList from './utils/restapi';
import Restaurant from './Restaurant'
import { useState } from 'react';

export default function Body() {
    const [listOfRestaurants, setListOfRestaurants] = useState(restList);

    useEffect(()=>{
        fetchData()},
    []);
    
    const fetchData = async() => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6713752&lng=77.2692261&page_type=DESKTOP_WEB_LISTING"
            );
            
        const json = await data.json();
        // console.log(json)

// This is done to render our api information onto page with the help of optional chaining.
        setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        }

  return (
    <div className='bodyComp'>
    <div className="fields">

        <button className="btnComp" onClick={()=>{
            const filtered = listOfRestaurants.filter(     
                (rest)=> rest.data.avgRating > 4);

                setListOfRestaurants(filtered);
            }}
        >Filter Top Restaurants </button>
        <div className="filter">
        <input type="search" id="searchComp" placeholder='Search For restaurant' />
        <button className='inputSeach' onClick={()=>{
            console.log("clicked");
        }
        }>Search</button>
        </div>
    </div>
    <div className="restaurant">{
            listOfRestaurants.map((res)=>(
                    <Restaurant key={res.data.id} resData={res}/>
            ))
        }
    </div>
    </div>
  );
}
