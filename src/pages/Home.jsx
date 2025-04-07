import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto py-8 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Welcome to Suraj Electronics</h2>

      {/* Buttons for Remotes and Stands */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        {/* TV Remote Button */}
        <Link
          to="/remotes"
          className="relative block bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition duration-200 text-lg font-semibold overflow-hidden w-64 h-64"
        >
          <img
            src="https://play-lh.googleusercontent.com/GN6VNvzbyjHK02NVSKw5uGLa84SSV30H0ToW-ksl8pqkmfCCIq0Vt1m04t5-GWuqew"
            alt="TV Remote"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <span className="text-2xl font-bold">TV Remotes</span>
          </div>
        </Link>

        {/* AC Remote Button */}
        <Link
          to="/ac-remotes"
          className="relative block bg-teal-600 text-white rounded-lg shadow hover:bg-teal-500 transition duration-200 text-lg font-semibold overflow-hidden w-64 h-64"
        >
          <img
            src="https://i.ytimg.com/vi/t8OB4WeAKno/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDKeefK6rhukKfh2N3arjpqeGCaMA"
            alt="AC Remote"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "https://i.ytimg.com/vi/t8OB4WeAKno/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDKeefK6rhukKfh2N3arjpqeGCaMA";
            }}
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <span className="text-2xl font-bold">AC Remotes</span>
          </div>
        </Link>

        {/* Stand Button */}
        <Link
          to="/stands"
          className="relative block bg-green-600 text-white rounded-lg shadow hover:bg-green-500 transition duration-200 text-lg font-semibold overflow-hidden w-64 h-64"
        >
          <img
            src="https://images-cdn.ubuy.co.in/633bbd4bcf0d852cb76bf07c-full-motion-tv-monitor-wall-mount.jpg"
            alt="Stand"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <span className="text-2xl font-bold">Stands</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
