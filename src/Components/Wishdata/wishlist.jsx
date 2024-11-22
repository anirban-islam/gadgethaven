import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreWishList } from "../Utility/Cartdb";
import Displaywish from "./Displaywish";
import { removeTosWishList } from "../Utility/remove";
import { toast, Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wishlist = () => {
  const [products, setproducts] = useState([]);
  const allProduct = useLoaderData();
  useEffect(() => {
    const storeProductList = getStoreWishList();
    console.log(storeProductList);

    const cartList = allProduct.filter((product) =>
      storeProductList.includes(product.product_id)
    );
    setproducts(cartList);
  }, []);

  const handleRemove = (id) => {
    toast.warn("Remove Successful !", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
    removeTosWishList(id);
    const updateData = getStoreWishList();
    setproducts(updateData);
  };
  return (
    <div>
      {products.map((product, idx) => (
        <Displaywish
          handleRemove={handleRemove}
          key={idx}
          product={product}
        ></Displaywish>
      ))}
      <ToastContainer />
    </div>
  );
};

export default Wishlist;
