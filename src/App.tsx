import {useRef, useState} from 'react'
import {Header} from "./components/Header";
import { Routes, Route } from "react-router-dom";

import './global.scss';


import {Home} from "./pages/Home";
import {Experience} from "./pages/Experience";
import {Work} from "./pages/Work";
import {Contact} from "./pages/Contact";
import {Footer} from "./components/Footer";
import {About} from "./pages/About";

import { useTranslation } from 'react-i18next'


function App() {
  const [count, setCount] = useState(0)
  const articleRef = useRef(null)
  // @ts-ignore
  const scrollToElement = () => articleRef.current.scrollIntoView({ behavior: 'smooth' });


  return (
    <>
      <Header onClick={scrollToElement}/>
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
