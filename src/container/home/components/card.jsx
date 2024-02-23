// Card.js
import React from "react";
import Cheese from "../components/img/cheese.png";
import Sandwich from "../components/img/sandwich.png";
import Mushroom from "../components/img/mushroom.png";
import ChickenAlfredo from "../components/img/chickenAlfreddo.png";
import { Link } from "react-router-dom";

const Card = ({ title, content }) => {
  const item = [
    {
      id: 1,
      img: Cheese,
      text: "Grilled Cheese",
      maker: "by Andrew Lowrence",
      time: "45 minutes",
    },
    {
      id: 2,
      img: Sandwich,
      text: "Pulled Pork Sandwiches",
      maker: "by Jessica Smith",
      time: "4 hours",
    },
    {
      id: 3,
      img: Mushroom,
      text: "Mushroom Risotto",
      maker: "by Michael Jonson",
      time: "1 hours",
    },
    {
      id: 4,
      img: ChickenAlfredo,
      text: "Chicken Alfredo",
      maker: "by Emily Devis",
      time: "30 minutes",
    },
  ];
  return (
    <>
      <div className="flex justify-between mt-3">
        {item.map((e, id) => {
          return (
            <>
              <Link to={`/recepes/${id}`}>
                <div className="  rounded-2xl overflow-hidden  shadow-md my-4">
                  <img className="h-60 w-[276px]" src={e.img} />
                </div>
                <div className="">
                  <p className="mt-1 text-xl text-[#1C120D] ">{e.text}</p>
                </div>
                <div>
                  <p className="text-sm  text-[#99694D]">{e.maker}</p>
                  <p className="text-sm  text-[#99694D]">{e.time}</p>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Card;
