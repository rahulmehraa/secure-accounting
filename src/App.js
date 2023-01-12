//import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer'
import Button from './component/Button';
import Routers from './routers/Routers';
function App() {
  return (
      <div className="App">
      <Routers />
      <Button />
      <Footer />
    </div>
  );
};

export default App;


