// Card.js
import React from "react";
import Story1 from "../components/img/story1.png"
import Story2 from "../components/img/story2.png"
import Story3 from "../components/img/story3.png"

import { Link } from "react-router-dom";

const Lower = ({ title, content }) => {
  
  const item = [
    {
      id: 1,
      img: Story1,
      text: "How I learned to cook",
      maker: "by Sarah Thompson",
      
    },
    {
      id: 2,
      img: Story2,
      text: "The Art of Grilling",
      maker: "by John Miller",
     
    },
    {
      id: 3,
      img: Story3,
      text: "The Joy of Baking",
      maker: "by Emma Davis",
      
    },
   
  ];
  return (
    <>
      <div className="mt-3">
        {item.map((e, id) => {
          return (
            <>
              <Link to={`/stories/${id}`}>
               <div className="flex justify-between"> 
               <div className="">
                  <p className="mt-1 text-xl text-[#1C120D] ">{e.text}</p>
                  <p className="text-sm  text-[#99694D]">{e.maker}</p>
                  <p className="text-sm  text-[#99694D]">{e.time}</p>
                  <Link to={`/stories`}>
                  <button className="bg-[#F2EDE8] text-sm ml-5 mt-4 rounded-full w-28 h-7 ">Read more</button>
                
                  </Link>
                 </div>
                <div className="  rounded-2xl overflow-hidden  shadow-md my-4">
                  <img className="h-52 w-[380px]" src={e.img} />
                </div>
               </div>
                
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Lower;
