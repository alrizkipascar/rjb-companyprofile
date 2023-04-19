import { useEffect, useState } from "react";
import image from "../../Image/unavailable.jpg";

import Animasection from "./animation";

const Experience = ({ data}) => {
  console.log("data",data.id)
  return (
    <div
    className={`hover:scale-105 border-2 border-slate-700 mb-3 hover:bg-gray-800 transition-all ease-out duration-1000  h-60 rounded-lg  text-slate-50 bg-cover ${data?.id == "excavator" ? "bg-center" : "bg-center"} ${data?.bg}`}
    >
     
     {/* <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
  <img
    src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
    class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
    alt="Louvre" />
</div> */}
{/* <img src={grabber} ></img> */}
    </div>
  );
};
{/* <div
        data-class-in="translate-x-0 opacity-1"
        data-class-out="-translate-x-32 opacity-0"
        className="-translate-x-32 opacity-0 w-full transition transform duration-700 grid grid-cols-3"
      >
        <div className="col-span-1 my-5 mx-5">
          <img src={image} className=" object-fill w-64 h-48"></img>
        </div>
        <div className="col-span-2">{data.name}</div>
      </div> */}
const CardWelcome = ({ children }) => {
  return (
    <div className="border-4 border-slate-50 w-96 h-60 rounded-lg py-5 px-3 mx-20 text-slate-50 bg-gray-700">
      {children}
    </div>
  );
};

const Skills = () => {
  useEffect(() => {
    return () => {
      Animasection.observeAll();
    };
  }, []);

  return (
    <div className="border-t border-slate-700 hover:bg-gray-800 hover:border-slate-600 transition-all ease-out duration-1000 w-full h-60 rounded-lg  text-slate-50 bg-black ">
      {/* {children} */}
      <div
        data-class-in="translate-y-0 opacity-1 h-auto"
        data-class-out="translate-y-32 opacity-0 h-0"
        className="translate-y-32 opacity-0 h-0 w-full transition transform duration-700"
      >
        {/* <div className="hover:scale-100 ease-in-out hover:duration-150 border-t border-r border-slate-700 hover:bg-gray-800 hover:border-slate-600  w-full h-60 rounded-lg  text-slate-50 bg-black transition duration-1000  hover:-translate-y-1 "> */}
        <div className="grid grid-cols-3">
          <div className="">
            <p>WWWWWWWWWWWWWWWWW</p>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
    // <div
    //   className="translate-x-32 opacity-0 h-0 w-full transition transform duration-700"
    // >
    //   <div className="hover:scale-100 ease-in-out hover:duration-150 border-t border-r border-slate-700 hover:bg-gray-800 hover:border-slate-600  w-full h-60 rounded-lg  text-slate-50 bg-black transition duration-1000  hover:-translate-y-1 ">
    //     <div className="grid grid-cols-3">
    //       <div className="col-span-2">WWWWWWWWWWWWWWWWW</div>
    //     </div>
    //   </div>
    // </div>
  );
};

const Products = ({data,setShowModal}) => {
  

  return (
    <div onClick={() =>
      setShowModal({
        modal: true,
        data: data,
      })
    } className="shadow-2xl transition duration-300 ease-in-out hover:scale-110 duration-1000 w-48 h-64 rounded-lg  bg-gray-200 ">
      
      <div
       className="overflow-hidden opacity-1 h-full w-full transition transform duration-700"
      >
        {/* <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
  
</div> */}
        <div className="w-full h-full text-black ">
          
          <img
    src={data ? data?.photo : image}
    className="w-full object-fill h-44 rounded-t-lg bg-white"
    alt="Louvre" />
            <h2 className="w-full text-xs text-bold font-bebas">{data ? data?.title : "unavailable"}</h2>
            <p>{data ? data?.short_desc : "-"}</p>
            
       
        </div>
      </div>
    </div>
  );
};
const Cards = {
  Experience: Experience,
  CardWelcome: CardWelcome,
  Skills: Skills,
  Products: Products,
};

export default Cards;
