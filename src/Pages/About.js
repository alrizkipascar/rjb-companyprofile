import { useEffect } from "react";
import Cards from "./component/Cards";

import Animasection from "./component/animation";
const About = ({ about }) => {
  useEffect(() => {
    return () => {
      Animasection.observeAll();
    };
  }, []);
  return (
    <div
      
      className="w-full h-full lg:h-screen grid justify-items-center  flex-row bg-cover bg-no-repeat bg-orange py-20"
    >
      <div 
      data-class-in="translate-y-0 opacity-1"
      data-class-out="translate-y-32 opacity-0"
      className="translate-y-32 opacity-0 transition transform duration-1000 font-serif w-1/2">
        <h1 className="text-3xl text-black text-bold">Siapa PT.Raharja Jaya Bersama?</h1>
      <p className="h-auto text-left  font-light leading-relaxed mt-0 mb-4 text-slate-700">
      Berbekal dari pengalaman untuk kemajuan
perusahaan, PT.Raharja Jaya Bersama sejak pertama 
kali berdiri hingga sekarang ini tetap berkarya dan 
masih mempunyai prospek untuk berkembang di
masa yang akan datang. Sebagai perusahaan yang
memfokuskan dirinya pada bidang penjualan spare
part dump truck khususnya hidrolik pada vehicle 
Body Manufacture / karoseri dan filter heavy 
equipment-alat berat / Fabrikasi-Custom Bucket 
Excavator STD ATPM, PT.Raharja Jaya Bersama 
tetap konsisten dalam melayani customer melalui 
bisnis utamanya yaitu penjualan spare part dump 
truck (mining/plantations), filter-filter
heavy 
equipment atau suku cadang lainnya.

</p>
<h1 className="text-3xl text-black text-bold">Pelayanan PT.Raharja Jaya Bersama</h1>
<p className="h-auto text-left  font-light leading-relaxed mt-0 mb-4 text-slate-700">
Dalam persaingan pasar global dan perdagangan 
bebas, telah mendorong PT. Raharja Jaya Bersama 
tetap komitmen dalam memberikan pelayanan 
produk yang lebih kompetitif dalam hal kualitas,
harga dan pengiriman tepat waktu. Kerjasama dan 
sinergi antara PT. Raharja Jaya Bersama dengan 
para pelanggan serta mitra-mitra perusahaan lainnya 
yang saat ini Kami jalankan sebagai Mitra BUMN ( 
PT PP Presisi Tbk juga Group Holdingnya PT PP 
Persero Tbk juga PT Brantas Abipraya Tbk dan 
beberapa Perusahaan Plantation terkemuka juga 
Swasta ) juga terregistrasi di LPSE / LPSE secara 
nasional, baik dari dalam maupun luar kota, sebagai
pendukung bagi PT. Raharja Jaya Bersama untuk
terus fokus memberikan pelayanan terbaik kepada
para pelanggannya.
</p>
<h1 className="text-3xl text-black text-bold">Visi dan Misi</h1>
<p className="h-auto text-left  font-light leading-relaxed mt-0 mb-4 text-slate-700">
Keamanan, kenyamanan serta kepuasan para 
customer menjadi salah satu konsentrasi PT. Raharja 
Jaya Bersama dalam memberikan produk-produk 
spare part dump truck ( suku cadang / komponen 
ATPM Group Karoseri terkemuka ) yang berkualitas 
dengan harga kompetitif dan terpercaya. Kami 
berharap keinginan tersebut dapat tercapai dan 
sukses dalam program jangka pendek maupun
jangka panjang.
</p>

      </div>
      

      {/* <div className="grid grid-cols-2 w-full py-5 border-slate-800 rounded-lg gap-5">
        <div className="border-t rounded-lg border-zinc-800">
          {" "}
          AAAAAAAAAAAAAA
        </div>
        <div className="border-t  rounded-lg border-zinc-800">
          {" "}
          AAAAAAAAAAAAAA
        </div>
      </div> */}
    </div>
  );
};

export default About;
