import './App.css';
import CartWidget from './components/CartWidget';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import { HiShoppingCart } from "react-icons/hi";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <CartWidget/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
