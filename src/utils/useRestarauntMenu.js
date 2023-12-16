import React, { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestarauntMenu = (resId) => {
  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const jsonData = await data.json();
    setRestInfo(jsonData.data)
  };

  return restInfo;
};

export default useRestarauntMenu;
