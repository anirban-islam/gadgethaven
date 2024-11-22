import { useState } from "react";
import {
  AiOutlineLogin,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  let links = [
    { name: "Home", link: "/" },
    { name: "Statistics", link: "/statistics" },
    { name: "Dashboard", link: "/dashbord" },
    { name: "Return", link: "/return" },
  ];
  return (
    <div
      className={`flex bg-base-200 justify-between md:px-10 md:py-1 py-2 px-2`}
    >
      {/* Logo/Brand Name */}

      <div>
        <Link to="/">
          <div className="md:flex md:items-center md:text-2xl p-1.5 hidden font-bold">
            <span>
              <AiOutlineLogin />
            </span>
            <h1 className="btn btn-ghost text-2xl">Gadget Haven</h1>
          </div>
        </Link>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="text-2xl md:hidden "
        >
          <span>{open ? <AiOutlineClose /> : <AiOutlineMenu />}</span>
        </div>
      </div>

      {/* navlink */}

      <ul
        className={`md:flex md:mt-0  md:flex-row md:h-fit md:max-w-fit  gap-5 z-10 font-semibold flex flex-col  items-center w-full h-screen justify-center duration-500
        ${open ? "" : "mt-[-5000px]"}`}
      >
        {links.map((link, idx) => (
          <li
            key={idx}
            className={`hover:bg-indigo-400  px-3 py-1 mt-2 rounded  duration-500 hover:text-white`}
          >
            <NavLink to={link.link}>{link.name}</NavLink>
          </li>
        ))}
      </ul>

      {/* Icon */}
      <div className="md:static absolute right-0 top-0 text-2xl flex gap-4 md:my-3 mx-2 mt-1">
        <Link to="/dashbord/cart">
          <span className="btn btn-sm text-2xl">
            <AiOutlineShoppingCart />
          </span>
        </Link>
        <Link to="/dashbord/wishlist">
          <span className="btn btn-sm text-2xl">
            <AiOutlineHeart />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
