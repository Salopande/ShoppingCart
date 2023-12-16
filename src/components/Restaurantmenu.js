import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestarauntMenu from "../utils/useRestarauntMenu";
import "../output.css";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const Restaurantmenu = () => {
  const [isClick, setIsClick] = useState(null)
    const { resId } = useParams();
  
    const resInfo =  useRestarauntMenu(resId)
  
    if (resInfo === null) return <Shimmer />;
  
    const { name, cuisines, costForTwoMessage } =
      resInfo?.cards[0]?.card?.card?.info;
  
    const { itemCards } =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[8]?.card?.card;
  
    const category = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
      c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    
    return (
      <div className="text-center">
        <h1 className="font-bold my-10 text-2xl">{name}</h1>
        <p className="font-bold txt-lg">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
       {category.map((item,index)=>(
        <RestaurantCategory data={item?.card?.card} isClick={isClick===index ? true: false} setIsClick={()=>setIsClick(index)} />
       ))}
       
      </div>
    );
  };
  

export default Restaurantmenu;


