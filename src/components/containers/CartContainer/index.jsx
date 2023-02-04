import React, { useContext } from 'react'
import TableRow from './TableRow'
import { Shop } from '../../../context/ShopProvider';

const Cart = () => {

  const {products} = useContext(Shop);

  console.log(products)

  return (
    <table class="table table-success table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Producto</th>
          <th scope="col">Titulo</th>
          <th scope="col">Precio p/unidad</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Remover</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => {
          return <TableRow key={product.id} product={product}/>
        })}
      </tbody>
    </table>
  )
}

export default Cart