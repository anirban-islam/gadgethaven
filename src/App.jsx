import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="md:px-20 px-5 mx-auto bg-base-200">
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default App;
