import { useState } from "react";
import product from "../../Product_Data/Product.json";
import DisplayProduct from "../Display_product/Display_product";
const Catagori = () => {
  const [items, setItems] = useState(product);
  const fillterItem = (catItem) => {
    const updateItem = product.filter((curItem) => {
      return curItem.category === catItem;
    });
    setItems(updateItem);
  };

  return (
    <div className="md:flex gap-5 ">
      <ul className="menu gap-4 h-fit mt-4 bg-white rounded-lg mx-auto py-5 md:w-40">
        <button
          className="bg-base-300 rounded-lg btn"
          onClick={() => setItems(product)}
        >
          All Product
        </button>
        <button
          className="bg-base-300 rounded-lg btn"
          onClick={() => fillterItem("Laptops")}
        >
          Laptop
        </button>
        <button
          className="bg-base-300 rounded-lg btn"
          onClick={() => fillterItem("Phones")}
        >
          Phones
        </button>
        <button
          className="bg-base-300 rounded-lg btn"
          onClick={() => fillterItem("Accessories")}
        >
          Accessories
        </button>
        <button
          className="bg-base-300 rounded-lg btn"
          onClick={() => fillterItem("Smartwatches")}
        >
          Smartwatches
        </button>
        <button
          className="bg-base-300 rounded-lg btn"
          onClick={() => fillterItem("MacBooks")}
        >
          MacBooks
        </button>
        <button
          className="bg-base-300 rounded-lg btn"
          onClick={() => fillterItem("Phone")}
        >
          I Phone
        </button>
      </ul>
      <div className=" md:py-4 md:px-8 w-full justify-between mb-10 items-center rounded-lg md:grid md:grid-cols-3 md:gap-5">
        {items.map((item) => (
          <DisplayProduct item={item} key={item.product_id}></DisplayProduct>
        ))}
      </div>
    </div>
  );
};

export default Catagori;
