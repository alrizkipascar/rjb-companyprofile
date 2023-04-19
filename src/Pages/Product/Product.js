import { useEffect, useRef, useState } from "react";
import Animasection from "../component/animation";
import { useLocation } from "react-router-dom";
import Cards from "../component/Cards";
import Modal from "../component/Modal";
// import CarouselFull from "./component/carousel-text";
// import image from "../Image/background.jpg";
const Product = ({ data }) => {
  useEffect(() => {
    return () => {
      Animasection.observeAll();
    };
  }, []);
  const location = useLocation();
  const dataProduct = location.state?.data?.products
  console.log("data prod",dataProduct)
  
  const [showModal, setShowModal] = useState({});

  const Modals = ({ data, showModal, setShowModal }) => {
    // setTimeout(() => {
    return (
      <Modal
        data={data}
        showModal={showModal}
        setShowModal={setShowModal}
      ></Modal>
    );
    // });
  };

  const CarouselData = [
    {
      text:"General Trading",
    },
    {
      text:
        "Supplier Sparepart Dump Truck ( Plantations & Mining )",
    },
    {
      text:
        "Fabrikasi / Custom Bucket Excavator STD – ATPM",
    },
    {
      text:
        "Supplier Filter-Filter Heavy Equipment",
    },
    {
      text:
        "Sub – Dist ( Germagic Disinfectant / Antiseptika )",
    },
  ];
 return (
    <div
    
      className="w-full h-screen text-black  bg-cover bg-no-repeat bg-orange px-6 py-20"
    >
       <div className="w-full ">
      {/* <div className="col-start-2 col-span-4 py-5 "> */}
      <Modals
                data={showModal.data}
                showModal={showModal.modal}
                setShowModal={setShowModal}
              ></Modals>
      <div
        data-class-in="translate-y-0 opacity-1"
        data-class-out="translate-y-32 opacity-0"
        className="translate-y-32 opacity-0 w-full transition transform duration-1000   text-base font-light text-center font-sans leading-relaxed mt-0 mb-4"
      >

        
        <div className="grid grid-cols-4 xl:grid-cols-8 gap-4">
        {dataProduct.map((index, i) => {
          return (
            <>
              <Cards.Products setShowModal={setShowModal} data={index} ></Cards.Products>
             
            </>
          );
        })}
         </div>
         
      </div>
      </div>
     
      {/* <div className="grid grid-cols-2 py-5 gap-5">
       
      </div> */}
    </div>
  );
};

export default Product;
