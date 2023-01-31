import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import { db } from '../../firebase/config';
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])

  //Lo primero es capturar la categoría que quiero filtrar
  const {categoryId}  = useParams()

  console.log({categoryId});

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

  return (
    <ItemList productos={products}/>
  )
}

export default ItemListContainer