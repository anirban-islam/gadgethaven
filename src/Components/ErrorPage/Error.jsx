import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-violet-500 via-purple-400 to-pink-400 text-white">
        <div className="text-center p-8 rounded-lg shadow-lg bg-opacity-30 backdrop-blur-lg">
          <h1 className="text-9xl font-extrabold mb-4 animate-pulse">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-lg mb-6">
            It seems like you've wandered off the map. The page you're looking
            for isn't here.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition-all duration-300"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
