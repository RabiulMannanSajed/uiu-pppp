import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RestaurantItem from "../RestaurantItem/RestaurantItem";

const RestaurantItems = () => {
    const [dataOfRestaurantsInfo, setDataOfRestaurantsInfo] = useState([]);

    const restInfo = useLoaderData();
    const { id } = useParams();

    useEffect(() => {
        const restid = restInfo.find(data => data._id == id);
        setDataOfRestaurantsInfo(restid);
    }, [])
    console.log(dataOfRestaurantsInfo);

    return (
        <div>
            <RestaurantItem dataOfRestaurantsInfo={dataOfRestaurantsInfo}></RestaurantItem>
        </div>
    );
};

export default RestaurantItems;