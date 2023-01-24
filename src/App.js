import './App.css';
import CartWidget from './components/CartWidget';
import NavBar from './components/NavBar';
import NavBarSections from './components/NavBarSections';
import ItemListContainer from './components/ItemListContainer';
import { HiShoppingCart } from "react-icons/hi";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <NavBarSections/>
      <ItemListContainer/>
      <Footer/>
    </div>
  );
}

export default App;
