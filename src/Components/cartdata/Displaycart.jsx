import { AiOutlineCloseCircle } from "react-icons/ai";

const Displaycart = ({ product, handleRemove }) => {
  return (
    <div className="md:px-20 rounded-xl">
      <div className="md:p-4 p-2  md:flex mt-5 gap-10 rounded-xl  bg-white">
        <div className="object-containr ">
          <img className="md:w-52 rounded-xl" src={product.product_image} />
        </div>
        <div className="w-11/12 flex flex-col gap-2">
          <h1 className="text-xl font-bold">{product.product_title}</h1>
          <p className="text-sm">{product.description}</p>
          <p className="font-bold ">price: ${product.price}</p>
        </div>
        <div className="flex justify-center py-5 text-3xl text-red-500 font-bold pr-10">
          <button onClick={() => handleRemove(product.product_id)}>
            <AiOutlineCloseCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Displaycart;
