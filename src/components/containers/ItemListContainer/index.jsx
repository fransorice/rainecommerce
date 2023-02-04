import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../ItemList';
import { db } from '../../../firebase/config';
import { collection, getDocs, query, where } from "firebase/firestore";
import Ad from '../../Ad';
import './styles.css';

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([]);
  const [adVisibility, setAdVisibility] = useState(true);

  //Lo primero es capturar la categoría que quiero filtrar
  const {categoryId}  = useParams();


  //Este effect se ejecuta cuando se monta el componente
  useEffect(()=> {

    const getProducts = async () => {
      let querySnapshot;
      if (categoryId) {
        const q = query(collection(db, "products"), where("category", "==", categoryId));
        querySnapshot = await getDocs(q);
      } else {
        querySnapshot = await getDocs(collection(db, "products"));
      }
      const productosFirebase = [];
      querySnapshot.forEach((doc) => {
        const product = {
          id: doc.id,
          ...doc.data()
        }
        productosFirebase.push(product)
      });
      setProducts(productosFirebase)
    }

    getProducts();
  }, [categoryId])

  const handleCloseAd = () => {
    setAdVisibility(false);
  }

  return (
    <div>
      <ItemList productos={products}/>
      {
        adVisibility === true
        ?
        <Ad>
          <h3>Envío gratis y 6 cuotas sin interés en productos seleccionados</h3>
          <button
            style={{
              width: 0,
              padding: 8,
              border: 'none',
              background: 'none',
              marginTop: 50,
              fontSize: '20px' 
            }}
            onClick = {handleCloseAd}
          >X</button>
        </Ad>
        :
        null
      }
    </div>
  )
}

export default ItemListContainer