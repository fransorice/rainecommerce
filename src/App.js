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
import Cart from './components/containers/CartContainer';

function App() {
  return (
    <div className="App">
      <ShopProvider>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<><NavBar/><NavBarSections/><ItemListContainer/><Footer/></>}/>
              <Route path='/category/:categoryId' element={<><NavBar/><NavBarSections/><ItemListContainer/><Footer/></>}/>
              <Route path='/detail/:id' element={<><NavBar/><ItemDetailContainer/><Footer/></>}/>
              <Route path='/cart' element={<><NavBar/><Cart/><Footer/></>}/>
              <Route path='*' element={<Error404/>}/>
            </Routes>
        </BrowserRouter>
      </ShopProvider>
    </div>
  );
}

export default App;
