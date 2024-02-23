import React from "react";
import Hero from "../home/hero.jpg";
import SignUpForm from "../signup";

import Card from "./components/card";
import Lower from "./components/lower";


const Home = () => {
  return (
    <div>
      <div className="p-6">
        <img className="h-[600px] w-[100%] rounded-lg" src={Hero} alt="" />
      </div>
      <div className="absolute ml-16 bottom-48 font-bold text-sm ">
        <h1 className="text-6xl text-white ">Welcome to FlavorScribe</h1>
        <p className="text-lg text-white pt-3 tracking-wider hover:tracking-wide">
          {" "}
          Discover new ingredients,recipes, and stories. Sign up to follow your
          favorite creator
        </p>
      </div>
      <form className="absolute ml-16 bottom-20  bg-white rounded-md  ">
        <SignUpForm />
      </form>
      <div className="p-6 mt-2 text-2xl font-semibold">
        <h1>Featured Recipes</h1>
        <Card/>
      </div>
      <div className="p-6 mt-2 text-2xl font-semibold">
        <h1>Trending Stories</h1>
        <Lower/>
      </div>
    </div>
  );
};

export default Home;
