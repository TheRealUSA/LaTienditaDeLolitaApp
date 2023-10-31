import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import Inicio from './screams/Inicio';
import SobreNosotros from './screams/SobreNosotros';
import Galeria from './screams/Galeria';
import Contactenos from './screams/Contactenos';


import Navbar from './components/navbar/navbar';
import Body from './components/bodyFooter/body';
import Footer from './components/footer/footer';

function App() {
  return (<div className='flex flex-col'>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Inicio/>}/>  

    <Route path='/SobreNosotros' element={<SobreNosotros/>}/>  

    <Route path='/Galeria' element={<Galeria/>}/>  

    <Route path='/Contactenos' element={<Contactenos/>}/>  
  </Routes>
  </BrowserRouter>
  <Body/>
  <Footer/>
    </div>
  );
}

export default App;
