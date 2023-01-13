import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer'
import Button from './component/Button';
import Routers from './routers/Routers';
import { useEffect, useState } from 'react';
import Loader from './component/loader/Loader';

function App() {
  const [loader , setLoader] = useState(false);

  useEffect(() =>{
    let timer = setTimeout(() =>{
      setLoader(true)
    }, 2000);
    return () =>{
      clearTimeout(timer);
    };
  }, []);
  
  return (
      <div>
        {
          !loader ? (
      <Loader/>
          ) : (
            <>
      <Routers />
      <Button />
      <Footer />
      </>
          )
        }
      
    </div>
  );
};

export default App;


