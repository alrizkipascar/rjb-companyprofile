import logo from "./logo.svg";
import "./App.css";
import Experience from "./Pages/Experience";
import Welcome from "./Pages/Home";
import Nav from "./Pages/component/Nav";
import SinglePage from "./Pages/SinglePage";
import Animasection from "./Pages/component/animation";
//import { Router } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import { useEffect } from "react";
import Skills from "./Pages/Skills";
import Product from "./Pages/Product/Product";

function App() {
  
  
  return (
    <BrowserRouter basename='/rjb-companyprofile'>
      <Routes>
        <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        
        <Route path="products/:id" element={<Product />} />
        <Route path="products" element={<Experience />} />
        <Route path="workforce" element={<Skills />} />
        <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <Route index element={<Home />} />
    // <Route path="blogs" element={<SinglePage />} />
    // <Route path="contact" element={<Contact />} />
    // <Route path="*" element={<NoPage />} />
    // <Router>
    // <div className="w-full h-screen">
      
    // </div>
    // </Router>
  );
}

export default App;
