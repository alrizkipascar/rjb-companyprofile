import Cards from "./component/Cards";
import { Home,Factory,ContactPhone, Email } from "@mui/icons-material";
import { useEffect } from "react";

import Animasection from "./component/animation";

const Contact = ({ contact }) => {

  useEffect(() => {
    return () => {
      Animasection.observeAll();
    };
  }, []);
  return (
    <div
      ref={contact}
      className="w-full h-screen flex-row text-black bg-cover bg-no-repeat bg-orange py-20"
    >
    
      <div 
      data-class-in="translate-y-0 opacity-1"
      data-class-out="translate-y-32 opacity-0"
      className="translate-y-32 opacity-0 transition transform duration-1000 h-64 px-32 grid grid-cols-2 w-full py-5 border-slate-800 rounded-lg gap-5">
        <div className=" grid grid-rows-2 border-t border-b rounded-lg border-zinc-700">
          {" "}
          <div className="grid grid-row">
          <h2><Home/>OFFICE</h2>
          
          <p>Jl. Raya Mustika Sari Km.03 / 150
          Mustika Jaya – Kota Bekasi
          </p>
          </div>
          <div className="grid grid-row">
          
          <h2><Factory/> WORKSHOP</h2>
          <p>Bumi Mutiara Blok JG2/20, Bojong Kulur
          Gunung Putri – Kabupaten Bogor</p>
          </div>
          
         
        </div>
        <div className="border-t border-b rounded-lg border-zinc-700 grid grid-rows-2">
          <div><ContactPhone />
          <p>0811.187.197</p>
          <p>Marketing – 0813.1477.5908</p>
          </div>
          <div className="w-full"><Email />
          <p>raharjajayabersama@gmail.com</p>
          </div>
          
          
         
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
