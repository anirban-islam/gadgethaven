import { AiOutlineLogin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="pb-10">
      <div className="flex flex-col items-center my-2 ">
        <span className="flex items-center font-bold text-2xl">
          <AiOutlineLogin />
          <h1>Gadget Haven</h1>
        </span>
        <p className="text-sm text-center">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <div className="divider"></div>
      <div>
        <footer className="footer md:items-center flex-col justify-center md:flex-row md:flex md:justify-between md:w-4/5 md:px-10 mx-auto">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
