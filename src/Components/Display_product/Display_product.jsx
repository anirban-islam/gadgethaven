import { Link } from "react-router-dom";

const DisplayProduct = ({ item }) => {
  return (
    <div className="flex mt-5">
      <div className="card mb-1 md:mb-0 bg-white md:w-80 shadow-xl">
        <figure className="md:px-4 md:pt-4">
          <img src={item.product_image} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl">{item.product_title}</h2>
          <p>Price: ${item.price}</p>

          <Link to={`product/${item.product_id}`}>
            <div className="card-actions">
              <button className="btn  hover:bg-violet-500 bg-white rounded-xl px-5 hover:text-white text-violet-500 ">
                View More
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DisplayProduct;
