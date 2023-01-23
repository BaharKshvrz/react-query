import React from 'react'
import ListItem from './ListItem';
import { useAllProducts } from '../hooks';

const Products = () => {
  const { data: products, isLoading } = useAllProducts();
  if (isLoading) return <p>loading ...</p>

  return (
    <>
      {products.map(product => (
        <div key={product.id}>
          <ListItem
            id={product.id}
            name={product.name}
            amount={product.amount}
          />
        </div>
      ))}
    </>
  )
}

export default Products;
