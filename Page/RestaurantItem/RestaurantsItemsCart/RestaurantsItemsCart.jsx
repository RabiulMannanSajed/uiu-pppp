import { useEffect, useState } from "react";

const RestaurantsItemsCart = ({ dataOfRest }) => {
  const { restaurantName, img, menuName } = dataOfRest; // menu.json
  const [itemIfo, setItemInfo] = useState([]); // setItemInfo (setfnc) value set in itemInfo
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (menuName) {
      setItemInfo(menuName); // this is menuName of  menu.json
      setLoading(true);
    }
  }, [menuName]);
  if (!itemIfo) {
    return <p>There is no item ..loading ...</p>;
  }
  //ternary opa
  // condition ? true : false
  return (
    <div>
      {loading ? (
        itemIfo.map((menuItem) => (
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
        <p> Loading ....</p>
      )}
    </div>
  );
};

export default RestaurantsItemsCart;
