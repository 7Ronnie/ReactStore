import React from 'react'
// import restList from './utils/restapi';
import Restaurant from './Restaurant'
import Shimmer from './Shimmer'
import { useState , useEffect } from 'react';


export default function Body() {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const[searchTxt, setSearchTxt]= useState("");
    const[filteredRest, setFilteredRest] = useState([]);
    

    useEffect(()=>{
        fetchData()},
    []);
    
    const fetchData = async() => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6713752&lng=77.2692261&page_type=DESKTOP_WEB_LISTING"
            );
        const json = await data.json();
    
    // This is done to render our api information onto page with the help of optional chaining.
        setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRest(json?.data?.cards[2]?.data?.data?.cards);
        }

  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className='bodyComp'>
    <div className="fields">
        <button className="btnComp" onClick={()=>{
            const filtered = listOfRestaurants.filter(     
                (rest)=> rest.data.avgRating > 4);

                // setFilteredRest(filtered);
                setListOfRestaurants(filtered);
            }}
        >Filter Top Restaurants </button>
        
        <div className="filter">
        <input type="text" id="searchComp" placeholder='Search Restaurant' value={searchTxt} onChange={(e)=>{
                setSearchTxt(e.target.value);
        }} />
        <button className='inputSeach' onClick={()=>{
            
            console.log(searchTxt);
           const searchItem = listOfRestaurants.filter((res) => (
                res.data.name.toLowerCase().includes(searchTxt.toLowerCase())
                ));
                setFilteredRest(searchItem)
        }
        }>Search</button>
        </div>
    </div>
    <div className="restaurant">{
            filteredRest.map((res)=>(
                <Restaurant key={res.data.id} resData={res}/>
                
                
            ))
        }
    </div>
    </div>
  );
}
