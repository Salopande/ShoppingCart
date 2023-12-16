import { CDN_URL } from "../utils/constants";
import "../output.css";
const RestaurantCard = (props) => {
  const { resData } = props;
 
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData;
 
  return (
    <div className="m-4 p-4 w-52 " style={{ backgroundColor: "#f0f0f0" }} data-testid='resCard'>
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export const PromtRestaurantCard =(RestaurantCard)=>{
  return(props)=>{
     return(
      <>
        <h1>Prompted</h1>
        <RestaurantCard {...props}/>
      </>
     )
  }
   
}

export default RestaurantCard;