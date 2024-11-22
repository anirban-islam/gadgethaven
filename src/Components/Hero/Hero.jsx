import banner from "../../assets/banner.jpg";
const Hero = () => {
  return (
    <div>
      <div className="hero min-h-full bg-violet-500 pt-10  md:pb-52 rounded-lg">
        <div className="hero-content text-center ">
          <div className=" w-10/12">
            <h1 className="text-3xl font-bold text-white">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="py-6 text-sm w-11/12 text-white">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="btn bg-white text-violet-500 rounded-2xl hover:bg-violet-500 hover:text-white btn-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-2/5 rounded-lg mx-auto bg-neutral-200 md:mt-[-220px]">
        <img className="rounded-lg p-3" src={banner} />
      </div>
      <div className="items-center text-center md:my-10 my-3">
        <h1 className="md:text-3xl font-bold">Explore Cutting-Edge Gadgets</h1>
      </div>
    </div>
  );
};

export default Hero;
