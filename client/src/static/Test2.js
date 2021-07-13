import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

function landing() {
  return (
    <div>
      {/* <nav class="mt-0 fixed w-full z-10 top-0 bg-white border-black">
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
      </nav> */}
      <header class="container p-6 flex items-center justify-between h-16 px-4 mx-auto rounded bg-coolGray-50">
        <a href="#" aria-label="Homepage">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 32 32"
            class="w-6 h-6 text-indigo-600"
          >
            <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
            <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
          </svg>
        </a>
        <div class="items-center hidden space-x-8 lg:flex">
          <div class="space-x-4">
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
          </div>
          <button class="px-4 py-2 rounded-md bg-indigo-600 text-coolGray-50">
            Sign up
          </button>
        </div>
        <button class="flex items-center justify-center p-2 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6 text-coolGray-900"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </header>
      <section className="h-screen bg-coolGray-800 text-coolGray-100">
        <div className="container flex flex-col items-center px-4 py-24 mx-auto text-center md:py-48 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leading-none text-black sm:text-5xl">
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
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="block text-coolGray-800">Ready to dive in?</span>
            <span className="block text-black">Start analyzing today.</span>
          </h2>
          <div className="flex mt-8 lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/Signup"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white border border-transparent rounded-md bg-coolGray-800 hover:bg-black"
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
