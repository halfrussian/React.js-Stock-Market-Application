import React from 'react'
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import News from './Pages/News';
import Quotes from './Pages/Quotes';
import Careers from './Pages/Careers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
   <Router>
   
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/careers' element={<Careers/>} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} /> 
    <Route path='/news' element={<News />} />
    <Route path='/quotes' element={<Quotes />} />
    </Routes>
  
  </Router>
    </>
  );
}

export default App;
