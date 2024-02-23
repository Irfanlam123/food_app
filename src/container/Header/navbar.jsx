import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navBar = [
    { id: 1, name: "Home", link: "/home" },
    {
      id: 2,
      name: "Recipes",
      link: "/recepes",
    },

    {
      id: 3,
      name: "Ingredients",
      link: "/ingredients",
    },
    {
      id: 4,
      name: "Stories",
      link: "/stories",
    },

    {
      id: 5,
      name: "Shop",
      link: "/shop",
    },
  ];

  return (
    <div>
      <div className="flex justify-between bg-[#ffffff] text-[#1C120D]">
        <div className="font-bold text-black">
          {" "}
          <span className="text-2xl font-bold">F</span>lavor{" "}
          <span className="text-2xl font-bold">S</span>cribe
        </div>
        {navBar.map((e) => {
          return (
            <div>
              <li className="list-none font-sans  ">
                <Link className="" to={e.link}>
                  {" "}
                  {e.name}
                </Link>
              </li>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
