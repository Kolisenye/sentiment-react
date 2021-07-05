import React from "react";
import { Link } from "react-router-dom";

function landing() {
  return (
    <div>
      <section className="h-screen bg-coolGray-800 text-coolGray-100">
        <div className="container flex flex-col items-center px-4 py-16 mx-auto text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            Quisquam necessita vel
            <span className="text-indigo-600">laborum doloribus</span>delectus
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">
            Cupiditate minima voluptate temporibus quia? Architecto beatae esse
            ab amet vero eaque explicabo!
          </p>
          <div className="flex flex-wrap justify-center">
            <Link
              to="/login"
              className="inline-flex px-8 py-4 mr-4 tracking-widest text-white uppercase transition duration-500 ease-in-out transform bg-gray-500 sm:mb-0 hover:bg-indigo-600 hover:-translate-y-1 hover:scale-110 focus:bg-indigo-600 focus:-translate-y-1 focus:scale-110"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="inline-flex px-8 py-4 mr-4 tracking-widest text-white uppercase transition duration-500 ease-in-out transform bg-gray-500 sm:mb-0 hover:bg-indigo-600 hover:-translate-y-1 hover:scale-110 focus:bg-indigo-600 focus:-translate-y-1 focus:scale-110"
            >
              Register
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default landing;
