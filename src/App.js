import './App.css';
import CartWidget from './components/CartWidget';
import NavBar from './components/NavBar';
import NavBarSections from './components/NavBarSections';
import ItemListContainer from './components/containers/ItemListContainer';
import { HiShoppingCart } from "react-icons/hi";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import ItemList from './components/ItemList';
import Banner from './components/Banner';
import Error404 from './components/Error404';
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import ShopProvider from './context/ShopProvider';

function App() {
  return (
    <div className="App">
      <ShopProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
              <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
              <Route path='*' element={<h2>Ruta no encontrada</h2>}/>
            </Routes>
        </BrowserRouter>
      </ShopProvider>
    </div>
  );
}

export default App;
