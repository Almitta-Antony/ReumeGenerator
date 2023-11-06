import React from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import "./App.css";
import NavHeader from "./components/NavHeader/NavHeader";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";



function App() {
  return (
    <div className="App">
      <NavHeader/>
      <Routes>
        <Route path="/" element={<Header/>}></Route>
       <Route path='/body' element={<Body/>}> </Route>
       <Route path='/about' element={<About/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
