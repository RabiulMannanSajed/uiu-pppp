import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RestaurantsItemsCart from "../RestaurantsItemsCart/RestaurantsItemsCart";

const RestaurantsItemsOfRest = () => {
  const [dataOfRest, setDataOfRest] = useState([]);

  const { id } = useParams(); // hover item id

  const restinfo = useLoaderData(); // data load form route by use loader

  //id match
  useEffect(() => {
    const restId = restinfo.find((data) => data._id == id);
    setDataOfRest(restId);
  }, []);

  return (
    <div>
      <RestaurantsItemsCart dataOfRest={dataOfRest}></RestaurantsItemsCart>
    </div>
  );
};

export default RestaurantsItemsOfRest;
