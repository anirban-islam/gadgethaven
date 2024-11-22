import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { addTostoreProductList, addTostoreWishList } from "../Utility/Cartdb";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const { productid } = useParams();
  const data = useLoaderData();
  const product = data.find((pro) => pro.product_id === productid);

  const extradata = product.specification;

  const handleCart = (id) => {
    addTostoreProductList(id);
    toast.success("Added Successful", {
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
  };
  const handleWishlist = (id) => {
    addTostoreWishList(id);
    toast.success("Added Successful", {
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
  };

  return (
    <div>
      <div>
        <div className="hero min-h-full bg-violet-500 pt-10  md:pb-28 rounded-lg">
          <div className="hero-content text-center ">
            <div className=" w-10/12">
              <h1 className="text-3xl font-bold text-white">
                Product Detaills
              </h1>
              <p className="py-6 text-sm w-11/12 text-white">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-9/12 w-11/12 bg-white mx-auto mt-[-150px] rounded-lg">
        <div className="card lg:card-side bg-base-100 shadow-xl md:p-4">
          <figure className="md:w-1/2  rounded-lg">
            <img src={product.product_image} />
          </figure>
          <div className="card-body gap-2 mb-[108px]">
            <h2 className="card-title">{product.product_title}</h2>
            <p>Price: ${product.price}</p>
            {
              <div className=" ">
                {product.availability ? (
                  <button className="btn btn-sm rounded-xl border-green-500 bg-green-100 text-green-500">
                    In stock
                  </button>
                ) : (
                  <button className="btn btn-sm rounded-xl border-red-500 bg-red-100 text-red-500">
                    Out Of Stok
                  </button>
                )}
              </div>
            }
            <h1 className=" text-sm min-h-fit p-0 mb-0">
              {product.description}
            </h1>
            <h1 className="font-bold ">Specification</h1>
            {Object.values(extradata).map((key, idx) => (
              <li key={idx}>{key}</li>
            ))}
            <h2 className="flex items-center p-2 gap-1 text-xl text-yellow-400">
              Rating
              <AiOutlineStar className="items-center text-green-400 mt-1" />
            </h2>
            <div className="flex gap-5">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
              </div>
              <div>
                <h1 className="bg-base-200 px-3 rounded-lg">
                  {product.rating}
                </h1>
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <button
                onClick={() => handleCart(product.product_id)}
                className="flex items-center btn btn-sm bg-violet-500 text-white"
              >
                Add to cart
                <AiOutlineShoppingCart />
                <ToastContainer />
              </button>
              <button
                onClick={() => handleWishlist(product.product_id)}
                className="flex items-center btn btn-sm bg-base-200 text-black"
              >
                Wishlist
                <AiOutlineHeart />
                <ToastContainer />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
