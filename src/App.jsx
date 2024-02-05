import React from "react";
import "./App.css";

const NavBar = () => (
  <nav className="h-16 bg-black flex items-center">
    <h1 className="text-2xl text-white ml-4">Kalvium</h1>
    <p className="text-white ml-8">About</p>
    <p className="text-white ml-9">Contact</p>
    <p className="text-white ml-10">Courses</p>
    <button className="text-white ml-auto mr-10 border pr-4 pl-4 pt-1 pb-1 rounded-t-lg rounded-b-lg">
      Login
    </button>
  </nav>
);

const ButtonOne = () => (
  <button className="text-white ml-10 mt-10 border p-2 rounded-lg bg-blue-500">
    Button one
  </button>
);

const RedBox = () => (
  <div className="w-1/2">
    <div className="text-red-500 ml-10 mt-10 w-{45%} border rounded-lg bg-red-200 border-red-500 p-3 font-bold ">
      <span className="ml-4">Alter! This is awesome!</span>
    </div>
  </div>
);

const KalviumStore = () => (
  <div className="flex justify-center">
    <div className="text-black mt-10 border p-5 rounded-lg bg-white w-80 shadow-md">
      <h1 className="text-2xl ml-4">Kalvium Store</h1>
      <div className="ml-4">You have a new course!</div>
    </div>
  </div>
);

const Footer = () => (
  <div className="text-black border p-5 rounded-lg bg-gray-300 text-center">
    <p>Made by Aditi</p>
  </div>
);

const App = () => (
  <>
    <NavBar />
    <ButtonOne />
    <RedBox />
    <KalviumStore />
    <Footer />
  </>
);

export default App;
