import React from "react";
import { Link } from "react-router-dom";
// import image1 from "../assets/svgs/";

function landing() {
  return (
    <>
      <div class="text-coolGray-800">
        <div class="p-6 space-y-8">
          <header class="container flex items-center justify-between h-16 px-4 mx-auto rounded bg-coolGray-50">
            <Link to="/">
              <span className="text-3xl font-bold">
                SMI
                <span className="text-gray-300">LEX</span>
              </span>
            </Link>
            <div class="items-center hidden space-x-8 lg:flex">
              <div class="space-x-4"></div>
              <Link to="/login">Login</Link>
              <Link
                to="/signup"
                class="px-4 py-2 rounded-md bg-coolGray-800 text-coolGray-50"
              >
                Sign up
              </Link>
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
          <main>
            <div class="container mx-auto space-y-16">
              <section class="grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-5">
                <div class="w-full p-6 rounded-md sm:p-16 xl:col-span-2 bg-coolGray-50">
                  <h1 className="text-4xl font-bold leading-none sm:text-5xl">
                    Sentiment
                    <span className="text-gray-300"> Analyzer</span>
                  </h1>
                  <p className="px-8 mt-8 mb-12 text-lg">
                    This free tool will allow you to conduct a sentiment
                    analysis on any text written in English.
                  </p>
                  <div className="flex flex-wrap justify-center">
                    <Link
                      to="/signup"
                      className="px-8 py-3 m-2 text-lg font-semibold bg-coolGray-800 rounded text-coolGray-50"
                    >
                      Get started
                    </Link>
                    <a
                      href="https://en.wikipedia.org/wiki/Sentiment_analysis"
                      className="px-8 py-3 m-2 text-lg border rounded text-coolGray-900 border-coolGray-300"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
                <img
                  src="https://source.unsplash.com/random/480x360"
                  alt=""
                  class="object-cover w-full h-full rounded-md xl:col-span-3"
                />
              </section>
              <section>
                <span class="block mb-2 text-xs font-medium tracking-widest uppercase lg:text-center text-gray-500">
                  How it works
                </span>
                <h2 class="text-5xl font-bold lg:text-center text-coolGray-800">
                  Sentiment Analysis with Smilex is simple
                </h2>
                <div class="grid gap-6 my-16 lg:grid-cols-3">
                  <div class="flex flex-col p-8 space-y-4 rounded-md bg-coolGray-50">
                    <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-coolGray-400 text-coolGray-50">
                      1
                    </div>
                    <p class="text-2xl font-semibold">
                      <b>Create.</b> Create an account with us.
                    </p>
                  </div>
                  <div class="flex flex-col p-8 space-y-4 rounded-md bg-coolGray-50">
                    <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-coolGray-400 text-coolGray-50">
                      2
                    </div>
                    <p class="text-2xl font-semibold">
                      <b>Input.</b> Input the text you want to analyze into the
                      homepage of the system.
                    </p>
                  </div>
                  <div class="flex flex-col p-8 space-y-4 rounded-md bg-coolGray-50">
                    <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-coolGray-400 text-coolGray-50">
                      3
                    </div>
                    <p class="text-2xl font-semibold">
                      <b>Analyze.</b> View your results, Happy Analyzing!
                    </p>
                  </div>
                </div>
              </section>
              <section class="grid gap-6 lg:grid-cols-2">
                <img
                  src="https://source.unsplash.com/random/360x480"
                  alt=""
                  class="object-cover w-full rounded-md max-h-96"
                />
                <div class="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 bg-coolGray-50">
                  <img
                    src="https://source.unsplash.com/random/100x100"
                    alt=""
                    class="object-cover w-20 h-20 rounded-full"
                  />
                  <blockquote class="max-w-lg text-lg italic font-medium text-center">
                    "This has been so helpful in analyzing the articles we
                    review before publishing our books and it is so easy to
                    use!"
                  </blockquote>
                  <div class="text-center text-coolGray-600">
                    <p>Nwaboku Kolisenye</p>
                    <p>CEO of Lush Publishing Co.</p>
                  </div>
                  <div class="flex space-x-2">
                    <button
                      aria-label="Page 1"
                      class="w-2 h-2 rounded-full bg-coolGray-900"
                    ></button>
                    <button
                      aria-label="Page 2"
                      class="w-2 h-2 rounded-full bg-coolGray-400"
                    ></button>
                    <button
                      aria-label="Page 3"
                      class="w-2 h-2 rounded-full bg-coolGray-400"
                    ></button>
                    <button
                      aria-label="Page 4"
                      class="w-2 h-2 rounded-full bg-coolGray-400"
                    ></button>
                  </div>
                </div>
                <div class="p-8 space-y-8 rounded-md lg:col-span-full lg:py-12 bg-coolGray-50">
                  <h2 class="text-5xl font-bold text-coolGray-900">
                    Smile with us
                  </h2>
                  <p class="text-coolGray-600">
                    The goal of smilex is to help to relay the right messages in
                    your text and be able to tell the sentiment of other text.
                    Smilex invites developers worldwide to make contributions to
                    making our system better with your suggestions. We are open
                    to new ideas and approaches. Thank you for your time.
                  </p>
                </div>
              </section>
              <section>
                <div class="grid gap-6 lg:grid-cols-3">
                  <div class="overflow-hidden rounded lg:flex lg:col-span-3">
                    <img
                      src="https://source.unsplash.com/random/485x365"
                      alt=""
                      class="object-cover w-full h-auto max-h-96"
                    />
                    <div class="p-6 space-y-6 lg:p-8 md:flex md:flex-col bg-coolGray-50">
                      <span class="self-start px-3 py-1 text-sm rounded-full bg-coolGray-800 text-coolGray-50">
                        Business
                      </span>
                      <h2 class="text-3xl font-bold md:flex-1">
                        Curating a workplace that inspires team movement
                      </h2>
                      <div>
                        <p class="text-coolGray-600">November 30, 2020</p>
                        <p class="text-coolGray-600">By Julia Styles</p>
                      </div>
                    </div>
                  </div>
                  <div class="p-6 rounded lg:p-8 lg:py-12 bg-coolGray-50">
                    <h3 class="inline font-medium text-coolGray-900">
                      Added benefits.
                    </h3>
                    <p class="inline text-gray-500">
                      {" "}
                      Join the Smilex family to gain access to more updates
                      coming soon.
                    </p>
                  </div>
                  <div class="p-6 rounded lg:p-8 lg:py-12 bg-coolGray-50">
                    <h3 class="inline font-medium text-coolGray-900">
                      Fast response.
                    </h3>
                    <p class="inline text-gray-500">
                      {" "}
                      Real-time analysis of your text.
                    </p>
                  </div>
                  <div class="p-6 rounded lg:p-8 lg:py-12 bg-coolGray-50">
                    <h3 class="inline font-medium text-coolGray-900">
                      Premium support.
                    </h3>
                    <p class="inline text-gray-500">
                      {" "}
                      Join over 5000 satisfied customers who use our
                      application.
                    </p>
                  </div>
                </div>
              </section>
              <section>
                <div class="container p-6 py-20 mx-auto rounded lg:px-8 bg-coolGray-50">
                  <h2 class="text-5xl font-bold text-center">
                    Our team is here to help you.
                  </h2>
                  <div class="flex justify-center p-4 text-gray-400">
                    <a href="#">Meet our crew &gt;</a>
                  </div>
                  <img
                    src="https://source.unsplash.com/random/360x240"
                    alt=""
                    class="object-cover w-full h-auto mt-8 rounded max-h-96"
                  />
                </div>
              </section>
            </div>
          </main>
          <footer>
            <div class="container flex justify-between p-6 mx-auto lg:p-8 bg-coolGray-50">
              <Link href="/" class="font-bold">
                <span>
                  SMI
                  <span className="text-gray-400">LEX</span>
                </span>
              </Link>
              <div class="flex space-x-2"></div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default landing;
