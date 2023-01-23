import React from 'react'
import { Link } from 'react-router-dom'
import RemoveProduct from './RemoveProduct'

const ListItem = ({id, name, amount}) => {
  return (
    <div className='productList'>
       <RemoveProduct id={id} />
       <Link to={`product/${id}`}>
          {id}-  {name} <span>${amount}</span>
        </Link>
    </div>
  )
}

export default ListItem
