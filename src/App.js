//import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer'
import Button from './component/Button';
import Modal from './component/Modal'
import Routers from './routers/Routers';
import { useEffect, useState } from 'react';
import Loader from './component/loader/Loader';

const App = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoader(true);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };

  }, []);

  return (
    <div className="App">
      {
        !loader ? (<Loader />) :
          (
            <>
              <Routers />
              <Modal />
              <Button />
              <Footer />
            </>
          )
      }

    </div>
  );
};

export default App;


