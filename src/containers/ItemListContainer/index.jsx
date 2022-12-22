import React from 'react'
import Item from '../../components/Card'
import './styles.scss'

const ItemListContainer = () => {
  return (
    <div className='item-list-container'>
      <Item title={"Remera 1"}/>
      <Item title={"Remera 2"}/>
      <Item title={"Remera 3"}/>
    </div>
  )
}

export default ItemListContainer