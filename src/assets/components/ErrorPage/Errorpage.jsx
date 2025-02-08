import { Helmet } from "react-helmet";
import { FaArrowLeftLong } from "react-icons/fa6";


const Errorpage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-4">
          <Helmet>
          <title>404 | Page Not Found</title>
          </Helmet>
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-xl text-gray-600 mt-4">Oops! The page you are looking for does not exist.</p>
        <a href="/" className="mt-6 px-6 py-3 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 transition flex items-center gap-2">
        <FaArrowLeftLong/> Go Home
        </a>
      </div>
    );
};

export default Errorpage;