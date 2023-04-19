// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cards from "./component/Cards";
import Modal from "./component/Modal";
import Animasection from "./component/animation";
import {Link, useNavigate } from "react-router-dom";
import dumpPhoto from "../Pages/component/product-img/dump";
import excavatorPhoto from "../Pages/component/product-img/excavator"
import otherPhoto from "../Pages/component/product-img/other"

const Experience = ({ experience }) => {
  // const history = useNavigate();
 
  const [showModal, setShowModal] = useState({});
  // const [dataIndex, setDataIndex] = useState(null);

  // function handleClick() {
  //   history("/home");
  // }
  // process.env.PUBLIC_URL + '/logo.png'
  const navigate = useNavigate();
  console.log(dumpPhoto[0])
  const data = [
    {
      id: "dump",
      title: "Dump Truck Spare Parts",
      products: dumpPhoto,
      bg: "bg-dump",
    },
    {
      id: "excavator",
      title: "Bucket Excavator",
      products: excavatorPhoto,
      bg: "bg-excavator",
    },
    {
      id: "other",
      title: "Other",
      products: otherPhoto,
      bg: "bg-other",
    },
  ];
  useEffect(() => {
    return () => {
      Animasection.observeAll();
    };
  }, []);

  const toComponentB=(index)=>{
    navigate(`/products/${ data[index]?.id}`,{state:{data: data[index]}});
      }
  
  return (
    <div
      ref={experience}
      className="w-full h-full text-black  bg-cover bg-no-repeat bg-orange px-6 py-20"
    >
      <div
      data-class-in="translate-y-0 opacity-1"
      data-class-out="translate-y-32 opacity-0"
      className="translate-y-32 opacity-0 transition transform duration-1000  w-full grid grid-cols-5">
      <div className="col-start-2 col-span-4 py-5 ">
      
        {data.map((index, i) => {
          return (
            <>
              {/* <Link to={`experience/${data.id}`}> */}
              <h1 className="text-bold text-2xl font-bebas">{index?.title}</h1>
              <div className="w-3/4 gap-4" onClick={()=>{toComponentB(i)}}>
              <Cards.Experience
                // onClick={handleClick}
                data={index}
                
                
                // showModal={showModal}
                // setDataIndex={setDataIndex}
                // setShowModal={setShowModal}
              ></Cards.Experience>
              </div>
              
            
             
            </>
          );
        })}
        
      </div>
      </div>
    </div>
  );
};

export default Experience;
