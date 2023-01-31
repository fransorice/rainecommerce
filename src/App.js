import './App.css';
import CartWidget from './components/CartWidget';
import NavBar from './components/NavBar';
import NavBarSections from './components/NavBarSections';
import ItemListContainer from './components/ItemListContainer';
import { HiShoppingCart } from "react-icons/hi";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import ItemList from './components/ItemList';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <NavBarSections/>
        <Routes>
          <Route path='/' element={<><Banner/><ItemListContainer/></>}/> 
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='*' element={<h2>Ruta no encontrada pa</h2>}/>
          <Route path='/detail/:id' element={<ItemList/>}/> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
