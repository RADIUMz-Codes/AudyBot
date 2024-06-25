import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
function App() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  return (
    <>
    <Navbar setNavbarHeight= {setNavbarHeight}/>
    <div style={{marginTop:`${navbarHeight}px`}}>
      
    </div>
    </>
  );
}

export default App;
