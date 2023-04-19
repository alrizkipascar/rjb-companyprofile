import { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Animasection from "./animation";
import Cards from "./Cards";
import { Icon } from "@mui/material";
import { Home, Person, Construction, Work, Phone } from "@mui/icons-material";

import { ConstructionIcon } from "@mui/icons-material";

const Nav = ({ scrollToPage }) => {
  const location = useLocation();
  // const [page, setPage] = useState(null);
   console.log("link",location.pathname)
  // const scrollToPages = (id) => {
  //   // console.log(page);
  //   // console.log(id); py-3 -py-5
  //   scrollToPage(id);
  // };
  // if (page != null) {
  //   scrollToPages(page);
  // }
  
 
  return (
    <>
    <nav className="sticky top-0 flex justify-center z-50 w-full h-20 grid-cols-2 text-white flex bg-gray-900">
    
    <Link 
      to="/"
      className={`w-1/3 text-white `}>
      <div className="">
         
         {/* <Home /> */}
         RJB
       </div>
      </Link>
      {/* <div className=" " >
      </div> */}
    <div 
    className="  w-2/3 text-white flex bg-gray-900">
      
      <Link 
      to="/"
      className={`grid justify-items-center w-1/4 hover:bg-slate-700 ${location.pathname == "/" ? "bg-slate-700":"bg-gray-900"}`}>
      <button
        id={"home"}
        // onClick={() => setPage("welcome")}
      >
        <div className="">
         
          {/* <Home /> */}
          Home
        </div>
      </button>
      </Link>
      <Link to="/about" 
      className={`grid justify-items-center w-1/4 hover:bg-slate-700 ${location.pathname == "/about" ? "bg-slate-700":"bg-gray-900"}`}>
      <button
        
        id={"about"}
        // onClick={() => setPage("about")}
      >
        <div className="">
          {/* <Person /> */}
          About Us
        </div>
      </button>
      </Link>
      <Link
      to="/products"
      className={`grid justify-items-center w-1/4 hover:bg-slate-700 ${location.pathname == "/products" ? "bg-slate-700":"bg-gray-900"}`}>
      <button
        
        id={"product"}
        // onClick={() => setPage("experience")}
      >
        <div >
          {/* <Work /> */}
          Product
        </div>
      </button>
      </Link>
      {/* <Link 
      to="/workforce"
      className={`grid justify-items-center w-1/5 hover:bg-slate-700 ${location.pathname == "/workforce" ? "bg-slate-700":"bg-gray-900"}`}>
      <button
        id={"skills"}
        
      >
        <div >
        
          Skills
        </div>
      </button>
      </Link> */}
      <Link 
      to="/contact"
      className={`grid justify-items-center w-1/4 hover:bg-slate-700 ${location.pathname == "/contact" ? "bg-slate-700":"bg-gray-900"}`}
      >
      
      <button
        
        id={"contact"}
        // onClick={() => setPage("contact")}
      >
        <div >
          {/* <Phone /> */}
          Contact
        </div>
      </button>
      </Link>
    </div>
    
    </nav>
    
    <Outlet/>
    
    </>
    
  );
};

export default Nav;
