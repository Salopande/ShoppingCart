import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, isClick, setIsClick }) => {
  
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={setIsClick}>
          <span className="font-bold text-lg">
            <h1>
              {data.title} ({data.title.length})
            </h1>
          </span>
          <span>⬇️</span>
        </div>
        {isClick && <ItemList items={data.itemCards}/>}
      </div>
    </div>
  );
};

export default RestaurantCategory;
