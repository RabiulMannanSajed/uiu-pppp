import { Link } from "react-router-dom";

// this is showing single rest of our card
const Restaurantinfo = ({ restaurant }) => {
    const { restaurantName, img, _id } = restaurant; // destracting 
    return (
        <Link to={`/restaurantItem/${_id}`}>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{restaurantName}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                </div>
            </div>
        </Link>
    );
};

export default Restaurantinfo;