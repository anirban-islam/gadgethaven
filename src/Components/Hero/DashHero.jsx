import { Link } from "react-router-dom";

const DashHero = () => {
  return (
    <div>
      <div className="hero min-h-full bg-violet-500   md:py-2 rounded-lg">
        <div className="hero-content text-center ">
          <div className=" w-10/12">
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <p className="py-6 text-sm w-11/12 text-white">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <div className="flex gap-5 items-cente justify-center">
              <Link to="/dashbord/cart">
                <button className="btn btn-sm px-8 rounded-xl text-violet-500">
                  Cart
                </button>
              </Link>
              <Link to="/dashbord/wishlist">
                <button className="btn btn-sm px-8 rounded-xl text-white bg-violet-500">
                  Wishlist
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashHero;
