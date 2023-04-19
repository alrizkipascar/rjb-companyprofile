import Cards from "./component/Cards";
import image from "../Image/orange.jpg"
import { useEffect, useRef } from "react";
import Nav from "./component/Nav";
import Contact from "./Contact";
import Experience from "./Experience";
import Skills from "./Skills";
import Welcome from "./Home";
import About from "./About";
import Animasection from "./component/animation";
import CarouselFull from "./component/carousel-text";
// import image from "../Image/background.jpg";
const Home = ({ Welcome }) => {
  useEffect(() => {
    return () => {
      Animasection.observeAll();
    };
  }, []);

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
  // console.log("test", document.querySelectorAll("[data-replace]"));
  // document.addEventListener("DOMContentLoaded", function () {
  // setTimeout(function () {
  //   var replacers = document.querySelectorAll("[data-replace]");
  //   console.log("replacer", replacers);
  //   for (var i = 0; i < replacers.length; i++) {
  //     let replaceClasses = JSON.parse(
  //       replacers[i].dataset.replace.replace(/'/g, '"')
  //     );
  //     Object.keys(replaceClasses).forEach(function (key) {
  //       replacers[i].classList.remove(key);
  //       replacers[i].classList.add(replaceClasses[key]);
  //     });
  //   }
  // }, 200);
  // }); bg-gradient-to-b from-blue-900 to-blue-600 
  //className="w-full bg-cover bg-no-repeat bg-orange  border-b border-slate-700 text-white items-center justify-center flex h-screen "
  return (
    <div
    ref={Welcome}
      className="overflow-y-hidden sm:h-screen w-full bg-cover bg-no-repeat bg-orange  border-b border-slate-700 items-center justify-center flex h-screen "
    >
      <div
        data-class-in="translate-y-0 opacity-1"
        data-class-out="translate-y-32 opacity-0"
        className="translate-y-32 opacity-0 transition transform duration-1000 w-full text-base font-light text-center font-sans leading-relaxed mt-0 mb-4"
      >
      <CarouselFull data={CarouselData} />

        {/* <p
          className="text-black  text-4xl "
        >
          Welcome to my page
        </p>
        <h3
          className="text-black"
        >
          My name is Alrizki Pasca Ramadhani
        </h3> */}
      </div>
    </div>
  );
};

export default Home;
