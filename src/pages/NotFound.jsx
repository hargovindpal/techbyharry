import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      {/* Big 404 with glowing effect */}
      <h1 className="text-9xl font-extrabold text-yellow-500 drop-shadow-lg animate-bounce">
        404
      </h1>

      {/* Subtitle */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
        Oops! Page Not Found
      </h2>

      {/* Message */}
      <p className="text-gray-500 mt-2 max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Button with neumorphism effect */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 rounded-2xl font-bold text-white bg-yellow-500 shadow-lg hover:shadow-xl transition-all duration-300"
        style={{
          boxShadow: "8px 8px 16px #c9c9c9, -8px -8px 16px #ffffff",
        }}
      >
        🔙 Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
