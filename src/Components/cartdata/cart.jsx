import { useEffect, useState } from "react";
import { AiOutlineSortAscending } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";
import { getStoreproductList } from "../Utility/Cartdb";
import Displaycart from "./Displaycart";
import { removeTostoreProductList } from "../Utility/remove";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Cart = () => {
  const [products, setproducts] = useState([]);
  const allProduct = useLoaderData();
  useEffect(() => {
    const storeProductList = getStoreproductList();

    const cartList = allProduct.filter((product) =>
      storeProductList.includes(product.product_id)
    );
    setproducts(cartList);
  }, []);
  const handlePayment = () => {
    toast.warn("Payment Successful !", {
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
    localStorage.removeItem("cart_list");
    setproducts([]);
  };
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
    removeTostoreProductList(id);
    const updateData = getStoreproductList();
    console.log(updateData);
    setproducts(updateData);
  };
  return (
    <div>
      <div className="flex items-center justify-between md:px-20 px-2  py-5">
        <h1 className="font-bold text-xl">Cart</h1>
        <div className="flex gap-4 items-center">
          <h1 className="font-bold text-xl"></h1>
          <button className="btn btn-sm outline rounded-xl text-violet-500 outline-violet-500">
            sort by price <AiOutlineSortAscending />
          </button>
          <button
            onClick={handlePayment}
            className="btn btn-sm rounded-xl text-white bg-violet-500 outline outline-violet-500"
          >
            Purchase
            <ToastContainer />
          </button>
        </div>
      </div>

      {products.map((product, idx) => (
        <Displaycart
          handleRemove={handleRemove}
          key={idx}
          product={product}
        ></Displaycart>
      ))}
    </div>
  );
};

export default Cart;
