import { useEffect, useState } from "react";

const RestaurantItem = ({ dataOfRestaurantsInfo }) => {
    const { restaurantName, img, menuName } = dataOfRestaurantsInfo;

    const [loading, setLoading] = useState(false);

    const [data, setData] = useState([])

    useEffect(() => {
        if (menuName) {
            setData(menuName);
            setLoading(true);
        }
    }, [menuName])
    if (!dataOfRestaurantsInfo) {
        return <p>Loading ......</p>
    }
    return (
        <div >

                <h1 className="text-2xl items-center mt-8">{restaurantName}</h1>
            <div className="grid grid-cols-3 gap-5">
                {loading ? (
                    data.map(menuItem => (

                        // all from degiui card 

                        <div key={menuItem._id} className="card w-96 bg-base-100 shadow-xl">
                            <figure>
                                <img src={menuItem.image} alt={menuItem.name} />
                            </figure>
                            <p className="absolute right-0 mr-4 mt-4 px-4 bg-black text-white">
                                ${menuItem.price}
                            </p>
                            <div className="card-body flex flex-col items-center">
                                <h2 className="card-title">{menuItem.name}</h2>
                                <p>{menuItem.recipe}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-slate-300 text-black border-0 border-b-4 mt-4 border-orange-500">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default RestaurantItem;