import React from 'react'

const TableRow = ({product}) => {
  return (
    <tr className='products-table'>
          <th scope="row">{product.id}</th>
          <td><img src={product.img} alt="table-row" width="100" height="100"></img></td>
          <td>{product.titulo}</td>
          <td>{product.precio}</td>
          <td>{product.quantity}</td>
          <td><button>Remove</button></td>
    </tr>
  )
}

export default TableRow