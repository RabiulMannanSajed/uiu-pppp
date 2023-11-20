import { useEffect, useState } from "react";
import Restaurantinfo from "../Restaurantinfo/Restaurantinfo";

const Restaurents = () => {

    const [restaurants, setRestaurants] = useState([])
    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => setRestaurants(data))
    }, [])
    return (
        <div>
            <div className="grid grid-cols-3 gap-2">
                {
                    restaurants.map(restaurant => <Restaurantinfo
                        key={restaurant._id}
                        restaurant={restaurant}
                    ></Restaurantinfo>)
                }
            </div>

        </div>
    );
};

export default Restaurents;
