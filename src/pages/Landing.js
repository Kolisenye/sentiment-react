import React from "react";
import { Link } from "react-router-dom";

function landing() {
  return (
    <div>
      <nav class="mt-0 fixed w-full z-10 top-0 bg-white border-black">
        <div class="container mx-auto px-6 py-2 flex justify-between items-center md:text-center">
          <a class="font-bold text-2xl lg:text-4xl">SMILEX</a>
          <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
              <svg
                class="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div class="hidden lg:block">
            <ul class="inline-flex">
              <li>
                <a class="px-4 font-bold" href="/">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="h-screen bg-coolGray-800 text-coolGray-100">
        <div className="container flex flex-col items-center px-4 py-24 mx-auto text-center md:py-48 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl text-black">
            Sentiment Analyzer
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">
            This free tool will allow you to conduct a sentiment analysis on any
            text written in English.
          </p>
          <div className="flex flex-wrap justify-center">
            <Link
              to="/login"
              className="inline-flex px-8 py-4 mr-4 tracking-widest text-white uppercase transition duration-500 ease-in-out transform bg-gray-500 sm:mb-0 hover:bg-indigo-600 hover:-translate-y-1 hover:scale-110 focus:bg-indigo-600 focus:-translate-y-1 focus:scale-110"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="inline-flex px-8 py-4 mr-4 tracking-widest text-white uppercase transition duration-500 ease-in-out transform bg-gray-500 sm:mb-0 hover:bg-indigo-600 hover:-translate-y-1 hover:scale-110 focus:bg-indigo-600 focus:-translate-y-1 focus:scale-110"
            >
              Register
            </Link>
          </div>
        </div>
      </section>
      <section class="bg-gray-100">
        <div class="container mx-auto px-6 py-20">
          <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
            Testimonials
          </h2>
          <div class="flex flex-row">
            <div class="w-full md:w-1/3 px-2 mb-4">
              <div class="bg-white rounded shadow py-2">
                <p class="text-gray-800 text-base px-6 mb-5">
                  Text sentiment analysis has never been easier!
                </p>
                <p class="text-gray-500 text-xs md:text-sm px-6">
                  Ugo Okechukwu
                </p>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-2 mb-4">
              <div class="bg-white rounded shadow py-2">
                <p class="text-gray-800 text-base px-6 mb-5">
                  As an data analyst, this helps to simplify a part of my work.
                </p>
                <p class="text-gray-500 text-xs md:text-sm px-6">
                  Abimbola Osime
                </p>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-2 mb-4">
              <div class="bg-white rounded shadow py-2">
                <p class="text-gray-800 text-base px-6 mb-5">
                  Very handy for quick analysis of any text!
                </p>
                <p class="text-gray-500 text-xs md:text-sm px-6">Molly East</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="block text-coolGray-800">Ready to dive in?</span>
            <span className="block text-black">Start analyzing today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/Signup"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-coolGray-800 hover:bg-black"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr class="text-black"></hr>
      <footer class="bg-gray-100">
        <div class="container mx-auto px-20 pt-10 pb-6">
          <div class="flex  flex-row">
            <div class="w-full md:w-1/4 text-center md:text-left">
              <h5 class="uppercase mb-6 font-bold">Links</h5>
              <ul class="mb-4">
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-gray-600 hover:text-black"
                  >
                    FAQ
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-gray-600 hover:text-black"
                  >
                    Help
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-gray-600 hover:text-black"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-1/4 text-center md:text-left">
              <h5 class="uppercase mb-6 font-bold">Legal</h5>
              <ul class="mb-4">
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-gray-600 hover:text-black"
                  >
                    Terms
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-gray-600 hover:text-black"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-1/4 text-center md:text-left">
              <h5 class="uppercase mb-6 font-bold">Social</h5>
              <ul class="mb-4">
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-gray-600 hover:text-black"
                  >
                    Facebook
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-gray-600 hover:text-black"
                  >
                    Linkedin
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-gray-600 hover:text-black"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-1/4 text-center md:text-left">
              <h5 class="uppercase mb-6 font-bold">Company</h5>
              <ul class="mb-4">
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-gray-600 hover:text-black"
                  >
                    Official Blog
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-gray-600 hover:text-black"
                  >
                    About Us
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-gray-600 hover:text-black"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default landing;
