import React from 'react';


export default function Restaurant(props) {
    const {resData} = props;
    const {name,
    cuisines,
    cloudinaryImageId,
    costForTwoString,
    avgRating} = resData?.data
  
    return (
    <div className='restaurantComp'>
        <img 
        src={
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + 
        cloudinaryImageId} 
        alt="food items" />
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{costForTwoString}</h4>
        <h4>{avgRating} Stars</h4>

    </div>
  );
}
