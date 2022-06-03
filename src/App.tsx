import { useState } from 'react'
import {Header} from "./components/Header";
import { Routes, Route } from "react-router-dom";

import './global.scss';

import {Home} from "./pages/Home";
import {Experience} from "./pages/Experience";
import {Work} from "./pages/Work";
import {Contact} from "./pages/Contact";
import {Footer} from "./components/Footer";
import {About} from "./pages/About";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/about" element={ <About/> }/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      {/**/}
    </>
  )
}

export default App
