import React, { useState } from "react";
import unavailable from "../../Image/unavailable.jpg";


const Modal = ({ data, showModal, setShowModal }) => {
  const [cssModal, setCssModal] = useState(
    "translate-x-32 transition-all ease-out duration-1000  "
  );
  console.log(showModal)
  // let cssModal =
  //   "translate-y-32 transition-all ease-out duration-1000  flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none";
  let ModalOut =
    "translate-x-0 transition-all ease-out duration-1000 ";
  if (showModal?.modal != false || null) {
    setTimeout(() => {
      setCssModal(ModalOut);
      // cssModal = ModalOut;
      // "translate-y-0 transition-all ease-out duration-1000  flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none";

      // showModal?.modal != false
      //   ? "translate-y-0 transition-all ease-out duration-1000  flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      //   : "translate-y-32 transition-all ease-out duration-1000  flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none";
    }, 100);
  }

  // const [modal, setShowModal] = useState(false);
  return (
    <>
      {/* <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      > 
        Fill Details
      </button> */}
      {showModal ? (
        <>
          <div className={`fixed inset-0 z-50 bg-white border bg-opacity-50 w-full h-screen flex justify-center items-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none `}>
            <div className={`bg-white border rounded-xl w-3/4 h-3/4 ${cssModal}`}>
            <div className="h-auto flex rounded-xl items-center justify-end border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal({ modal: false, data: null })}
                  >
                    Close
                  </button>
                  
                </div>
              <div className="border-0 border rounded-xl shadow-lg relative flex flex-col h-full w-full bg-gray-100 outline-none focus:outline-none">
              <div className="h-full w-full rounded-t-xl bg-white">
              <img
    src={data ? data?.photo : unavailable}
    className="w-48 mx-auto object-fill h-64  rounded-xl bg-white"
    alt="Louvre" />
              </div>
              
              <div className="bg-gray-100 h-full w-full rounded-xl">
                <div className="py-2 px-4 h-auto grid grid-cols-2 border">
                <h1>Nama Barang</h1>
                <h1>{data?.title}</h1>
                </div>
                <div className="py-2 px-4 h-auto grid grid-cols-2 border">
                <p>Deskripsi</p>
                <p>{data?.description}</p>
                </div>
                <div className="py-2 px-4 h-auto grid grid-cols-2 border">
                <p>Type</p>
                <ul class="list-disc">
                {data?.type.map((index, i) => {
          return (
            <>
              
              <li>{index}</li>
            </>
          );
        })}
        </ul>
                </div>
                
    
  
                {/* <div className="relative p-6 flex-auto">
                  <div className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <div className="text-black text-sm font-bold">
                      <p>Experience</p>
                      {data?.name}
                    </div>
                    <label className="block text-black text-sm font-bold mb-1">
                      {data?.name}
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      Last Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      Address
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      City
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                  </div>
                </div> */}
                
              </div>
    
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
