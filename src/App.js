

import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Menu from './components/Menu';
import Planet from './components/Planet';
import { useState } from 'react';

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (

    <FullBody >
      <Header  navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
      <Routes>
        <Route path='/' element={<Menu render navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>}/>
        <Route path='/planet/:planet' element={<Planet navbarOpen={navbarOpen}/>}/>
        <Route path='/planet' element={<Menu render navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>}/>


     
      </Routes>
    
    
    </FullBody>
  );
}

export default App;


const FullBody = styled.div`
padding:16px 24px;
background-image: url("https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif");
background-repeat:no-repeat;
background-size:cover`